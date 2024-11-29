import React from 'react';
import './modal.css';
import { searchl } from '../svgs/svgs';

const SearchModal = ({ isOpen, onClose,search,setSearch,searchHendler }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-box"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-content">
                    <div className="search">
                        <form
                            className="search-form2 flex center-y"
                            data-pjax-state=""
                            onSubmit={(e) => {
                                searchHendler(e);
                            }}>
                            <input
                                className="none"
                                type="search"
                                placeholder="Search..."
                                value={search}
                                name="serach"
                                data-toggle="dropdown"
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
