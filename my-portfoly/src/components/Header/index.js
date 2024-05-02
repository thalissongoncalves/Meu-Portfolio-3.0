import { HeaderContainer } from "./style";

function Header() {
    return (
      <HeaderContainer>
        <p>Thálisson Gonçalves</p>
        <nav>
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Experiência</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </HeaderContainer>
    );
}
  
export default Header;