import React, { FC } from 'react';
import styled from '@emotion/styled';
import { P } from '../Atoms/text/P';

const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: lightblue;
  text-align: center;
`;

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <P>Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.</P>
    </StyledFooter>
  );
};
