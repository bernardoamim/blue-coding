import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2500;
  background: rgba(0, 4, 0, 0.3);
  color: #fffefc;
`;

export const Content = styled.div`
  max-height: calc(100vh - 2rem);
  background: #fffefc;
  color: #323650;
  box-shadow: 0px 3px 1.8rem rgba(98, 94, 251, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 1.11rem;
`;
