import React, { createContext, useCallback, useContext, useState } from 'react';
import Modal from '../components/Modal';

interface ModalContextData {
  isOpen: boolean;
  modalContent?: React.ReactNode;
  handleModal(content?: React.ReactNode): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>('');

  const handleModal = useCallback(
    (content: React.ReactNode) => {
      setIsOpen(!isOpen);

      if (content) {
        setModalContent(content);
      }
    },
    [isOpen],
  );

  return (
    <ModalContext.Provider value={{ isOpen, handleModal, modalContent }}>
      <Modal>{modalContent}</Modal>

      {children}
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }

  return context;
}

export { ModalProvider, useModal };
