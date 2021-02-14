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
      article: {
        border: string;
      };
      button: {
        background: string;
        text: string;
      };
    };
  }
}
