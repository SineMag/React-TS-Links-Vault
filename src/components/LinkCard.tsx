// File: src/components/LinkCard.tsx
import React, { useState } from "react";
import { MdImportContacts } from "react-icons/md";
import type { Link } from "../types/Link";

interface LinkCardProps {
  link: Link;
  links: Link[];
  onDelete: () => void;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  isUpdated: boolean;
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  currentId: number;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
}

export default function LinkCard({
  link,
  onDelete,
  title,
  setTitle,
  url,
  setUrl,
  description,
  setDescription,
  tags,
  setTags,
  setLinks,
  isUpdated,
  setIsUpdated,
  links,
  currentId,
  setCurrentId,
}: LinkCardProps) {
  function editFunction() {
    setIsUpdated(true);
    setTitle(link.title);
    setDescription(link.description);
    setUrl(link.url);
    setCurrentId(link.id);
    setTags(link.tags);
  }

  return (
    <div className="link-card">
      <div className="card-tags">
        {link.tags ??
          [].map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
      </div>
      <div className="card-content">
        <h3>{link.title}</h3>
        
        <p>{link.description}</p>
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
          onClick={onDelete}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        
      </div>
    </div>
  );
}
