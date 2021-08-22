import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #181818;

  > section {
    min-width: 496px;
    padding: 8px;

    > *:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;
