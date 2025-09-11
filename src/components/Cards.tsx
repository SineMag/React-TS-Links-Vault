import React, { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import Modal from './Modal';

interface LinkItem {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
}

interface CardsProps {
  link: LinkItem;
  onDelete: (id: string) => void;
  onEdit: (link: LinkItem) => void;
}

const Cards: React.FC<CardsProps> = ({ link, onDelete, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(link.id);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = () => {
    onEdit(link);
  };

  return (
    <>
      <div className="link-card">
        {/* Tags section */}
        {link.tags.length > 0 && (
          <div className="card-tags">
            {link.tags.map((tag: string, index: number) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link details */}
        <div className="card-details">
          <h4>
            Title: <span>{link.title}</span>
          </h4>
          <h4>
            Link:{' '}
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.url}
            </a>
          </h4>
          <h4>
            Description: <span>{link.description}</span>
          </h4>

          {/* Edit and delete buttons */}
          <div className="edit-delete-buttons">
            <button className="edit-btn" onClick={handleEdit} title="Edit">
              <MdModeEdit />
            </button>
            <button className="delete-btn" onClick={handleDeleteClick} title="Delete">
              <RiDeleteBinLine color="red" />
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div>
          <h2 style={{ marginBottom: '1rem' }}>Confirm Delete</h2>
          <p>Are you sure you want to delete the link "{link.title}"?</p>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px',
            marginTop: '20px',
          }}>
            <button
              onClick={handleCloseModal}
              style={{
                padding: '10px 20px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: '#f0f0f0',
                color: '#333',
                cursor: 'pointer',
                fontWeight: '600',
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmDelete}
              style={{
                padding: '10px 20px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: '#e74c3c',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '600',
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Cards;