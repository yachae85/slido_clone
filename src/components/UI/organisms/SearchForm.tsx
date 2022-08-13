import { useState } from 'react';
import styled from 'styled-components';
import { SearchFormIcon } from '../atoms/Icon';
import { SearchInput } from '../atoms/Input';
import { EventDescribe, JoinText } from '../atoms/Text';

export const SearchForm = () => {
  const [value, setValue] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <JoinText>Joining as a participant?</JoinText>
      <InputContainer>
        <SearchFormIcon className='hash' src='/icons/ic_hashtag.svg' />
        <SearchInput
          placeholder='Enter code here'
          value={value}
          onChange={onInputChange.bind(this)}
        />
        <SearchFormIcon className='next' src='/icons/ic_next.svg' />
      </InputContainer>
      <EventDescribe display={value !== ''}>
        By using Slido you accept our <a>Policy.</a>
      </EventDescribe>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: 1.5rem 0 2.125rem;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;

  background-color: #1a73e8;
  border-radius: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 0;
  position: relative;
`;
