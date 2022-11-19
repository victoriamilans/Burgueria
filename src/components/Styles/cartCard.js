import styled from "styled-components";

export const CartCard = styled.div`
  display: flex;
  justify-content: space-between;

  width: 98%;

  margin-top: 20px;

  .productContent {
    display: flex;
  }

  img {
    width: 70px;
    height: 70px;

    background-color: var(--grey3);

    border-radius: 5px;
  }

  h2 {
    margin: 5px 0px;

    font-weight: 700;
    font-size: 18px;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey2);
  }

  .product {
    width: 200px;

    margin-left: 10px;
  }

  button {
    width: 30px;

    border-radius: 20px;

    background-color: var(--primary);

    color: var(--white);
    font-weight: 900;
  }

  .cardQuantity {
    display: flex;
    justify-content: center;
    align-items: center;
    
    gap: 7px;
  }
`;
