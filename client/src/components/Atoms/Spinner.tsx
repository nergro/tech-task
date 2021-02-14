import React, { FC } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const scalingSquaresAnimation = keyframes`
 50% {
        transform: rotate(90deg);
      }

      100% {
        transform: rotate(180deg);
      }
`;

const Container = styled.div`
position: absolute;
margin-left: auto;
margin-right: auto;
top: 40%;
left: 0;
right: 0;

  height: 65px;
  width: 65px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation: ${scalingSquaresAnimation} 1250ms;
  animation-iteration-count: infinite;
  transform: rotate(0deg);
`;

const square1Animation = keyframes`
 50% {
        transform: translate(150%,150%) scale(2,2);
      }
`;

const square2Animation = keyframes`
50% {
        transform: translate(-150%,150%) scale(2,2);
      }
`;

const square3Animation = keyframes`
 50% {
        transform: translate(-150%,-150%) scale(2,2);
      }
`;

const square4Animation = keyframes`
50% {
        transform: translate(150%,-150%) scale(2,2);
      }
`;

const Square = styled.div`
  height: calc(65px * 0.25 / 1.3);
  width: calc(65px * 0.25 / 1.3);
  margin-right: auto;
  margin-left: auto;
  border: calc(65px * 0.04 / 1.3) solid ${props => props.theme.colors.button.background};
  position: absolute;
  animation-duration: 1250ms;
  animation-iteration-count: infinite;

  &:nth-child(1) {
    animation-name: ${square1Animation};
  }

  &:nth-child(2) {
    animation-name: ${square2Animation};
  }

  &:nth-child(3) {
    animation-name: ${square3Animation};
  }

  &:nth-child(4) {
    animation-name: ${square4Animation};
  }
`;

export const Spinner: FC = () => {
  return (
    <Container>
      <Square />
      <Square />
      <Square />
      <Square />
    </Container>
  );
};
