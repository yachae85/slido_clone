import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../atoms/Icon';

interface ModalVideoProps {
  display: boolean;
  onClose: () => void;
}

export default function ModalVideo(props: ModalVideoProps) {
  const { display, onClose } = props;

  return createPortal(
    <Container display={display} onClick={onClose}>
      <SubContainer>
        {display && (
          <Iframe
            width='944'
            height='531'
            src='https://www.youtube.com/embed/TqZHb67kPTs'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></Iframe>
        )}
        <ModalClose src='/icons/feature/ic_close.svg' onClick={onClose} />
      </SubContainer>
    </Container>,
    document.body
  );
}

interface ContainerProps {
  display: boolean;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props: ContainerProps) => (props.display ? 'block' : 'none')};
  width: 100vw;
  height: 100vh;

  z-index: 9999999;

  background-color: rgba(0, 0, 0, 0.48);
`;

const SubContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 944px;
  height: 531px;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalClose = styled.img`
  position: absolute !important;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0.75rem;
  top: -1rem;
  right: -3rem;
  z-index: 10000000;
`;
