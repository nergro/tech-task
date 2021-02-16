import React from 'react';
import { Article } from './Article';
import { renderComponent } from '../../../services/testUtils';
import { mockedArticles } from '../Articles/Articles.test';
import { screen } from '@testing-library/react';

test('renders the Article', () => {
  const article = mockedArticles[0];

  const { getByText, getByAltText, getByRole } = renderComponent(<Article article={article} />);

  expect(getByAltText(article.name)).toBeInTheDocument();
  expect(getByText(article.name)).toBeInTheDocument();

  expect(screen.getByText(/1.599,99/)).toBeInTheDocument();

  expect(getByRole('button', { name: 'Add to cart' })).toBeInTheDocument();
});
