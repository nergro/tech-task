import styled from '@emotion/styled';
import { typography, TypographyProps, space, SpaceProps } from 'styled-system';

type Props = TypographyProps & SpaceProps;

export const H1 = styled.h1<Props>`
  ${typography};
  ${space};
`;

export const H3 = styled.h3<Props>`
  ${typography};
  ${space};
`;
