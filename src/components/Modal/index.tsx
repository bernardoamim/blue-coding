import React from 'react';
import ReactDOM from 'react-dom';

import { useModal } from '../../hooks/modal';

import { Container, Content } from './styles';

const Modal: React.FC = ({ children }) => {
  const { isOpen } = useModal();

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Container>
      <Content>{children}</Content>
    </Container>,
    document.querySelector('#modal-root') as HTMLDivElement,
  );
};

export default Modal;
