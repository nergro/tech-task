import React from 'react';
import { renderComponent } from '../../../services/testUtils';
import { ChildCategory } from '../../../types/category';
import { Sidebar } from './Sidebar';
import { screen } from '@testing-library/react';

const mockedCategories: ChildCategory[] = [
  {
    name: 'Wohnzimmer',
    urlPath: 'kategorie/wohnzimmermoebel/',
    articleCount: 1000,
    categoryArticles: { articles: [] },
  },
  {
    name: 'Schlafzimmer',
    urlPath: 'kategorie/schlafzimmermoebel/',
    articleCount: 2000,
    categoryArticles: { articles: [] },
  },
  {
    name: 'Esszimmer',
    urlPath: 'kategorie/esszimmermoebel/',
    articleCount: 3000,
    categoryArticles: { articles: [] },
  },
];

beforeEach(() => {
  renderComponent(<Sidebar categories={mockedCategories} />);
});

test('renders all categories in a list of links', () => {
  const listElement = screen.getByRole('list');
  const listElements = screen.getAllByRole('listitem');
  const links = screen.getAllByRole('link');

  expect(listElement).toBeInTheDocument();
  expect(listElements.length).toEqual(3);
  expect(links.length).toEqual(3);
});

test('links has correct href attribute', () => {
  const categoryToTest = mockedCategories[1];

  const link = screen.getByRole('link', { name: categoryToTest.name });
  expect(link).toHaveAttribute('href', '/' + categoryToTest.urlPath);
});
