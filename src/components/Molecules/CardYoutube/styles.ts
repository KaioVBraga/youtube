import styled from "styled-components";

interface ContainerProps {
  width: number;
  height: number;
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  width: ${(props) => props.width || "initial"};
  height: ${(props) => props.height || "initial"};
`;
