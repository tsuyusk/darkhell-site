import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    padding: 0 24px;
  }

  @media (max-width: 923px) {
    flex-direction: column;
    align-items: center;
  }
`;
