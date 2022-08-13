import styled from 'styled-components';
import useSWR from 'swr';
import mockFetcher from '../../../fetcher/mockFetcher';
import { Card } from '../molecules/Card';

interface CardType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function Cards() {
  const { data } = useSWR('/sub-features.json', mockFetcher);

  return (
    <Container>
      <CardWrapper>
        {data?.result.map((v: CardType) => {
          return (
            <Card
              key={v.id}
              title={v.title}
              description={v.description}
              icon={v.icon}
            />
          );
        })}
      </CardWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 5rem;
  padding-bottom: 3rem;
  width: 100%;
  max-width: 80rem;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26%, 1fr));
  grid-column-gap: 2.6315789474%;
  column-gap: 2.6315789474%;
`;
