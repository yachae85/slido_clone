import styled from 'styled-components';
import { SubCategory } from '../../types/types';
import { SubText } from '../atoms/Text';

interface SubCategoriesProps {
  display: boolean;
  subCategories: SubCategory[];
}

export const SubCategories = (props: SubCategoriesProps) => {
  const { display, subCategories } = props;

  return (
    <Container display={display}>
      <SubContainer>
        {subCategories.map((v) => {
          return <SubText key={v.id}>{v.name}</SubText>;
        })}
      </SubContainer>
    </Container>
  );
};

interface ContainerProps {
  display: boolean;
}

const Container = styled.div`
  display: ${(props: ContainerProps) => (props.display ? 'flex' : 'none')};
  flex-direction: row;

  position: absolute;
  left: 0;
  top: 2.5rem;
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 15%);
  border-radius: 0.25rem;
  background-color: #fff;
  z-index: 91;
  padding: 1.5rem 0;
  padding-right: 20rem;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
