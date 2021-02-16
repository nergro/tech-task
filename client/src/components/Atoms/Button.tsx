import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.text};
  border: none;
  padding: 8px 0;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 15%);

  &:hover {
    opacity: 0.8;
  }
`;
