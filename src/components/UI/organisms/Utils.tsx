import styled from 'styled-components';
import useSWR from 'swr';
import mockFetcher from '../../../fetcher/mockFetcher';
import { UtilLogoTitle } from '../atoms/Text';
import { UtilIcon } from '../molecules/UtilIcon';

interface UtilsData {
  id: number;
  name: string;
  icon: string;
}

export default function Utils() {
  const { data } = useSWR('/integrations.json', mockFetcher);

  return (
    <Container>
      <UtilLogoTitle>You can use Slido with</UtilLogoTitle>
      <UtilList>
        {data?.result.map((v: UtilsData) => {
          return <UtilIcon key={v.id} src={v.icon} name={v.name} />;
        })}
      </UtilList>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;

  width: 100%;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`;

const UtilList = styled.ul`
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;

  list-style: none;
`;
