import React from 'react';
import { renderComponent } from '../../../services/testUtils';
import { Footer } from './Footer';

test('renders the Footer', () => {
  const { getByText } = renderComponent(<Footer />);

  expect(getByText(/Alle Preise sind in Euro/)).toBeInTheDocument();
});
