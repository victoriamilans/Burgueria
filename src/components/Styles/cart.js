import styled from "styled-components";

export const Cart = styled.div`
  max-height: 458px;
  width: 100%;

  margin: 0 auto;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 90%;
    height: 65px;

    display: flex;
    align-items: center;

    background-color: var(--primary);

    border-radius: 5px 5px 0px 0px;
  }

  header > h2 {
    font-weight: 400;
    font-size: 1rem;
    color: var(--white);

    margin-left: 15px;
  }

  ul {
    width: 90%;
    height: 250px;

    margin-top: 20px;

    overflow-y: auto;
  }

  ul::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ul::-webkit-scrollbar-button {
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

  li {
    height: 100px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 15px;
  }

  @media (min-width: 1100px) {
    width: 100%;
    min-height: 100%;
  }
`;
