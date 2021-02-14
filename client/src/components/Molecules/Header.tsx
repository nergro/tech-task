import React, { FC } from 'react';
import styled from '@emotion/styled';
import { P } from '../Atoms/text/P';
import { Input } from '../Atoms/Input';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  grid-area: header;
  background-color: ${props => props.theme.colors.header.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 45px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text.primary};
`;

export const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <P fontSize={20} fontWeight="bold">
          home24
        </P>
      </StyledLink>
      <Input placeholder="Search" />
    </StyledHeader>
  );
};