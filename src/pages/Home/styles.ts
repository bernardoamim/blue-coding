import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 4rem;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
`;

export const SearchContainer = styled.header`
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;

  > button {
    background-color: #635efb;
    color: #fff;
    font-weight: 700;
    line-height: 3rem;
    border-radius: 5px;
    padding: 0 2.5rem;
    margin-left: 1.5rem;

    &:hover {
      background-color: rgba(99, 94, 251, 0.8);
    }
  }
`;

export const SearchInput = styled.input`
  display: flex;
  line-height: 3rem;
  padding-left: 1rem;
  width: 25rem;
  border-radius: 8px;
  border: 4px;
`;

export const ImagesContainer = styled.div`
  display: grid;
  margin-top: 2.5rem;
  min-height: 28rem;
  max-width: 100%;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 1.5rem;
  grid-template-areas:
    'c c'
    'c c';
`;

export const GifCard = styled.button`
  color: #635efb;
  background-color: #fff;
  box-shadow: 3px 3px 15px rgba(50, 54, 80, 0.05);
  border-radius: 8px;
  border-spacing: 0;
  width: 100%;
  width: 30rem;
  min-height: 16rem;
  height: auto;
  display: flex;
  align-items: center;
  padding: 1rem;

  > img {
    border-radius: 8px;
    width: 10rem;
  }
`;


export const RightContent = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  text-align: left;
  margin-left: 1.5rem;
  color: #333;

  > h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  > p {
    font-size: 1rem;
    font-weight: 700;

    > span {
      color: #635efb;
      font-weight: 400;
    }
  }
`;
