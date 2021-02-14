import React, { FC } from 'react';
import { useGetProducts } from '../services/useGetProducts';
import { isError, isLoading } from '../types/common';
import styled from '@emotion/styled';

const Container = styled.div`
  color: ${props => props.theme.colors.text.primary};
`;

export const Products: FC = () => {
  const data = useGetProducts();

  if (isLoading(data)) {
    return <div>Loading...</div>;
  }

  if (isError(data)) {
    return <div>Error</div>;
  }

  return <Container>FETCHED</Container>;
};
