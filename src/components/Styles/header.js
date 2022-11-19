
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  height: 80px;

  nav {
    width: 80%;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav > img {
    width: 270px;
  }

  nav > div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 365px;
    height: 60px;

    border-radius: 8px;
    border: 1px solid var(--grey3);
  }

  nav > div:hover {
    border: 2px solid var(--grey2);
  }

  nav input {
    width: 235px;
    height: 40px;

    border-radius: 8px;
    border: none;

    color: var(--grey3);
    font-size: 1rem;
  }

  nav input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  nav input::placeholder {
    color: var(--grey3);
  }

  nav button {
    width: 107px;
    height: 40px;

    border-radius: 8px;
    border: none;

    background-color: var(--primary);
    color: var(--white);
  }

  nav button:hover {
    background-color: var(--primary2);
  }

  @media (max-width: 800px) {
    height: 139px;

    nav {
      width: 100%;

      flex-direction: column;
      justify-content: space-evenly;
    }

    nav div {
      width: 90%;
      
      justify-content: space-evenly;
    }

    nav input {
      width: 60%;
    }
  }
`;
