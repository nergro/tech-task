import React, { FC } from 'react';
import styled from '@emotion/styled';
import { P } from '../Atoms/text/P';
import { Input } from '../Atoms/Input';
import { Link } from 'react-router-dom';
import {useDispatch,useState} from '../../store/searchStore/hooks'

const StyledHeader = styled.header`
  grid-area: header;
  background-color: ${props => props.theme.colors.header.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text.primary};
`;

export const Header: FC = () => {
  const dispatch = useDispatch();
  const state = useState();

  return (
    <StyledHeader>
      <StyledLink to="/">
        <P fontSize={20} fontWeight="bold">
          home24
        </P>
      </StyledLink>
      <Input
        placeholder="Search"
        value={state}
        onChange={e => dispatch({type: 'Search/Update', payload: e.target.value})}
      />
    </StyledHeader>
  );
};
