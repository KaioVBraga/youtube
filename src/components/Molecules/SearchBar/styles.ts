import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: max-content;
  display: flex;
`;

interface InputProps {}

export const Input = styled.input<InputProps>`
  background-color: #121212;
  border: #333333 1px solid;
  height: 50px;
  width: 100%;
  color: #fff;
  padding: 16px;
`;

interface ButtonProps {}

export const Button = styled.button<ButtonProps>`
  background-color: #333333;
  border: #333333 1px solid;
  height: 50px;
  width: min-content;
  color: #616161;
  padding: 16px;
  cursor: pointer;
  transition: var(--fast-transition);

  :hover {
    color: #888;
  }
`;
