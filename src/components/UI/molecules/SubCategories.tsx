import { useState } from 'react';
import styled from 'styled-components';
import { SubCategory } from '../../types/types';
import { SubText } from '../atoms/Text';

interface SubCategoriesProps {
  subCategories: SubCategory[];
}

export const SubCategories = (props: SubCategoriesProps) => {
  const { subCategories } = props;
  const [hoverIndex, setHoverIndex] = useState(0);

  const onMouseEnter = (index: number) => {
    setHoverIndex(index);
  }

  return (
    <Container >
      <SubContainer>
        {subCategories.map((v, i) => {
          return <SubText key={v.id} onMouseEnter={onMouseEnter.bind(this, i)} hover={hoverIndex === i}>{v.name}</SubText>;
        })}
      </SubContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
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
