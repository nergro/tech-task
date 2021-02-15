import React, { FC } from 'react';
import { H1 } from '../components/Atoms/text/H';
import { PageLayout } from '../components/layouts/PageLayout';

export const NotFound: FC = () => {
  return (
    <PageLayout>
      <H1>Seite nicht gefunden</H1>
    </PageLayout>
  );
};
