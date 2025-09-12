import { useState, useMemo } from 'react';
import type { Link } from './types/Link';
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/Header';
import LinkForm from './components/LinkForm';
import LinksSection from './components/LinksSection';
import Footer from './components/Footer';
import "./App.css"


const sampleLinks: Link[] = [
  {
    id: 1,
    title: "React Official Website",
    url: "reactjs.org",
    description: "The official React JavaScript library website with documentation and tutorials",
    tags: ["react", "frontend", "javascript"]
  },
  {
    id: 2,
    title: "MDN Web Docs",
    url: "developer.mozilla.org",
    description: "Resources for developers, by developers with documentation for web technologies",
    tags: ["documentation", "web", "learning"]
  }
];

function App() {
  const [links, setLinks] = useLocalStorage<Link[]>('links', sampleLinks);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLinks = useMemo(() => {
    if (!searchQuery) return links;
    
    const query = searchQuery.toLowerCase();
    return links.filter(link => {
      return (
        link.title.toLowerCase().includes(query) ||
        link.url.toLowerCase().includes(query) ||
        link.description.toLowerCase().includes(query) ||
        link.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    });
  }, [links, searchQuery]);

  const handleAddLink = (newLink: Omit<Link, 'id'>) => {
    setLinks(prev => [...prev, { ...newLink, id: Date.now() }]);
  };

  const handleDeleteLink = (id: number) => {
    if (window.confirm('Are you sure you want to delete this link?')) {
      setLinks(prev => prev.filter(link => link.id !== id));
    }
  };

  return (
    <div className="container">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <div className="main-content">
        <LinkForm onAddLink={handleAddLink} />
        <LinksSection
          links={filteredLinks}
          onDeleteLink={handleDeleteLink}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;