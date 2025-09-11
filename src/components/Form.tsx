import React, { useState, useEffect } from "react";
import type { LinkItem } from "../types"; // ✅ type-only import
import { getLinks, saveLinks } from "../utils/LocalStorageFunction";
import Cards from "./Cards";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default function Form() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  //  from localStorage
  useEffect(() => {
    setLinks(getLinks());
  }, []);

  // to localStorage
  useEffect(() => {
    saveLinks(links);
  }, [links]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !link || !description) return;

    if (editId) {
      setLinks(
        links.map((l) =>
          l.id === editId
            ? { ...l, title, link: `https://${link}`, description, tags }
            : l
        )
      );
      setEditId(null);
    } else {
      const newLink: LinkItem = {
        id: Date.now().toString(),
        title,
        link: `https://${link}`,
        description,
        tags,
      };
      setLinks([...links, newLink]);
    }

    setTitle("");
    setLink("");
    setDescription("");
    setTags("");
  };

  const handleDelete = (id: string) => {
    setLinks(links.filter((l) => l.id !== id));
  };

  const handleEdit = (id: string) => {
    const l = links.find((link) => link.id === id);
    if (l) {
      setTitle(l.title);
      setLink(l.link.replace("https://", ""));
      setDescription(l.description);
      setTags(l.tags || "");
      setEditId(l.id);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {/* form section */}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {/* adding new links button */}
        <button
          style={{
            height: "4vh",
            backgroundColor: "#8546f3ff",
            color: "white",
            borderRadius: "15px",
            border: "none",
            maxWidth: "25%",
            marginTop: "5%",
          }}
        >
          Add New Link
        </button>

        <label
          style={{
            fontSize: "75%",
          }}
        >
          Title*
        </label>
        <input
          style={{
            outline: "none",
            border: "1px solid #3C7EC9",
            padding: "1%",
            borderRadius: "15px",
            flex: 1,

            fontSize: "0.8rem",
            paddingLeft: "5px",
          }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />

        <label
          style={{
            fontSize: "75%",
          }}
        >
          Link*
        </label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            outline: "none",
            border: "1px solid #3C7EC9",
            borderRadius: "15px",
            flex: 1,

            fontSize: "0.8rem",
            paddingLeft: "5px",
          }}
        >
          <span
            style={{
              padding: "10px",
              background: "#ddd",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
          >
            https://
          </span>
          <input
            style={{
              display: "flex",
              alignItems: "center",
              outline: "none",
              border: "none",
              padding: "1%",

              flex: 1,

              fontSize: "0.8rem",
              paddingLeft: "5px",
            }}
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="example.com"
          />
        </div>

        <label
          style={{
            fontSize: "75%",
          }}
        >
          Description*
        </label>
        <input
          style={{
            display: "flex",
            alignItems: "center",
            outline: "none",
            border: "1px solid #3C7EC9",

            padding: "1%",
            borderRadius: "15px",
            flex: 1,

            fontSize: "0.8rem",
            paddingLeft: "5px",
          }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />

        <label
          style={{
            fontSize: "75%",
          }}
        >
          Tags
        </label>
        <input
          style={{
            display: "flex",
            alignItems: "center",
            outline: "none",
            border: "1px solid #3C7EC9",

            padding: "1%",
            borderRadius: "15px",
            flex: 1,

            fontSize: "0.8rem",
            paddingLeft: "5px",
          }}
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Comma separated"
        />

        <button
          type="submit"
          style={{
            width: "100%",
            height: "4vh",
            backgroundColor: "#8546f3ff",
            color: "white",
            borderRadius: "15px",
            border: "none",
          }}
        >
          {editId ? "Update Link" : "Save Link"}
        </button>
      </form>

      {/* cards to be displayed once user has entered details*/}
      <div style={{ marginTop: "20px" }}>
        {links.length === 0 ? (
          <div
            style={{
              color: "#3C7EC1",
              fontSize: "25px",
              paddingLeft: "2%",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <h3>
              {" "}
              <MdDoNotDisturbAlt size={30} color="#3C7EC1" /> No Links Found!{" "}
            </h3>
          </div>
        ) : (
          links.map((l) => (
            <Cards
              key={l.id}
              item={l}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}
