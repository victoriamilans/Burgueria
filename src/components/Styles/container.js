import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;

  @media (min-width: 1100px) {
    max-width: 1400px;
    
    margin: 0 auto;

    flex-direction: row;
    justify-content: center;
  }
`;
