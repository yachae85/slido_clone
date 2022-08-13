import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../atoms/Icon';
import ModalVideo from './ModalVideo';

export default function WhatIsSlido() {
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);

  const onWISEnter = () => {
    setHover(true);
  };

  const onWISLeaver = () => {
    setHover(false);
  };

  const onWISClick = () => {
    setModal(true);
  };

  const onModalClose = () => {
    setModal(false);
  };

  return (
    <>
      <Container>
        <WISWrapper
          onMouseEnter={onWISEnter}
          onMouseLeave={onWISLeaver}
          onClick={onWISClick}
        >
          <WISIMG src='/picture/what_is_slido.jpg' />
          <PlayButton hover={hover}>
            <PlayIcon src='/icons/ic_play_arrow.svg' />
          </PlayButton>
        </WISWrapper>
      </Container>
      <ModalVideo display={modal} onClose={onModalClose} />
    </>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
  padding-bottom: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const WISWrapper = styled.div`
  position: relative;
  width: inherit;
  height: inherit;

  border-radius: 1rem;
`;

const WISIMG = styled.img`
  width: inherit;
  height: inherit;
  border-radius: 1rem;

  cursor: pointer;
`;

interface PlayButtonProps {
  hover: boolean;
}

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    ${(props: PlayButtonProps) => (props.hover ? 'scale(1.1)' : 'scale(1)')};
  width: 5rem;
  height: 5rem;

  border: none;
  border-radius: 100%;
  background-color: rgba(57, 172, 55, 0.6);
  transition: transform 0.3s;
`;

const PlayIcon = styled.img`
  width: 40%;
  height: 40%;
`;
