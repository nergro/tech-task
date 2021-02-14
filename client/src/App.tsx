import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './services/client';
import { Products } from './components/Products';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

export const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Products />
      </ThemeProvider>
    </ApolloProvider>
  );
};
