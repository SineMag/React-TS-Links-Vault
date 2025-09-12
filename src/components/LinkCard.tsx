// File: src/components/LinkCard.tsx
import React from 'react';
import { MdImportContacts } from 'react-icons/md';
import type { Link } from '../types/Link';

interface LinkCardProps {
  link: Link;
  onDelete: () => void;
}

export default function LinkCard({ link, onDelete }: LinkCardProps) {
  return (
    <div className="link-card">
      <div className="card-tags">
        {link.tags?? [].map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="card-content">
        <h3>{link.title}</h3>
        <a href={`https://${link.url}`} target="_blank" rel="noopener noreferrer">
          {link.url}
        </a>
        <p>{link.description}</p>
      </div>
      <div className="card-actions">
        <button className="action-btn edit-btn" title="Edit">
          <i className="fas fa-edit"></i>
        </button>
        <button className="action-btn delete-btn" title="Delete" onClick={onDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}