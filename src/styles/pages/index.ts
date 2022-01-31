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
  color: ${props => props.theme.gray_text};

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
  min-height: 82vh;
  padding: 80px 0;
  overflow-y: visible;

  > div {
    display: flex;

    > div {
      display: flex;
      flex-direction: column;

      color: ${props => props.theme.white_text};
      padding: 76px 0 12px;

      > h1 {
        font-size: 6.4rem;
        line-height: 7.7rem;
        color: ${props => props.theme.strong_white};
        font-family: ${props => props.theme.fonts.inter};
        text-shadow: 0 0 16px rgb(122, 32, 154);
      }

      > p {
        color: ${props => props.theme.strong_white};
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.4rem;
        max-width: 430px;

        margin: 32px 0 38px;

        > span {
          text-shadow: 0 0 12px rgba(255, 255, 255, 1);
        }
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
    min-height: 95vh;
  }
`;

export const VideoSectionFade = styled.div`
  position: absolute;
  bottom: -24px;
  left: -24px;

  background: ${props => props.theme.background};
  filter: blur(12px);
  width: 104%;
  height: 48px;
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
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
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
        white-space: pre-wrap;
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

interface ColumnDoubleTextContentSideProps {
  shouldAlignTitleCenter?: boolean;
}

export const ColumnDoubleTextContentSide = styled.article<ColumnDoubleTextContentSideProps>`
  width: 100%;

  > div {
    > div {
      > header {
        display: flex;
        width: 100%;
      }

      > main {
        width: 100%;

        > div {
          margin-top: 51px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          > main {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            > div {
              > h1 {
                ${sectionTitle};
              }

              > p {
                width: 420px;
                white-space: pre-wrap;

                ${sectionText};
              }
            }
          }

          > div {
            > div,
            > div > div {
              display: flex;
            }

            > div > div {
              align-items: center;

              > svg {
                margin: 0 21px;
              }
            }
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

  @media (max-width: 923px) {
    > div {
      > div {
        > main {
          > div {
            flex-direction: column;
          }
        }
      }
    }
  }
`;

interface CardProps {
  isSelected: boolean;
}

export const Card = styled.button<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 0;

  background: ${props => props.theme.dark_bg};
  width: 195px;
  height: 195px;
  border-radius: 4px;

  box-shadow: 0px 0px 6px 6px rgba(122, 32, 154, 0.38);
  transition: box-shadow 1s ease;

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

  ${props =>
    props.isSelected &&
    css`
      box-shadow: 0px 0px 6px 6px rgba(175, 87, 207, 0.8);
    `};

  & + button {
    margin-left: 64px;
  }
`;

interface SectorCardProps {
  isSelected: boolean;
}

export const SectorCard = styled.button<SectorCardProps>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 42px 64px;
  border: 0;

  color: ${props => props.theme.white_text};
  background: ${props => props.theme.dark_bg};
  width: 40vw;
  min-height: 468px;
  border-radius: 4px;

  box-shadow: 0px 0px 6px 6px rgba(122, 32, 154, 0.38);

  > h1 {
    font-family: ${props => props.theme.fonts.inter};
    font-size: 2.4rem;
    margin-bottom: 12px;

    > span {
      color: ${props => props.theme.primary};
      text-shadow: 0 0 16px rgba(122, 32, 154, 0.38);
    }
  }

  > span {
    margin-top: 8px;
  }

  > p {
    ${sectionText};
    white-space: pre-wrap;
  }

  & + button {
    margin-left: 72px;
  }

  ${props =>
    props.isSelected &&
    css`
      box-shadow: 0px 0px 6px 6px rgba(175, 87, 207, 0.8);
    `};

  @media (max-width: 490px) {
    width: 74vw;
  }
`;

export const TextLiListSection = styled.article`
  display: flex;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;
      width: 100%;

      > h1 {
        ${sectionTitle}
      }

      > p {
        ${sectionText};
        margin-top: 24px;
      }

      > ul {
        display: grid;
        grid-auto-rows: auto;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 48px;
        gap: 32px;

        width: 100%;

        > li {
          ${sectionText};

          padding: 16px 12px;
          background: ${props => props.theme.dark_bg};
          border-radius: 4px;
          width: 90%;

          box-shadow: 0px 0px 6px 6px rgba(122, 32, 154, 0.38);
        }
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

  @media (max-width: 700px) {
    > div {
      > div {
        padding: 0 24px;
        > ul {
          display: flex;
          flex-direction: column;
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

  &:first-child {
    cursor: default;
  }

  &:not(:first-child):hover {
    transform: translateY(-16px);
  }

  & + button {
    margin-top: 59px;
  }

  @media (max-width: 923px) {
    width: 100%;
  }
`;
