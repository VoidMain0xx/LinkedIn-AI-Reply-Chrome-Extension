import React, { useState } from 'react';
import Modal from './Modal';

export const Button: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <div className='p-10 flex justify-center w-full'>
            <button
                onClick={() => setOpen(true)}
                className='border border-neutral-300 rounded-lg py-1.5 px-10 my-2 bg-blue-500 hover:bg-blue-600 text-white'
            >
                Launch
            </button>
            <Modal open={open} onClose={handleCloseModal}>
                <h1 className="text-2xl mb-4">This is a modal</h1>
                <input type="text" /> 
                <p>Some content for the modal.</p>
                <button onClick={handleCloseModal} className='mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded'>
                    Close
                </button>
            </Modal>
        </div>
    );
};


