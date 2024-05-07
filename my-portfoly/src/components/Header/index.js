import { HeaderContainer } from "./style";
import { Link } from 'react-scroll';

function Header() {
    return (
      <HeaderContainer>
        {/* <p><Link to="home" smooth={true} duration={1000}>Seja bem-vindo!</Link></p> */}
        <nav>
          <ul>
            <li><Link to="home" smooth={true} duration={1000}>Início</Link></li>
            <li><Link to="about" smooth={true} duration={1000}>Sobre</Link></li>
            <li><Link to="about" smooth={true} duration={1000}>Habilidades</Link></li>
            <li><Link to="about" smooth={true} duration={1000}>Projetos</Link></li>
            <li><Link to="about" smooth={true} duration={1000}>Contato</Link></li>
          </ul>
        </nav>
      </HeaderContainer>
    );
}
  
export default Header;