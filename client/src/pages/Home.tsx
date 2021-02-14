import React, { FC } from 'react';
import { H1 } from '../components/Atoms/text/H';
import { Articles } from '../components/Molecules/Articles';
import { useProductsResource } from '../store/productsStore/hooks';
import { isError, isLoading } from '../store/types';
import { Spinner } from '../components/Atoms/Spinner';
import { PageLayout } from '../components/layouts/PageLayout';
import { useState as useSearchState } from '../store/searchStore/hooks';

export const Home: FC = () => {
  const productsData = useProductsResource();
  const searchState = useSearchState();

  if (isLoading(productsData)) {
    return (
      <PageLayout>
        <Spinner />
      </PageLayout>
    );
  }

  if (isError(productsData) || productsData?.length === 0 || !productsData) {
    return (
      <PageLayout>
        <H1>Sorry! Something went wrong...</H1>
      </PageLayout>
    );
  }

  const category = productsData[0];
  const articles = category.categoryArticles.articles;

  return (
    <PageLayout categories={category.childrenCategories}>
      <H1>
        {category.name}
        <small> ({category.articleCount})</small>
      </H1>
      <Articles
        articles={searchState ? articles.filter(x => x.name.includes(searchState)) : articles}
      />
    </PageLayout>
  );
};
