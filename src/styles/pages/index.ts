import styled, { css } from 'styled-components';

const sectionTitle = css`
  font-family: ${props => props.theme.fonts.inter};
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 4.4rem;
  color: ${props => props.theme.text};

  > span {
    text-shadow: 0 0 4px rgba(122, 32, 154, 0.6);
    color: ${props => props.theme.primary};
  }

  @media (max-width: 923px) {
    text-align: left;
  }
`;

const sectionText = css`
  font-size: 1.8rem;
  line-height: 2.6rem;
  max-width: 502px;
  color: ${props => props.theme.text_2};

  @media (max-width: 923px) {
    text-align: left;
  }

  @media (max-width: 512px) {
    max-width: 300px;
  }
`;

export const Container = styled.main`
  width: 100%;
  min-height: 100%;
`;

export const Banner = styled.section`
  position: relative;

  width: 100%;
  height: 90vh;
  padding-top: 80px;
  overflow-x: hidden;

  > div {
    display: flex;

    > div {
      display: flex;
      flex-direction: column;

      color: ${props => props.theme.white_text};
      padding: 76px 0;

      > h1 {
        font-size: 6.4rem;
        line-height: 7.7rem;
        color: ${props => props.theme.strong_white};
        font-family: ${props => props.theme.fonts.inter};
        text-shadow: 0 0 16px rgb(122, 32, 154);
      }

      > strong {
        color: ${props => props.theme.white_text_alt};
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.4rem;

        margin: 50px 0 75px;
      }

      > nav {
        display: flex;

        > a {
          display: flex;
          align-items: center;
          color: ${props => props.theme.white_text};
          transition: ease 0.3s;

          > img {
            width: 32px;
            height: 32px;
            border-radius: 8px;
          }

          > span {
            margin: 0 12px;
          }

          & + a {
            margin-left: 24px;
          }

          &:hover {
            transform: translateY(-10px);
          }
        }
      }
    }
  }

  > video {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    filter: brightness(74%);
    z-index: -1;
  }

  @media (max-width: 332px) {
    height: 95vh;
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
      text-shadow: 0 0 4px rgba(122, 32, 154, 0.6);
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
    display: flex;
    justify-content: space-between;

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

  @media (max-width: 1181px) {
    > div {
      > img {
        width: 360px;
        height: 360px;
      }
    }
  }

  @media (max-width: 923px) {
    > div {
      flex-direction: column;

      > div {
        margin-top: 64px;

        margin-right: 0;
      }
    }
  }

  @media (max-width: 370px) {
    > div {
      flex-direction: column;

      > img {
        width: 80%;
        height: auto;
      }
    }
  }
`;

export const TopDoubleTextSection = styled.article`
  width: 100%;

  > header {
    width: 100%;

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

  @media (max-width: 923px) {
    > header {
      > div {
        margin-bottom: 32px;

        > p {
          margin-top: 64px;
        }
      }
    }
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
  width: 64vw;
  min-height: 168px;
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
    margin-top: 12px;
    font-size: 1.6rem;
    line-height: 147.02%;
  }

  & + div {
    margin-left: 72px;
  }

  @media (max-width: 490px) {
    width: 80vw;
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
      max-width: 502px;

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

  @media (max-width: 923px) {
    > div {
      > div {
        align-items: center;

        &:last-child {
          margin-top: 64px;
        }
      }
    }
  }
`;

export const SingleTextColumnCardsRight = styled.article`
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;

    > div {
      > h1 {
        ${sectionTitle}
      }

      > p {
        margin-top: 51px;
        ${sectionText}
      }

      &:last-child {
        width: 40%;
      }
    }
  }

  & + article {
    margin-top: 96px;
  }

  @media (max-width: 923px) {
    > div {
      > div:last-child {
        margin-top: 64px;
        width: 80%;
      }
    }
  }
`;

export const WayOfenteringCard = styled.button`
  padding: 16px 12px;
  background: ${props => props.theme.dark_bg};
  border-radius: 4px;
  min-height: 137px;
  width: 90%;
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

  @media (max-width: 923px) {
    width: 100%;
  }
`;
