import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1rem;
  z-index: 2001;
  width: 55vw;
  height: 70vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 2.5rem;
  border-bottom: 1px solid #e3e2e2;

  > svg {
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: rotate(90deg);
      opacity: 0.8;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 86%;
  width: 100%;
  padding: 1.5rem;

  > img {
    max-width: 15rem;
    width: 15rem;
  }

  > button {
    color: #635efb;
    min-width: 4rem;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    text-align: center;

    &:hover {
      text-decoration: underline;
    }
  }
`;
