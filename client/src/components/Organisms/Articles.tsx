import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Article as ArticleType } from '../../types/article';
import { Article } from '../Molecules/Article';

const Container = styled.div`
  display: grid;
  grid-gap: 26px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

interface Props {
  articles: ArticleType[];
}

export const Articles: FC<Props> = ({ articles }) => {
  return (
    <Container>
      {articles.map((x, i) => (
        <Article key={x.name + i} article={x} />
      ))}
    </Container>
  );
};
