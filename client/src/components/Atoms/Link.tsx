import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { typography, TypographyProps, color, ColorProps } from 'styled-system';

type Props = TypographyProps & ColorProps;

export const Link = styled(RouterLink)<Props>`
  text-decoration: none;
  color: ${props => props.theme.colors.text.primary};
  ${typography};
  ${color};
`;
