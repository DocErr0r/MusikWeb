import React from 'react';
import './modal.css';

const SearchModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Don't render the modal if it is not open

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-box"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};

export default SearchModal;
