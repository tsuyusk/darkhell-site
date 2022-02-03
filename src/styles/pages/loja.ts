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
    flex-direction: column;
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

interface ProductsViewSwitcherProps {
  selectedOptionIndex: number;
}

export const ProductsViewSwitcher = styled.div<ProductsViewSwitcherProps>`
  margin-top: 36px;

  > button {
    position: relative;
    ${sectionText};
    background: none;
    border: 0;

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

      transform-origin: center;
      transform: scaleX(0);
      transition: transform 0.5s ease;
    }

    &:nth-child(${props => props.selectedOptionIndex + 1}) {
      &::after {
        transform: scaleX(1);
      }
    }

    & + button {
      margin-left: 14px;
    }
  }
`;

export const ShopList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  > div {
    flex-direction: column;
  }
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
    margin: 48px 0;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 320px;

  background: ${props => props.theme.dark_bg};
  box-shadow: 0px 0px 6px 6px rgba(122, 32, 154, 0.38);
  border: 0;
  transition: 0.5s ease;

  > img {
    width: 300px;
    height: 320px;
    background: ${props => props.theme.gray_text};
    border-radius: 6px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 32px;
    min-height: 300px;
    width: 100%;
    padding: 12px 8px;

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

export const CoursesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  > div {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 8%;
  }
`;

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border-radius: 4px;

  background: ${props => props.theme.dark_bg};
  box-shadow: 0px 0px 6px 6px rgba(122, 32, 154, 0.38);
  border: 0;
  transition: 0.5s ease;

  text-align: left;

  > img {
    width: 100%;
    height: 40%;

    object-fit: cover;
    object-position: center;
  }

  > header {
    padding: 0 12px;

    > h1 {
      ${sectionText};
      font-size: 2.2rem;
      margin-bottom: 8px;
    }
  }

  > main {
    padding: 0 12px;
    > p {
      ${sectionText};
    }
  }

  &:hover {
    box-shadow: 0px 0px 6px 6px rgba(175, 87, 207, 0.8);
  }
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 16px 0;

  > div {
    background: ${props => props.theme.primary};
    border-radius: 4px;
    padding: 2px 6px;

    > span {
      ${sectionText};
      color: ${props => props.theme.text_on_primary};
    }
  }

  > span {
    ${sectionText};
    color: ${props => props.theme.green};
  }
`;
