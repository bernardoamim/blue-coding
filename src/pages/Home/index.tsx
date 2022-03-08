import React, { useCallback, useEffect, useState } from 'react';
import { useModal } from '../../hooks/modal';
import GiphyModal from '../../modals/GiphyModal';
import api from '../../services/api';

import {
    Container,
    Title,
    SearchContainer,
    SearchInput,
    ImagesContainer,
    GifCard,
    RightContent,
  } from './styles';


export interface GifProps {
  embed_url: string;
  id: string;
  title: string;
  username: string;
  images: {
    preview_gif: {
      url: string;
    }
  }
}

const Home: React.FC = () => {
  const [gifsList, setGifsList] = useState<GifProps[]>([]);
  const [searchText, setSearchText] = useState('');
  const { handleModal } = useModal();

  const loadGifsData = (searchStr: string) => {
    api
      .get(searchStr || 'cheeseburgers')
      .then(response => {
        setGifsList(response.data.data);
      })
      .catch(() => {
        alert('There was an error loading the data');
      });
  };

  useEffect(() => {
    loadGifsData(searchText);
  }, []);

  const handleCardClick = (index: number) => {
    handleModal(
      <GiphyModal currentIndex={index} gifsList={gifsList} />
    );
  };

  const handleNewSearch = () => {
    loadGifsData(searchText);
  };

  return (
    <Container>
      <Title>React JS Test</Title>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder='Search...'
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
        />
        <button
          type='button'
          onClick={handleNewSearch}
          autoFocus
        >
            Search
        </button>
      </SearchContainer>

      <ImagesContainer>

          {gifsList.map((gif, index) => (
            <GifCard
              key={gif.id}
              type='button'
              onClick={() => handleCardClick(index)}
            >
              <img src={gif.images.preview_gif.url} alt={`${searchText} gif`} />

              <RightContent>
                <h3>{gif.title}</h3>
                <p>User: <span>{gif.username || '-'}</span></p>
              </RightContent>
            </GifCard>
          ))}

      </ImagesContainer>
    </Container>
  )
};

    export default Home;
