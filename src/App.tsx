import { useState, useMemo } from "react";
import type { Link } from "./types/Link";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Header from "./components/Header";
import LinkForm from "./components/LinkForm";
import LinksSection from "./components/LinksSection";
import Footer from "./components/Footer";
import "./App.css";

const sampleLinks: Link[] = [
  {
    id: 1,
    title: "React Official Website",
    url: "reactjs.org",
    description:
      "The official React JavaScript library website with documentation and tutorials",
    tags: ["react", "frontend", "javascript"],
  },
];

function App() {
  const [links, setLinks] = useLocalStorage<Link[]>("links", sampleLinks);
  const [searchQuery, setSearchQuery] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(0);

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

  function handleUpdateLink(updatedLink: Link) {
    const updated = links.map((l) => (l.id === updatedLink.id ? updatedLink : l));
    setLinks(updated);
  }

  const handleAddLink = (newLink: Omit<Link, "id">) => {
    setLinks((prev) => [...prev, { ...newLink, id: Date.now() }]);
  };

  const handleDeleteLink = (id: number) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      setLinks((prev) => prev.filter((link) => link.id !== id));
    }
  };

  return (
    <div className="container">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="main-content" style={{ display: "flex", flexDirection: "column" }}>
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
    </div>
  );
}

export default App;
