import React, { useCallback, useEffect, useState } from 'react';
import { useModal } from '../../hooks/modal';
import CrossIcon from '../../assets/svg/Cross';
import { GifProps } from '../../pages/Home';
import {
  Container,
  Header,
  Content,
} from './styles';

interface GiphyModalProps {
  currentIndex: number;
  gifsList: GifProps[];
}

const GiphyModal: React.FC<GiphyModalProps> = ({
    currentIndex,
    gifsList,
  }) => {
    const [currentGifIndex, setCurrentGifIndex] = useState(currentIndex);
    const { handleModal } = useModal();

    const handleClose = () => {
      handleModal(null);
    };

    const showPrevious = () => {
      if (currentGifIndex === 0) {
        setCurrentGifIndex(gifsList.length - 1);
      } else {
        setCurrentGifIndex(prev => prev - 1);
      }
    };

    const showNext = () => {
      if (currentGifIndex === gifsList.length - 1) {
        setCurrentGifIndex(0);
      } else {
        setCurrentGifIndex(prev => prev + 1);
      }
    };

    return (
      <Container>
        <Header>
          <CrossIcon
            onClick={handleClose}
            width="1.22rem"
            stroke="#635efb"
            strokeWidth={1.5}
          />
        </Header>

        <Content>
          <button type='button' onClick={showPrevious}>
            back
          </button>

          {!!gifsList[currentGifIndex] && <img src={gifsList[currentGifIndex].images.preview_gif.url} alt='' />}

          <button type='button' onClick={showNext}>
            next
          </button>
        </Content>
      </Container>
    );
};

export default GiphyModal;
