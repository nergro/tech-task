import React from 'react';
import { Articles } from './Articles';
import { Article as ArticleType } from '../../../types/article';
import { renderComponent } from '../../../services/testUtils';

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
  const { getAllByRole } = renderComponent(<Articles articles={mockedArticles} />);

  expect(getAllByRole('button', { name: 'Add to cart' }).length).toBe(2);
});

test('shows message on empty list', () => {
  const { getByText } = renderComponent(<Articles articles={[]} />);

  expect(getByText('Liste leer')).toBeInTheDocument();
});
