import { useState } from 'react';
import React from 'react';

import type { Link } from '../types/Link';

interface LinkFormProps {
  onAddLink: (link: Omit<Link, 'id'>) => void;
}

export default function LinkForm({ onAddLink }: LinkFormProps) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !url || !description) {
      alert('Please fill in all required fields');
      return;
    }

    onAddLink({
      title,
      url,
      description,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
    });

    // Reset form
    setTitle('');
    setUrl('');
    setDescription('');
    setTags('');
  };

  return (
    <section className="form-section">
      <h2>Add Your Link</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title <span className="required">*</span></label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="url">Link <span className="required">*</span></label>
          <div className="url-input">
            <span className="url-prefix">https://</span>
            <input
              type="text"
              id="url"
              placeholder="example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description <span className="required">*</span></label>
          <textarea
            id="description"
            placeholder="Enter description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            placeholder="Comma separated"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        
        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">Save Link</button>
        </div>
      </form>
    </section>
  );
}