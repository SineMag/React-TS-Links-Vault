import type { Link } from "../types/Link";
import LinkCard from "./LinkCard";
import React from "react";

interface LinksSectionProps {
  links: Link[];
  onDeleteLink: (id: number) => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
}

export default function LinksSection({
  links,
  onDeleteLink,
  setTitle,
  setUrl,
  setDescription,
  setTags,
  setIsUpdated,
  setCurrentId,
}: LinksSectionProps) {
  return (
    <section className="links-section">
      <div className="links-header">
        <h2>Your Links</h2>
      </div>

      <div className="links-grid">
        {links.length === 0 ? (
          <div className="empty-state">
            <i className="fas fa-link"></i>
            <h3>No links yet</h3>
            <p>Add your first link using the form</p>
          </div>
        ) : (
          links.map((link) => (
            <div style={{
            width:'100%'
            }}>
            <LinkCard
              key={link.id}
              link={link}
              onDelete={() => onDeleteLink(link.id)}
              setTitle={setTitle}
              setUrl={setUrl}
              setDescription={setDescription}
              setTags={setTags}
              setIsUpdated={setIsUpdated}
              setCurrentId={setCurrentId}
            />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
