

// import React, { useState } from 'react';

// interface ModalProps {
//     onClose: () => void;
//     onInsertReply: () => void;
// }

// const Modal1: React.FC<ModalProps> = ({ onClose, onInsertReply }) => {
//     const [messages, setMessages] = useState<string[]>([]);
//     const [inputValue, setInputValue] = useState<string>('');

//     const handleSend = () => {
//         if (inputValue.trim() !== '') {
//             // Add the user's message to the messages array
//             const userMessage = inputValue.trim();
//             setMessages(prevMessages => [...prevMessages, userMessage]);

//             // Clear the input field
//             setInputValue('');

//             // Automatically reply after a short delay
//             setTimeout(() => {
//                 const automatedReply = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask";
//                 setMessages(prevMessages => [...prevMessages, automatedReply]);
//             }, 500);
//         }
//     };

//     const handleInsert = () => {
//         // Handle insert functionality here
//         console.log("Insert button clicked");
//         onInsertReply();
//         onClose();
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4">
//                 <div className="flex justify-between border-b pb-2">
//                     <h2 className="text-lg">Chat Box</h2>
//                     <button onClick={onClose} className="text-red-500 ml-2">Close</button>
//                 </div>

//                 <div className="h-64 overflow-y-auto my-4">
//                     {/* Rendering messages */}
//                     {messages.map((message, index) => (
//                         <div key={index} className={`flex mb-2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
//                             <div className={`bg-${index % 2 === 0 ? 'blue' : 'gray'}-500 text-black py-2 px-4 rounded-lg max-w-3/4 ${index % 2 !== 0 ? 'ml-auto' : ''}`}>{message}</div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="border-t pt-2 relative">
//                     <input
//                         type="text"
//                         className="w-full border rounded p-2 pr-20"
//                         placeholder="Type a message..."
//                         value={inputValue}
//                         onChange={(e) => setInputValue(e.target.value)}
//                     />
//                 </div>
//                 <div className="flex justify-center items-center mt-2">
//                     <button
//                         className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 flex-1 h-12"
//                         onClick={handleSend}
//                     >
//                         Generate
//                     </button>
//                     <button
//                         className="bg-gray-300 text-gray-700 rounded p-2 hover:bg-gray-400 flex-1 h-12 ml-2"
//                         onClick={handleInsert}
//                     >
//                         Insert
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal1;

import React, { useState } from 'react';

interface ModalProps {
    onClose: () => void;
    onInsertReply: () => void;
}

const Modal1: React.FC<ModalProps> = ({ onClose, onInsertReply }) => {
    const [messages, setMessages] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleSend = () => {
        if (inputValue.trim() !== '') {
            // Add the user's message to the messages array
            const userMessage = inputValue.trim();
            setMessages(prevMessages => [...prevMessages, userMessage]);

            // Clear the input field
            setInputValue('');

            // Automatically reply after a short delay
            setTimeout(() => {
                const automatedReply = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask";
                setMessages(prevMessages => [...prevMessages, automatedReply]);
            }, 500);
        }
    };

    const handleInsert = () => {
        // Handle insert functionality here
        console.log("Insert button clicked");
        onInsertReply();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4">
                <div className="flex justify-between border-b pb-2">
                    <h2 className="text-lg">Chat Box</h2>
                    <button onClick={onClose} className="text-red-500 ml-2">Close</button>
                </div>

                <div className="h-64 overflow-y-auto my-4">
                    {/* Rendering messages */}
                    {messages.map((message, index) => (
                        <div key={index} className={`flex mb-2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                            <div className={`bg-${index % 2 === 0 ? 'blue' : 'stone'}-500 text-black py-2 px-4 rounded-lg max-w-3/4 ${index % 2 !== 0 ? 'ml-auto' : ''} ${index % 2 === 0 ? 'text-black' : ''}`}>{message}</div>
                        </div>    
                    ))}
                </div>

                <div className="border-t pt-2 relative">
                    <input
                        type="text"
                        className="w-full border rounded p-2 pr-20"
                        placeholder="Type a message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                <div className="flex justify-center items-center mt-2">
                    <button
                        className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 flex-1 h-12"
                        onClick={handleSend}
                    >
                        Generate
                    </button>
                    <button
                        className="bg-gray-300 text-gray-700 rounded p-2 hover:bg-gray-400 flex-1 h-12 ml-2"
                        onClick={handleInsert}
                    >
                        Insert
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal1;

