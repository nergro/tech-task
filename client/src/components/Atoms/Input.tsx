import styled from '@emotion/styled';
import { typography, TypographyProps, space, SpaceProps } from 'styled-system';

type Props = TypographyProps & SpaceProps;

export const Input = styled.input<Props>`
  ${typography};
  ${space};
`;
