import styled, { css } from 'styled-components';

const sectionText = css`
  font-size: 1.8rem;
  line-height: 2.6rem;
  max-width: 502px;
  color: ${props => props.theme.text_2};

  > span {
    text-shadow: 0 0 4px rgba(122, 32, 154, 0.4);
    color: ${props => props.theme.primary};
  }

  @media (max-width: 923px) {
    text-align: left;
  }

  @media (max-width: 512px) {
    max-width: 300px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 80px 0;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    > h1 {
      ${sectionText};
      font-size: 3.6rem;
      text-align: center;

      > span {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;

          width: 100%;
          height: 2px;
          border-radius: 1px;

          box-shadow: 0 0 4px rgba(122, 32, 154, 0.4);
          background: ${props => props.theme.primary};
        }
      }
    }
  }
`;

export const ShopList = styled.div`
  width: 100%;
`;

export const Sector = styled.div`
  width: 100%;

  > h1 {
    ${sectionText};
    font-size: 2.8rem;
    margin-bottom: 40px;
  }
`;

export const SellItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  > hr {
    border-top: 1px solid ${props => props.theme.dark_bg};
    width: 124px;
    margin: 24px 0;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > img {
    width: 300px;
    height: 300px;
    background: ${props => props.theme.gray_text};
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 32px;
    height: 300px;
    width: 100%;

    > header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;

      width: 100%;

      > h1 {
        ${sectionText};
        font-size: 2.8rem;
        margin-bottom: 8px;
      }

      > strong {
        ${sectionText};
        font-size: 2.2rem;
        color: ${props => props.theme.green};
      }
    }

    > main {
      margin: 16px 0;
      width: 100%;

      > p {
        ${sectionText};
        max-height: 200px;
        overflow-y: auto;
        max-width: inherit;
      }
    }

    > footer {
      width: 100%;
      > button {
        ${sectionText};
        color: ${props => props.theme.white_text};
        background: ${props => props.theme.dark_bg};
        border: 1px solid ${props => props.theme.primary};
        padding: 4px 8px;
        border-radius: 4px;

        & + button {
          margin-left: 8px;
        }
      }
    }
  }
`;
