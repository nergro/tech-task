import React, { FC, useState } from 'react';
import { H1 } from '../components/Atoms/text/H';
import { Articles } from '../components/Organisms/Articles';
import { useProductsResource } from '../store/productsStore/hooks';
import { isError, isLoading } from '../store/types';
import styled from '@emotion/styled';
import { Header } from '../components/Molecules/Header';
import { SideMenu } from '../components/Molecules/SideMenu';
import { Footer } from '../components/Molecules/Footer';

const Page = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 160px auto auto;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
  margin: 6px;
`;

const Content = styled.div`
  grid-area: content;
  grid-column: span 2;
`;

export const Home: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const productsData = useProductsResource();

  if (isLoading(productsData)) {
    return <div>Loading...</div>;
  }

  if (isError(productsData) || productsData?.length === 0 || !productsData) {
    return <H1>Sorry! Something went wrong...</H1>;
  }

  const category = productsData[0];

  console.log(searchValue);

  const filteredArticles = searchValue
    ? category.categoryArticles.articles.filter(x => x.name.includes(searchValue))
    : category.categoryArticles.articles;

  return (
    <Page>
      <Header onSearchChange={value => setSearchValue(value)} searchValue={searchValue} />
      <SideMenu categories={category.childrenCategories} />
      <Content>
        <H1>
          {category.name}
          <small> ({category.articleCount})</small>
        </H1>
        <Articles articles={filteredArticles} />
      </Content>
      <Footer />
    </Page>
  );
};
