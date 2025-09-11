import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Searchbar from "./components/Searchbar";
import Form from "./components/Form";
import Footer from "./components/Footer";
import LinkTable from "./components/LinkTable";
import Modal from "./components/Modal";

export interface LinkItem {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string[];
}

function App() {
  const [links, setLinks] = useState<LinkItem[]>([
    { id: 1, title: "Google", description: "Search Engine", url: "https://google.com", tags: ["search", "engine"] },
    { id: 2, title: "YouTube", description: "Video Platform", url: "https://youtube.com", tags: ["video", "entertainment"] },
    { id: 3, title: "FreeCodeCamp", description: "Learn to code", url: "https://freecodecamp.org", tags: ["education", "coding"] },
  ]);

  const [filteredLinks, setFilteredLinks] = useState<LinkItem[]>(links);

  // Delete a link by ID
  const deleteLink = (id: number) => {
    const updatedLinks = links.filter((link) => link.id !== id);
    setLinks(updatedLinks);
    setFilteredLinks(updatedLinks); // update filtered list for live search
  };

  return (
    <div style={{ width: "100%", height: "100%", justifyContent: "start", alignItems: "start" }}>
      <Heading />

      <div style={{ width: "100%", padding: "0 4%" }}>
        {/* Searchbar passes filtered results */}
        <Searchbar links={links} onSearchResults={setFilteredLinks} />
        <Form />
        <LinkTable links={filteredLinks} onDelete={deleteLink} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
