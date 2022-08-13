import styled from 'styled-components';

export const HeaderVideo = () => {
  return (
    <Container>
      <video
        src='/videos/videos_welcome.mp4'
        autoPlay
        loop
        playsInline
        width='100%'
        height='100%'
        muted
      ></video>
    </Container>
  );
};

const Container = styled.div`
  margin: 3rem 0 2rem;
  max-width: 50rem;
  border-radius: 0.625rem;
`;
