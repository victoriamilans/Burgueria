import logo from "../assets/logo.png";
import { StyledHeader } from "../Styles/header";
import 'animate.css'

export function Header({ setInputValue }) {
  return (
    <StyledHeader>
      <nav>
        <img src={logo} alt="Logo" className="animate__animated animate__pulse" />
        <div>
          <input
            placeholder="Digitar Pesquisa"
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
          <button type="button">Pesquisar</button>
        </div>
      </nav>
    </StyledHeader>
  );
}
