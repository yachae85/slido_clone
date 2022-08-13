import styled from 'styled-components';
import useSWR from 'swr';
import mockFetcher from '../../../fetcher/mockFetcher';
import { Icon } from '../atoms/Icon';

interface Badge {
  id: number;
  title: string;
  badge: string;
}

export default function Badegs() {
  const { data } = useSWR('/badges.json', mockFetcher);

  return (
    <Container>
      {data?.result.map((v: Badge) => {
        return <Icon key={v.id} src={v.badge} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3.5rem 0;
  position: relative;
  width: 100%;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`;
