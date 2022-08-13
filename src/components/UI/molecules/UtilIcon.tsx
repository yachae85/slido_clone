import styled from 'styled-components';

interface UtilIconProps {
  src: string;
  name: string;
}

export const UtilIcon = (props: UtilIconProps) => {
  const { src, name } = props;

  return (
    <Container>
      <img alt={name} src={src} />
      <Name>{name}</Name>
    </Container>
  );
};

const Container = styled.li`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;

  cursor: pointer;
`;

const Name = styled.div`
  font-size: 1.125rem;
  line-height: 1.5rem;
`;
