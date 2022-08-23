import styled from 'styled-components';
import useSWR from 'swr';
import mockFetcher from '../../../fetcher/mockFetcher';
import { SubCategory } from '../../types/types';
import { FooterLink } from './FooterLink';

interface Footer {
  id: number;
  name: string;
  subCategories: SubCategory[];
}

export const FooterLinks = () => {
  const { data } = useSWR('/categories.json', mockFetcher);

  return (
    <Container>
      <Icon src='/icons/ic_logo.svg' />
      {data?.footer.map((v: Footer) => {
        return (
          <CategoryWrapper key={v.id}>
            <FooterLink isStrong={true} title={v.name} />
            {v.subCategories.map((v: SubCategory) => {
              return <FooterLink key={v.id} isStrong={false} title={v.name} />;
            })}
          </CategoryWrapper>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column-gap: 2rem;
  column-gap: 2rem;
`;

const Icon = styled.img`
  width: 72px;
  height: 24px;
`;

const CategoryWrapper = styled.ul`
  list-style: none;
  padding: 0;
  page-break-inside: avoid;
  break-inside: avoid;
`;
