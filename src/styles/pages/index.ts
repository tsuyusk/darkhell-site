import styled, { css } from 'styled-components';

const sectionTitle = css`
  font-family: ${props => props.theme.fonts.inter};
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 4.4rem;
  color: ${props => props.theme.text};

  > span {
    color: ${props => props.theme.primary};
  }
`;

const sectionText = css`
  font-size: 1.8rem;
  line-height: 2.6rem;
  width: 502px;
  color: ${props => props.theme.text_2};
`;

export const Container = styled.main``;

export const Banner = styled.section`
  position: relative;

  width: 100%;
  height: 457px;

  > div {
    > div {
      color: ${props => props.theme.white_text};
      padding: 76px 0;

      > h1 {
        font-size: 6.4rem;
        line-height: 7.7rem;
        font-family: ${props => props.theme.fonts.inter};
        margin-bottom: 24px;
        text-shadow: 0 0 16px rgb(122, 32, 154);
      }

      > strong {
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.8rem;
      }

      > nav {
        margin-top: 36px;

        > a {
          display: flex;
          align-items: center;
          color: ${props => props.theme.white_text};
          transition: ease 0.3s;

          > span {
            margin: 0 12px;
          }

          &:hover {
            transform: translateX(12px);
          }

          & + a {
            margin-top: 18px;
          }
        }
      }
    }
  }

  > img {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;

    z-index: -1;
  }
`;

export const WhoWeAre = styled.section`
  width: 100%;

  > h1 {
    position: relative;
    width: fit-content;
    color: ${props => props.theme.text};

    margin: 72px auto;
    text-align: center;

    font-family: ${props => props.theme.fonts.inter};
    font-weight: bold;
    font-size: 3.6rem;
    line-height: 4.4rem;

    > span {
      color: ${props => props.theme.primary};
    }

    &::after {
      content: '';
      position: absolute;

      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: ${props => props.theme.text};
    }
  }
`;

interface ImageTextSectionProps {
  reverseRow?: boolean;
}

export const ImageTextSection = styled.article<ImageTextSectionProps>`
  width: 100%;

  > div {
    ${props =>
      props.reverseRow &&
      css`
        display: flex;
        flex-direction: row-reverse;
      `}

    > img {
      height: 464px;
      width: 464px;
      border-radius: 4px;
      box-shadow: 0 0 16px rgb(122, 32, 154);
    }

    > div {
      margin-left: 154px;

      ${props =>
        props.reverseRow &&
        css`
          margin-left: 0;
          margin-right: 154px;
        `}
      > h1 {
        ${sectionTitle};
      }

      > p {
        ${sectionText};
        margin-top: 51px;
      }
    }
  }

  & + article {
    margin-top: 96px;
  }
`;

export const TopDoubleTextSection = styled.article`
  width: 100%;

  > header {
    > div {
      display: flex;
      justify-content: space-between;

      > h1 {
        ${sectionTitle};
      }

      > p {
        ${sectionText};
      }
    }
  }

  > main {
    width: 100%;

    > div {
      > div {
        > div {
          display: flex;
          align-items: center;
          margin-top: 32px;

          > svg {
            margin: 0 21px;
          }
        }
      }
    }
  }

  & + article {
    margin-top: 96px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background: ${props => props.theme.dark_bg};
  width: 195px;
  height: 322px;
  border-radius: 4px;

  box-shadow: 0px 0px 6px 6px rgba(122, 32, 154, 0.38);

  > strong {
    font-size: 2.4rem;

    font-family: ${props => props.theme.fonts.inter};
    font-weight: 700;
    color: ${props => props.theme.white_text};
  }

  > span {
    font-size: 1.8rem;

    font-weight: 500;
    color: ${props => props.theme.white_text_alt};
    margin-top: 14px;
  }
`;

export const SectorCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 42px 64px;

  color: ${props => props.theme.white_text};
  background: ${props => props.theme.dark_bg};
  width: 864px;
  height: 322px;
  border-radius: 4px;

  box-shadow: 0px 0px 6px 6px rgba(122, 32, 154, 0.38);

  > h1 {
    font-family: ${props => props.theme.fonts.inter};
    font-size: 2.4rem;

    > span {
      color: ${props => props.theme.primary};
      text-shadow: 0 0 16px rgba(122, 32, 154, 0.38);
    }
  }

  > span {
    margin-top: 8px;
  }

  > p {
    color: ${props => props.theme.white_text_alt};
    margin-top: 38px;
    font-size: 1.6rem;
    line-height: 147.02%;
  }

  & + div {
    margin-left: 72px;
  }
`;

export const DoubleTextColumnsSection = styled.article`
  display: flex;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;
      width: 502px;

      > h1 {
        ${sectionTitle}
      }

      > p {
        margin-top: 51px;
        ${sectionText}
      }
    }
  }

  & + article {
    margin-top: 96px;
  }
`;

export const SingleTextColumnCardsRight = styled.article`
  > div {
    > div {
      > h1 {
        ${sectionTitle}
      }

      > p {
        margin-top: 51px;
        ${sectionText}
      }

      &:nth-child(2) {
        margin-left: 42px;
      }
    }
  }

  & + article {
    margin-top: 96px;
  }
`;

export const WayOfenteringCard = styled.button`
  padding: 16px 12px;
  background: ${props => props.theme.dark_bg};
  border-radius: 4px;
  height: 137px;
  width: 100%;
  text-align: left;

  border: 0;
  box-shadow: 0px 0px 6px 6px rgba(122, 32, 154, 0.38);
  transition: 0.3s ease;

  > h1 {
    color: ${props => props.theme.white_text};
    font-family: ${props => props.theme.fonts.inter};
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.5rem;
  }

  > p {
    color: ${props => props.theme.white_text_alt};
    font-size: 1.6rem;
    line-height: 2.6rem;
    margin-top: 18px;
  }

  &:hover {
    transform: translateY(-16px);
  }

  & + button {
    margin-top: 59px;
  }
`;
