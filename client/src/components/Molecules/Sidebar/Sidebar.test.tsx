import React from 'react';
import { renderComponent } from '../../../services/testUtils';
import { ChildCategory } from '../../../types/category';
import { Sidebar } from './Sidebar';

const mockedCategories: ChildCategory[] = [
  { name: 'Wohnzimmer', urlPath: 'kategorie/wohnzimmermoebel/' },
  { name: 'Schlafzimmer', urlPath: 'kategorie/schlafzimmermoebel/' },
  { name: 'Esszimmer', urlPath: 'kategorie/esszimmermoebel/' },
];

test('renders the Sidebar', () => {
  renderComponent(<Sidebar />);
});

test('has correct title', () => {
  const { getByText } = renderComponent(<Sidebar />);
  expect(getByText(/Kategorien/)).toBeInTheDocument();
});

test('renders all categories in a list of links', () => {
  const { getByRole, getAllByRole } = renderComponent(<Sidebar categories={mockedCategories} />);

  const listElement = getByRole('list');
  const listElements = getAllByRole('listitem');
  const links = getAllByRole('link');

  expect(listElement).toBeInTheDocument();
  expect(listElements.length).toEqual(3);
  expect(links.length).toEqual(3);
});

test('links has correct href attribute', () => {
  const { getByRole } = renderComponent(<Sidebar categories={mockedCategories} />);

  const categoryToTest = mockedCategories[1];

  const link = getByRole('link', { name: categoryToTest.name });
  expect(link).toHaveAttribute('href', '/' + categoryToTest.urlPath);
});
