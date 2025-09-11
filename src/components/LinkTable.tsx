import React, { useState } from "react";
import type { LinkItem } from "../App";
import Modal from "./Modal";

interface Props {
  links: LinkItem[];
  onDelete: (id: number) => void;
}

const LinkTable: React.FC<Props> = ({ links, onDelete }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedId !== null) {
      onDelete(selectedId);
      setModalOpen(false);
      setSelectedId(null);
    }
  };

  return (
    <div>
      {links.length === 0 }

      
      {/* Use your existing Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div style={{ textAlign: "center" }}>
          <p>Are you sure you want to delete this link?</p>
          <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-around" }}>
            <button
              onClick={confirmDelete}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "red",
                color: "white",
                borderRadius: "5px",
                border: "none",
              }}
            >
              Delete
            </button>
            <button
              onClick={() => setModalOpen(false)}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "gray",
                color: "white",
                borderRadius: "5px",
                border: "none",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LinkTable;
