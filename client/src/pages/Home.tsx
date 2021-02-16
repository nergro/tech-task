import React, { FC } from 'react';
import { H1 } from '../components/Atoms/text/H';
import { Articles } from '../components/Molecules/Articles/Articles';
import { useProductsResource } from '../store/productsStore/hooks';
import { isError, isLoading } from '../services/storeStateStatus';
import { Spinner } from '../components/Atoms/Spinner';
import { PageLayout } from '../components/layouts/PageLayout';
import { useState as useSearchState } from '../store/searchStore/hooks';
import { useLocation } from 'react-router-dom';
import { getActiveCategoryData } from '../services/getActiveCategoryData';

export const Home: FC = () => {
  const productsData = useProductsResource();
  const searchState = useSearchState();
  const { pathname } = useLocation();

  if (isLoading(productsData) || !productsData) {
    return (
      <PageLayout>
        <Spinner />
      </PageLayout>
    );
  }

  if (isError(productsData) || productsData?.length === 0) {
    return (
      <PageLayout>
        <H1>Es tut uns leid! Etwas ist schief gelaufen...</H1>
      </PageLayout>
    );
  }

  const {
    articleCount,
    categoryArticles: { articles },
    name,
  } = getActiveCategoryData(pathname.slice(1), productsData[0]);

  return (
    <PageLayout categories={productsData[0].childrenCategories}>
      <H1>
        {name}
        <small> ({articleCount})</small>
      </H1>
      <Articles
        articles={searchState ? articles.filter(x => x.name.includes(searchState)) : articles}
      />
    </PageLayout>
  );
};
