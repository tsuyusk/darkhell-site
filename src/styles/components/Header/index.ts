import styled, { css } from 'styled-components';

interface ContainerProps {
  isMenuOpen: boolean;
}

export const Container = styled.header<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;

  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: ${props => props.theme.dark_bg};

  > div {
    align-items: center;
    justify-content: space-between;

    > nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

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
  }

  @media (max-width: 923px) {
    > div {
      flex-direction: row;
    }
  }

  @media (max-width: 582px) {
    > div {
      > nav {
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        width: 60%;
        background: ${props => props.theme.dark_bg};
        z-index: 99;
        padding: 44px 24px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        > img {
          display: none;
        }

        > div {
          display: flex;
          flex-direction: column;

          > button,
          > a {
            text-align: left;
            margin-top: 16px;
            margin-left: 0;

            & + a,
            & + button {
              margin-left: 0;
            }
          }
        }

        ${props =>
          !props.isMenuOpen &&
          css`
            display: none;
          `}
      }
    }
  }
`;

export const HamburgerWrapper = styled.button`
  display: none;

  border: 0;
  background: transparent;
  margin-left: auto;
  z-index: 100;

  @media (max-width: 582px) {
    display: block;
  }
`;

interface PageShaderProps {
  isMenuOpen: boolean;
}

export const PageShader = styled.div<PageShaderProps>`
  display: none;

  ${props =>
    props.isMenuOpen &&
    css`
      display: block;
    `};

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 98;
  background: rgba(0, 0, 0, 0.5);
`;
