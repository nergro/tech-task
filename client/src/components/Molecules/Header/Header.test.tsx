import React from 'react';
import { renderComponent } from '../../../services/testUtils';
import { Header } from './Header';
import { fireEvent } from '@testing-library/react';

test('renders the Header', () => {
  renderComponent(<Header />);
});

test('displays search value in search input', () => {
  const { getByPlaceholderText } = renderComponent(<Header />);

  const searchValue = 'Box';

  const searchInput = getByPlaceholderText('Search');

  fireEvent.change(searchInput, { target: { value: searchValue } });

  expect(searchInput).toHaveValue(searchValue);
});

test('logo navigates to homepage', () => {
  const { getByRole } = renderComponent(<Header />);

  const logoLink = getByRole('link', { name: 'home24' });
  expect(logoLink).toHaveAttribute('href', '/');
});
