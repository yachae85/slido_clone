import styled from 'styled-components';
import useSWR from 'swr';
import mockFetcher from '../../../fetcher/mockFetcher';
import { MenuItem } from '../atoms/Text';

interface SubCategories {
  id: number;
  name: string;
  description: string;
  icon: string;
}

interface Header {
  id: number;
  name: string;
  subCategories: SubCategories[];
}

const HeaderMenu = () => {
  const { data } = useSWR('/categories.json', mockFetcher);

  return (
    <Container>
      {data?.header.map((v: Header, i: Number) => {
        return (
          <MenuItem
            key={v.id}
            marginLeft={i !== 0}
            hoverEffect={!v.subCategories.length}
          >
            {v.name}
          </MenuItem>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default HeaderMenu;
