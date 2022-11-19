import styled from "styled-components";

export const StyledList = styled.div`
  width: 100%;
  height: 346px;
  margin-top: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 90%;
    height: 100%;

    display: flex;

    overflow-x: scroll;
  }

  @media (min-width: 1000px) {
    max-width: 80%;
    height: 100%;

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      height: 100%;
      
      margin-top: 30px;
    }
  }
`;
