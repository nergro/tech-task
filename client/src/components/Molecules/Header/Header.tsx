import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Input } from '../../Atoms/Input';
import { Link } from '../../Atoms/Link';
import { useDispatch, useState } from '../../../store/searchStore/hooks';

const StyledHeader = styled.header`
  grid-area: header;
  background-color: ${({ theme }) => theme.colors.header.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const Header: FC = () => {
  const dispatch = useDispatch();
  const state = useState();

  return (
    <StyledHeader>
      <Link to="/" fontSize={20} fontWeight="bold">
        home24
      </Link>
      <Input
        placeholder="Search"
        value={state}
        onChange={e => dispatch({ type: 'Search/Update', payload: e.target.value })}
      />
    </StyledHeader>
  );
};
