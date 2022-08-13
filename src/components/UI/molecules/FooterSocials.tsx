import { useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import mockFetcher from '../../../fetcher/mockFetcher';
import { Icon } from '../atoms/Icon';

interface Social {
  id: number;
  icon: string;
}

interface SelectedType {
  id: number;
  value: string;
  title: string;
}

export const FooterSocials = () => {
  const { data } = useSWR('/socials.json', mockFetcher);
  const [selected, setSelected] = useState(0);
  const selectOption = [
    { id: 0, value: 'en', title: 'English (International)' },
    { id: 1, value: 'de', title: 'Deutsch' },
    { id: 2, value: 'ja', title: '日本語' },
  ];

  return (
    <Container>
      <SocialIconWrapper>
        {data?.result.map((v: Social) => (
          <Icon
            key={v.id}
            src={v.icon}
            marginLeft={v.id === 1 ? '0px' : '2.5rem'}
          />
        ))}
      </SocialIconWrapper>
      <SocialForm>
        <SocialFormLabel>Choose a language</SocialFormLabel>:{' '}
        <SocialSelect name='language'>
          {selectOption.map((v: SelectedType) => {
            return (
              <option
                key={v.id}
                selected={selected === v.id}
                value={v.value}
                onClick={setSelected.bind(this, v.id)}
              >
                {v.title}
              </option>
            );
          })}
        </SocialSelect>
      </SocialForm>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 7rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #f5f5f5;
`;

const SocialIconWrapper = styled.div``;

const SocialForm = styled.form`
  position: relative;
  padding-bottom: 0;

  font-size: 0.875rem;
  font-weight: 700;

  border: none;
`;

const SocialFormLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
`;

const SocialSelect = styled.select`
  padding-right: 1rem;
  width: 11rem;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;

  border: none;
`;
