import React from 'react';
import { Article } from './Article';
import { renderComponent } from '../../../services/testUtils';
import { mockedArticles } from '../Articles/Articles.test';

test('renders the Article', () => {
  const { getByText, getByAltText, getByRole } = renderComponent(
    <Article article={mockedArticles[0]} />
  );

  expect(getByAltText('Boxspringbett Kinx')).toBeInTheDocument();
  expect(getByText('Boxspringbett Kinx')).toBeInTheDocument();
  expect(getByText('1.599,99 €')).toBeInTheDocument();
  expect(getByRole('button', { name: 'Add to cart' })).toBeInTheDocument();
});
