import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { render, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { ProvidersInjector } from './../ProvidersInjector';
import { SearchStoreProvider } from '../store/searchStore/provider';
import { ProductsStoreProvider } from '../store/productsStore/provider';
import { BrowserRouter as Router } from 'react-router-dom';

const storeProviders = [ProductsStoreProvider, SearchStoreProvider];

export const renderComponent = (component: ReactElement): RenderResult =>
  render(
    <Router>
      <ProvidersInjector providers={storeProviders}>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </ProvidersInjector>
    </Router>
  );
