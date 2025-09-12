import type { Link } from "../types/Link";
import LinkCard from "./LinkCard";
import React from "react";

interface LinksSectionProps {
  links: Link[];
  onDeleteLink: (id: number) => void;
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

export default function LinksSection({
  links,
  onDeleteLink,
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
  currentId,
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
            <LinkCard
              link={link}
              onDelete={() => onDeleteLink(link.id)}
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
              links={links}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          ))
        )}
      </div>
    </section>
  );
}
