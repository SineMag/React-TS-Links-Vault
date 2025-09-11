import React, { useState, useEffect } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import type { LinkItem } from "../App";

interface Props {
  links: LinkItem[];
  onSearchResults: (results: LinkItem[]) => void;
}

const Searchbar: React.FC<Props> = ({ links, onSearchResults }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const lowerQuery = query.toLowerCase();

    const filteredLinks = links.filter(
      (link) =>
        link.title.toLowerCase().includes(lowerQuery) ||
        link.description.toLowerCase().includes(lowerQuery) ||
        link.url.toLowerCase().includes(lowerQuery) ||
        link.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );

    onSearchResults(filteredLinks);
  }, [query, links, onSearchResults]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginBottom: "1rem",
        border: "1px solid black",
        borderRadius: "15px",
        padding: "5px",
        gap: "5px",
      }}
    >
      <input
        type="text"
        placeholder="Search by Title, Description, URL or Tags"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ flex: 1, border: "none", outline: "none", fontSize: "0.9rem", paddingLeft: "5px" }}
      />
      <IoSearchCircleSharp color="black" size={28} />
    </div>
  );
};

export default Searchbar;
