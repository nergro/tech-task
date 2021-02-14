import styled from '@emotion/styled';
import { typography, TypographyProps, space, SpaceProps } from 'styled-system';

type Props = TypographyProps & SpaceProps;

export const Input = styled.input<Props>`
  ${typography};
  ${space};
  padding: 5px 8px;
  border: 1px solid ${props => props.theme.colors.input.border};
  color: ${props => props.theme.colors.input.text};
  background: ${props => props.theme.colors.input.background};
  outline: none;
  transition: all 0.2 ease;

  &:focus {
    border-color: ${props => props.theme.colors.input.borderFocus};
  }
`;
