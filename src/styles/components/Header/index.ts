import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: ${props => props.theme.dark_bg};

  > div {
    align-items: center;
    justify-content: space-between;

    > img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      pointer-events: none;
      box-shadow: 0 0 16px rgb(122, 32, 154);
    }

    > div {
      > a {
        position: relative;

        color: ${props => props.theme.white_text};
        transition: ease 0.3s;

        &::after {
          content: '';

          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: ${props => props.theme.white_text_alt};
          transform: scaleX(0);
          transform-origin: center;
          transition: ease 0.3s;
        }

        &:hover {
          color: ${props => props.theme.white_text_alt};

          &::after {
            transform: scaleX(1);
          }
        }

        & + button,
        & + a {
          margin-left: 32px;
        }
      }

      > button {
        position: relative;

        color: ${props => props.theme.white_text};
        transition: ease 0.3s;
        border: 0;
        background: none;

        &::after {
          content: '';

          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: ${props => props.theme.white_text_alt};
          transform: scaleX(0);
          transform-origin: center;
          transition: ease 0.3s;
        }

        &:hover {
          color: ${props => props.theme.white_text_alt};

          &::after {
            transform: scaleX(1);
          }
        }

        & + button,
        & + a {
          margin-left: 32px;
        }
      }
    }
  }
`;
