import { HeaderContainer } from "./style";
import dark from '../../assets/Dark-mode.png';
import light from '../../assets/White-mode.png';
import en from '../../assets/en-us.png';
import br from '../../assets/pt-br.png';
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';

function Header() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [isPtBrMode, setIsPtBrMode] = useState(true);

  useEffect(() => {
      const backgroundModeButton = document.querySelector("#backgroundModeButton");
      const backgroundMode = document.querySelector("#backgroundMode");

      const changeLanguageBtn = document.querySelector("#changeLanguageBtn");
      const languageMode = document.querySelector("#languageMode");

      const changeBackgroundMode = () => {
          if (isLightMode === false) {
              backgroundMode.className = "lightMode";
              setTimeout(() => {
                  backgroundMode.src = light;
              }, 150)
              setIsLightMode(true)
          } else if (isLightMode === true) {
              backgroundMode.className = "blackMode";
              setTimeout(() => {
                  backgroundMode.src = dark;
              }, 150)
              setIsLightMode(false)
          }
      };

      const changeLanguageMode = () => {
          if (isPtBrMode === false) {
              languageMode.className = "pt-br";
              setTimeout(() => {
                  languageMode.src = br;
              }, 150)
              setIsPtBrMode(true)
          } else if (isPtBrMode === true) {
              languageMode.className = "en-us";
              setTimeout(() => {
                  languageMode.src = en;
              }, 150)
              setIsPtBrMode(false)
          }
      };
      
      backgroundModeButton.addEventListener('click', changeBackgroundMode);
      changeLanguageBtn.addEventListener('click', changeLanguageMode);

      // Função de limpeza para remover o ouvinte de evento quando o componente for desmontado
      return () => {
          backgroundModeButton.removeEventListener('click', changeBackgroundMode);
          changeLanguageBtn.removeEventListener('click', changeLanguageMode);
      };
  }, [isLightMode, isPtBrMode]);

    return (
      <HeaderContainer>
        <p><Link to="home" smooth={true} duration={1000}>Thálisson Gonçalves</Link></p>
        <nav>
          <ul>
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