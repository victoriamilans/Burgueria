import styled from "styled-components";

export const StyledTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;

  width: 90%;

  margin-top: 30px;
  border-top: 1px solid var(--grey3);

  div {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    margin: 20px;

    font-weight: 600;
    font-size: 18px;
    color: var(--grey1);
  }

  span {
    margin: 30px;

    font-weight: 600;
    font-size: 14px;
    color: var(--grey2);
  }

  button {
    width: 100%;
    height: 60px;

    background-color: var(--grey3);
    color: var(--grey2);

    align-self: center;
    border-radius: 8px;

    font-weight: 600;
    font-size: 16px;
  }

  @media (min-width: 1000px) {
    width: 100%;
    
    justify-self: baseline;
  }
`;
