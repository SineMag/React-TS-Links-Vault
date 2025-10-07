import React from "react";
import type { Link } from "../types/Link";

interface LinkFormProps {
  onAddLink: (link: Omit<Link, "id">) => void;
  onUpdateLink: (link: Link) => void; // pass full link object
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  isUpdated: boolean;
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  currentId: number;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
}

export default function LinkForm({
  onAddLink,
  onUpdateLink,
  title,
  setTitle,
  url,
  setUrl,
  description,
  setDescription,
  tags,
  setTags,
  isUpdated,
  setIsUpdated,
  currentId,
  setCurrentId,
}: LinkFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !url || !description) {
      alert("Please fill in all required fields");
      return;
    }

    // Normalize URL: remove protocol and www., trim spaces
    const raw = url.trim();
    const normalizedUrl = raw
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .replace(/\/$/, "");

    // Basic validation: must contain at least one dot and no spaces
    const isValid = /^[^\s]+\.[^\s]+$/i.test(normalizedUrl);
    if (!isValid) {
      alert("Please enter a valid URL, e.g. example.com or docs.example.com");
      return;
    }

    if (isUpdated) {
      onUpdateLink({
        id: currentId,
        title,
        url: normalizedUrl,
        description,
        tags,
      });
      setIsUpdated(false);
    } else {
      onAddLink({ title, url: normalizedUrl, description, tags });
    }

    // Reset form
    setTitle("");
    setUrl("");
    setDescription("");
    setTags([]);
    setCurrentId(0);
  };

  return (
    <section className="form-section">
      <h2>{isUpdated ? "Update Link" : "Add Your Link"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">
            Title <span className="required">*</span>
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="url">
            Link <span className="required">*</span>
          </label>
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
          <label htmlFor="description">
            Description <span className="required">*</span>
          </label>
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
            value={tags.join(", ")}
            onChange={(e) =>
              setTags(
                e.target.value
                  .split(",")
                  .map((t) => t.trim())
                  .filter((t) => t.length > 0)
              )
            }
          />
        </div>

        <div className="form-buttons full-width">
          <button type="submit" className="btn btn-primary full-width">
            {isUpdated ? "Update Link" : "Save Link"}
          </button>
        </div>
      </form>
    </section>
  );
}
