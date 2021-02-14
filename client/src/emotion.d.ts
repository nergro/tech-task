import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      text: {
        primary: string;
      };
      header: {
        background: string;
      };
      sidebar: {
        background: string;
        link: string;
        linkActive: string;
      };
      article: {
        border: string;
      };
      button: {
        background: string;
        text: string;
      };
      input: {
        border: string;
        background: string;
        text: string;
        borderFocus: string;
      };
    };
  }
}
