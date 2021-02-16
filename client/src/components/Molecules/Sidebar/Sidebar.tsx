import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ChildCategory } from '../../../types/category';
import { Link } from '../../Atoms/Link';
import { useLocation } from 'react-router-dom';
import { theme } from '../../../services/theme';

const Aside = styled.aside`
  grid-area: sidebar;
  background-color: ${({ theme }) => theme.colors.sidebar.background};
  padding: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 0 0 0 8px;
  padding: 8px 0;
`;

const StyledLink = styled(Link)`
  transition: all 0.3s ease;
`;

interface Props {
  categories?: ChildCategory[];
}

export const Sidebar: FC<Props> = ({ categories }) => {
  const { pathname } = useLocation();

  return (
    <Aside>
      <h3>Kategorien</h3>
      {categories && categories.length > 0 && (
        <List>
          {categories.map(({ name, urlPath }) => (
            <ListItem key={name}>
              <StyledLink
                to={`/${urlPath}`}
                color={
                  pathname.includes(urlPath)
                    ? theme.colors.sidebar.linkActive
                    : theme.colors.sidebar.link
                }
              >
                {name}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      )}
    </Aside>
  );
};
