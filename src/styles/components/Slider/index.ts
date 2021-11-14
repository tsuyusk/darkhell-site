import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  padding: 0 48px;
`;

export const SliderButtons = styled.div`
  position: absolute;

  left: 0;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 36px;

  > button {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background: ${props => props.theme.background};
  }
`;

export const Items = styled.div`
  display: flex;
  max-width: 100vw;
  overflow: scroll;
  padding: 16px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;
