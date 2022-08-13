import styled from 'styled-components';
import useSWR from 'swr';
import mockFetcher from '../../../fetcher/mockFetcher';
import { Icon } from '../atoms/Icon';

interface Customer {
  id: number;
  company: string;
  companyLogo: string;
}

export default function Customers() {
  const { data } = useSWR('/customers.json', mockFetcher);

  return (
    <Container>
      <ListWrapper>
        {data?.customerList.map((v: Customer) => {
          console.log(v);
          return <Icon src={v.companyLogo} />;
        })}
      </ListWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 3.5rem 2rem;
  width: 100%;

  background-color: #f5f5f5;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  max-width: 80rem;
`;
