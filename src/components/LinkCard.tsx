// File: src/components/LinkCard.tsx
import React from "react";
import type { Link } from "../types/Link";

interface LinkCardProps {
  link: Link;
  onDelete: () => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
}

export default function LinkCard({
  link,
  onDelete,
  setTitle,
  setUrl,
  setDescription,
  setTags,
  setIsUpdated,
  setCurrentId,
}: LinkCardProps) {
  function editFunction() {
    setIsUpdated(true);
    setTitle(link.title);
    setDescription(link.description);
    setUrl(link.url);
    setTags(link.tags ?? []);
    setCurrentId(link.id);
  }

  return (
    <div className="link-card" >
      <div className="card-tags">
        {link.tags?.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>


      {/* // showng cards with details */}
      <div className="card-content">
        <h3>{link.title}</h3>
        <p>{link.description}</p>
        <p>
          <a href={`https://${link.url}`} target="_blank" rel="noopener noreferrer">
      {link.url}
    </a>
        </p>
      </div>
      <div className="card-actions">
        <button
          className="action-btn edit-btn"
          title="Edit"
          onClick={editFunction}
        >
          <i className="fas fa-edit"></i>
        </button>
        <button
          className="action-btn delete-btn"
          title="Delete"
          onClick={onDelete }
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}
