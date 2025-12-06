import type { Link } from "../types/Link";
import LinkCard from "./LinkCard";
import { IoIosLink } from "react-icons/io";
import React from "react";

interface LinksSectionProps {
  links: Link[];
  onDeleteClick: (id: number, title: string) => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
}

export default function LinksSection({
  links,
  onDeleteClick,
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
            <IoIosLink className="empty-icon" />
            <h3>No links yet</h3>
            <p>Add your first link using the form</p>
          </div>
        ) : (
          links.map((link) => (
            <LinkCard
              key={link.id}
              link={link}
              onDelete={() => onDeleteClick(link.id, link.title)}
              setTitle={setTitle}
              setUrl={setUrl}
              setDescription={setDescription}
              setTags={setTags}
              setIsUpdated={setIsUpdated}
              setCurrentId={setCurrentId}
            />
          ))
        )}
      </div>
    </section>
  );
}
