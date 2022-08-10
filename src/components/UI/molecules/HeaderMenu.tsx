import styled from 'styled-components';
import useSWR from 'swr';
import mockFetcher from '../../../fetcher/mockFetcher';
import { SubCategory } from '../../types/types';
import { HeaderMenuItem } from './HeaderMenuItem';

interface Header {
  id: number;
  name: string;
  subCategories: SubCategory[];
}

const HeaderMenu = () => {
  const { data } = useSWR('/categories.json', mockFetcher);

  return (
    <Container>
      {data?.header.map((v: Header, i: Number) => {
        console.log(v);
        return (
          <HeaderMenuItem
            key={v.id}
            marginLeft={i !== 0}
            hoverEffect={!v.subCategories.length}
            subCategories={v.subCategories}
            title={v.name}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default HeaderMenu;
