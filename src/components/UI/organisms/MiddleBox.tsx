import styled from 'styled-components';

export default function MiddleBox() {
  return (
    <Container>
      <MiddleBoxTitle>
        It’s how you <span>include everyone</span>
        <br />
        in your meetings
      </MiddleBoxTitle>
      <div>
        Slido gives you everything you need to engage your participants, capture
        their views and make everyone feel connected – whether you’re running a
        team call, training or an all-company meeting.
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 5rem 1rem;
  max-width: 60rem;

  text-align: center;
`;

const MiddleBoxTitle = styled.h2`
  margin-bottom: 1.5rem;

  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: 700;

  span {
    color: #39ac37;
  }
`;
