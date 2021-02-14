import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ChildCategory } from '../../types/category';
import { Link } from 'react-router-dom';

const Aside = styled.aside`
  grid-area: sidebar;
  background-color: lavender;
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

interface Props {
  categories?: ChildCategory[];
}

export const SideMenu: FC<Props> = ({ categories }) => {
  return (
    <Aside>
      <h3>Kategorien</h3>
      {categories && categories.length > 0 && (
        <List>
          {categories.map(({ name, urlPath }) => (
            <ListItem key={name}>
              <Link to={`/${urlPath}`}>{name}</Link>
            </ListItem>
          ))}
        </List>
      )}
    </Aside>
  );
};
