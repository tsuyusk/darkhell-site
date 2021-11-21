import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 156px;
  background: ${props => props.theme.dark_bg};
  height: 60vh;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      width: 80px;
      height: 80px;
      object-fit: center;
      object-position: center;
      border-radius: 50%;
      pointer-events: none;
      margin-bottom: 32px;
    }

    > nav {
      > a {
        color: ${props => props.theme.white_text_alt};
        position: relative;

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
      }

      > * + * {
        margin-left: 46px;
      }
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      > nav {
        margin: 56px 0 36px;

        > a {
          > img {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            transition: 0.3s ease;
          }

          &:hover {
            > img {
              transform: translateY(-16px);
            }
          }

          & + a {
            margin-left: 19px;
          }
        }
      }

      > p {
        color: ${props => props.theme.white_text_alt};
      }
    }
  }

  @media (max-width: 500px) {
    > div {
      > nav {
        display: flex;
        flex-direction: column;
        align-items: center;

        > img {
          display: none;
        }

        > a {
          & + a {
            margin-top: 12px;
            margin-left: 0;
          }
        }
        > * + * {
          margin-top: 12px;
          margin-left: 0;
        }
      }
    }
  }
`;
