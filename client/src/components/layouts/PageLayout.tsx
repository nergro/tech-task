import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Header } from '../Molecules/Header/Header';
import { Sidebar } from '../Molecules/Sidebar/Sidebar';
import { Footer } from '../Molecules/Footer/Footer';
import { ChildCategory } from '../../types/category';

const Page = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 160px auto auto;
  grid-template-rows: 40px auto 40px;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
`;

const Content = styled.div`
  grid-area: content;
  grid-column: span 2;
`;

interface Props {
  categories?: ChildCategory[];
}

export const PageLayout: FC<Props> = ({ children, categories }) => {
  return (
    <Page>
      <Header />
      <Sidebar categories={categories} />
      <Content>{children}</Content>
      <Footer />
    </Page>
  );
};
