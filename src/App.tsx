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
  {
    id: 2,
    title: "MDN Web Docs",
    url: "developer.mozilla.org",
    description:
      "Resources for developers, by developers with documentation for web technologies",
    tags: ["documentation", "web", "learning"],
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

  function handleUpdateLink(id: number) {
    console.log("updated...");
    const updated: Link[] = links.map((l) => {
      l.id === id
        ? {
            id: id,
            title: title,
            description: description,
            tags: tags,
            url: url,
          }
        : l;
    });
    setLinks(updated);

    // come back... please....
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
          title={title}
          setTitle={setTitle}
          tags={tags}
          setTags={setTags}
          description={description}
          setDescription={setDescription}
          url={url}
          setUrl={setUrl}
          setLinks={setLinks}
          isUpdated={isUpdated}
          setIsUpdated={setIsUpdated}
          currentId={currentId}
          setCurrentId={setCurrentId}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
