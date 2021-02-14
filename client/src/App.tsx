import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './services/client';
import { ThemeProvider } from '@emotion/react';
import { theme } from './services/theme';
import { Global } from '@emotion/react';
import { globalStyle } from './globalStyle';
import { ProvidersInjector } from './ProvidersInjector';
import { ProductsStoreProvider } from './store/productsStore/provider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

const storeProviders = [ProductsStoreProvider];

export const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ProvidersInjector providers={storeProviders}>
          <ThemeProvider theme={theme}>
            <Global styles={globalStyle} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/kategorie/:id" exact component={Home} />
              <Route component={NotFound} />
            </Switch>
          </ThemeProvider>
        </ProvidersInjector>
      </Router>
    </ApolloProvider>
  );
};
