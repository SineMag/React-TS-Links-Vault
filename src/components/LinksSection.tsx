import type { Link } from '../types/Link';
import LinkCard from './LinkCard';
import React from 'react';

interface LinksSectionProps {
  links: Link[];
  onDeleteLink: (id: number) => void;
}

export default function LinksSection({ links, onDeleteLink }: LinksSectionProps) {
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
          links.map(link => (
            <LinkCard
              key={link.id}
              link={link}
              onDelete={() => onDeleteLink(link.id)}
            />
          ))
        )}
      </div>
    </section>
  );
}