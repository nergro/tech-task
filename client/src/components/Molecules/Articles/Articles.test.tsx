import React from 'react';
import { Articles } from './Articles';
import { Article as ArticleType } from '../../../types/article';
import { renderComponent } from '../../../services/testUtils';
import { screen } from '@testing-library/react';

export const mockedArticles: ArticleType[] = [
  {
    name: 'Boxspringbett Kinx',
    prices: { currency: 'EUR', regular: { value: 159999 } },
    variantName: '',
    images: [],
  },
  {
    name: 'Schlafsofa Latina',
    prices: { currency: 'EUR', regular: { value: 46999 } },
    variantName: '',
    images: [],
  },
];

test('renders all Articles', () => {
  renderComponent(<Articles articles={mockedArticles} />);

  expect(screen.getAllByRole('button', { name: 'Add to cart' }).length).toBe(2);
});

test('shows message on empty list', () => {
  renderComponent(<Articles articles={[]} />);

  expect(screen.getByText('Liste leer')).toBeInTheDocument();
});
