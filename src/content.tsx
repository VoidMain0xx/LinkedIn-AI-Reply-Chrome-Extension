import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"
import { CountButton } from "~features/CountButton"
import { Button } from "~features/Button"
import Modal1 from "~features/Modal1"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"] 
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}
 
const PlasmoOverlay = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Mounting an Elemet
  useEffect(() => {
    const interval = setInterval(() => {
      const textAreaElement = document.querySelector('.msg-form__contenteditable') as HTMLElement;
      if (textAreaElement) {
        const button = document.createElement('button');
        button.style.border = 'none';
        button.style.background = 'transparent';
        button.style.position = 'absolute';
        button.style.bottom = "2px";
        button.style.right = '0';
        button.style.padding = '0';
        button.style.cursor = 'pointer';

        const img = document.createElement('img');
        img.src = 'https://img.freepik.com/premium-psd/3d-rendering-star-icon-transparent-background_178156-526.jpg';
        img.alt = 'Image Alt Text';
        img.style.maxWidth = '30px';
        img.style.maxHeight = '30px';

        button.appendChild(img);
        button.addEventListener('click', () => setIsModalVisible(true));

        textAreaElement.appendChild(button);
    
        clearInterval(interval);
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  // Handling reply
  const handleInsertReply = () => {
    const textAreaElement = document.querySelector('.msg-form__contenteditable') as HTMLElement;  
    if (textAreaElement) {
        const paragraphElement = textAreaElement.querySelector('p');
        if (paragraphElement) {
            paragraphElement.textContent = "";
            const replyText = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask"; // we can chang this feature in future after imtegrating open ai or smowhat similary to it
            paragraphElement.textContent += replyText + " ";
        }
    }
};

  return (
    <>
      <div className="z-50 flex fixed top-32 right-8">
        <CountButton />
        <div className="z-50 flex fixed left-8">
          <Button />
        </div>
      </div>
      {isModalVisible && <Modal1 onClose={() => setIsModalVisible(false) } onInsertReply={handleInsertReply} />}
    </>
  )
}

export default PlasmoOverlay
