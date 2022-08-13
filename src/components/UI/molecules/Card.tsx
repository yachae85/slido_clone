import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

export const Card = (props: CardProps) => {
  const { title, description, icon } = props;

  return (
    <Container>
      <CardImg alt={title} src={icon} />
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 2.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  margin-top: 1rem;

  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
`;

const CardText = styled.p`
  margin-top: 1rem;

  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const CardImg = styled.img`
  width: 48px;
  height: 49px;
`;
