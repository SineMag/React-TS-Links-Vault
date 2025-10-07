import { useState, useMemo, useEffect } from "react";
import type { Link } from "./types/Link";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Header from "./components/Header";
import LinkForm from "./components/LinkForm";
import LinksSection from "./components/LinksSection";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import "./App.css";

// Start with an empty list so no links appear until user saves.
const initialLinks: Link[] = [];

function App() {
  const [links, setLinks] = useLocalStorage<Link[]>("links", initialLinks);
  const [searchQuery, setSearchQuery] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(0);
  const [toastMsg, setToastMsg] = useState<string>("");
  const [toastType, setToastType] = useState<"success" | "error" | "info">("info");
  const [showToast, setShowToast] = useState<boolean>(false);

  const filteredLinks = useMemo(() => {
    if (!searchQuery) return links;

    const query = searchQuery.toLowerCase();
    return links.filter((link) => {
      return (
        link.title.toLowerCase().includes(query) ||
        link.url.toLowerCase().includes(query) ||
        link.description.toLowerCase().includes(query) ||
        link.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [links, searchQuery]);

  // One-time migration: remove any previously seeded sample link from older versions
  useEffect(() => {
    const hasSeed = links.some(
      (l) => l.title === "React Official Website" && l.url === "reactjs.org"
    );
    if (hasSeed) {
      setLinks((prev) => prev.filter((l) => !(l.title === "React Official Website" && l.url === "reactjs.org")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleUpdateLink(updatedLink: Link) {
    const updated = links.map((l) => (l.id === updatedLink.id ? updatedLink : l));
    setLinks(updated);
    setToastType("success");
    setToastMsg("Successfully updated link");
    setShowToast(true);
  }

  const handleAddLink = (newLink: Omit<Link, "id">) => {
    setLinks((prev) => [...prev, { ...newLink, id: Date.now() }]);
    setToastType("success");
    setToastMsg("Successfully saved link");
    setShowToast(true);
  };

  const handleDeleteLink = (id: number) => {
    if (window.confirm("Are you sure you want to delete this saved link?")) {
      setLinks((prev) => prev.filter((link) => link.id !== id));
      setToastType("info");
      setToastMsg("Successfully deleted link");
      setShowToast(true);
    }
  };

  return (
    <div className="container">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="main-content">
        <LinkForm
          onAddLink={handleAddLink}
          onUpdateLink={handleUpdateLink}
          title={title}
          setTitle={setTitle}
          tags={tags}
          setTags={setTags}
          description={description}
          setDescription={setDescription}
          url={url}
          setUrl={setUrl}
          isUpdated={isUpdated}
          setIsUpdated={setIsUpdated}
          currentId={currentId}
          setCurrentId={setCurrentId}
        />

        <LinksSection
          links={filteredLinks}
          onDeleteLink={handleDeleteLink}
          setTitle={setTitle}
          setUrl={setUrl}
          setDescription={setDescription}
          setTags={setTags}
          setIsUpdated={setIsUpdated}
          setCurrentId={setCurrentId}
        />
      </div>
      <Footer />
      {showToast && (
        <div className="toast-container">
          <Toast
            message={toastMsg}
            type={toastType}
            onClose={() => setShowToast(false)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
