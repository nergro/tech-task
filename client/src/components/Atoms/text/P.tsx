import styled from '@emotion/styled';
import { typography, TypographyProps, space, SpaceProps } from 'styled-system';

type Props = TypographyProps & SpaceProps;

export const P = styled.p<Props>`
  ${typography};
  ${space};
`;
