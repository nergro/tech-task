import React, { FC } from 'react';
import { Article as ArticleType } from '../../../types/article';
import styled from '@emotion/styled';
import { P } from '../../Atoms/text/P';
import { Button } from '../../Atoms/Button';
import { getPriceFormat } from '../../../services/getPriceFormat';

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.article.border};
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ArticleInfo = styled.div`
  flex-grow: 1;
`;

interface Props {
  article: ArticleType;
}

export const Article: FC<Props> = ({ article }) => {
  return (
    <Container>
      <ArticleInfo>
        <img src={article.images[0]?.path} alt={article.name} />
        <P textAlign="center">{article.name}</P>
        <P textAlign="center">{getPriceFormat(article.prices.regular.value)}</P>
      </ArticleInfo>
      <Button>Add to cart</Button>
    </Container>
  );
};
