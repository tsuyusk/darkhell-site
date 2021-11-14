import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    dark_bg: string;
    primary: string;
    text: string;
    text_2: string;
    text_on_primary: string;
    white_text: string;
    white_text_alt: string;

    fonts: {
      roboto: string;
      inter: string;
    };
  }
}
