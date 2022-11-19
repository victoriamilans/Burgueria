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
    height: 103%;

    display: flex;

    overflow-x: auto;
  }

  ul::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ul:-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ul::-webkit-scrollbar-thumb {
    background: #d1d1d1;
    border: 18px none #ffffff;
    border-radius: 100px;
  }
  ul::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  ul::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  ul::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ffffff;
    border-radius: 100px;
  }
  ul::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  ul::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ul::-webkit-scrollbar-corner {
    background: transparent;
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
