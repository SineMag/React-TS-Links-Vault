import React from "react";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import type { LinkItem } from "../types";

interface CardsProps {
  item: LinkItem;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function Cards({ item, onEdit, onDelete }: CardsProps) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "120px",
        borderRadius: "15px",
        marginTop: "2%",
        boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.2)",
        padding: "1%",
        display: "flex",
        gap: "1rem",
        backgroundColor: "#fff",
      }}
    >
      {/* Tags section */}
      <div
        style={{
          border: "1px solid black",
          width: "20%",
          borderRadius: "15px",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "75%",
          textAlign: "center",
          wordBreak: "break-word",
        }}
      >
        {item.tags ? item.tags : "No Tags"}
      </div>

      {/* Link details */}
      <div style={{ flex: 1 }}>
        <h4 style={{ marginBottom: "5px",  color:'#1B5C9F',  }}>
           <span>{item.title}</span>
        </h4>
        <h4 style={{ marginBottom: "5px" }}>
          {" "}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "grey", textDecoration:'none', fontSize:'80%' }}
          >
            {item.link}
          </a>
        </h4>
        <h4 style={{
          fontSize:'70%', color:'grey'
        }} aria-placeholder="Please provide a description for your link">
          <span>{item.description}</span>
        </h4>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
            gap: "10px",
          }}
        >
          <button
            onClick={() => onEdit(item.id)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "5px",
              cursor: "pointer",
              background: "white",
            }}
          >
            <MdModeEdit size={20} color="green" />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            style={{
              border: "none",
              borderRadius: "5px",
              padding: "5px",
              cursor: "pointer",
              background: "white",
            }}
          >
            <RiDeleteBinLine size={22} color="red" />
          </button>
        </div>
      </div>
    </div>
  );
}
