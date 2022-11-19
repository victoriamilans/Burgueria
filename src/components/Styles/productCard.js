import styled from "styled-components";

export const StyledCard = styled.li`
  min-width: 270px;
  height: 346px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 5px;
  border: 2px solid var(--grey3);

  margin-right: 20px;

  img {
    width: 177px;
    align-self: center;
    transition: all 0.6s ease 0s;
  }

  img:hover{
    transform: scale(1.2);
  }

  div {
    display: flex;
    flex-direction: column;

    height: 150px;

    margin-left: 20px;
    gap: 15px;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey2);
  }

  span {
    font-weight: 600;
    font-size: 14px;
    color: var(--primary);
  }

  button {
    width: 106px;
    height: 40px;

    background-color: var(--primary);
    color: var(--white);

    border-radius: 8px;
  }

  button:hover {
    background-color: var(--primary2);
  }

  @media (min-width: 1000px) {
    min-width: 30%;
    max-width: 350px;
    
    margin-top: 10px;
  }
`;
