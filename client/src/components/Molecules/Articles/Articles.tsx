import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Article as ArticleType } from '../../../types/article';
import { Article } from '../Article/Article';
import { P } from '../../Atoms/text/P';

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
      {articles.length > 0 ? (
        articles.map((x, i) => <Article key={x.name + i} article={x} />)
      ) : (
        <P fontSize="20px">Liste leer</P>
      )}
    </Container>
  );
};
