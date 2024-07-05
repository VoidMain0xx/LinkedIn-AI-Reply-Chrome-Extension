import React from "react";

type PropTypes = {
    children: React.ReactNode;
    onClose: () => void;
    open: boolean;
};

const Modal: React.FC<PropTypes> = ({ open, onClose, children }) => {
    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center" onClick={onClose}>
            <div className="bg-white p-5 rounded shadow-lg relative" onClick={e => e.stopPropagation()}>
                <button className="absolute top-2 right-2 text-xl" onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
