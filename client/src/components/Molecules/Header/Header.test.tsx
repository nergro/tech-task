import React from 'react';
import { renderComponent } from '../../../services/testUtils';
import { Header } from './Header';
import { screen, fireEvent } from '@testing-library/react';

beforeEach(() => {
  renderComponent(<Header />);
});

test('displays search value in search input', () => {
  const searchValue = 'Box';

  const searchInput = screen.getByPlaceholderText('Search');

  fireEvent.change(searchInput, { target: { value: searchValue } });

  expect(searchInput).toHaveValue(searchValue);
});

test('logo navigates to homepage', () => {
  const logoLink = screen.getByRole('link', { name: 'home24' });
  expect(logoLink).toHaveAttribute('href', '/');
});
