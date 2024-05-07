import { HomeContainer } from "./style";
import linkedin from '../../assets/linkedinIcon.png';
import github from '../../assets/githubIcon.png';
import curriculo from '../../assets/Thálisson-G-Curriculo.pdf';
import { useEffect, useState } from "react";
import dark from '../../assets/Dark-mode.png';
import light from '../../assets/White-mode.png';
import en from '../../assets/en-us.png';
import br from '../../assets/pt-br.png';

function Home() {
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
                setIsLightMode(false)
            } else if (isLightMode === true) {
                backgroundMode.className = "blackMode";
                setTimeout(() => {
                    backgroundMode.src = dark;
                }, 150)
                setIsLightMode(true)
            }
        };
  
        const changeLanguageMode = () => {
            if (isPtBrMode === false) {
                languageMode.className = "pt-br";
                setTimeout(() => {
                    languageMode.src = br;
                }, 150)
                setIsPtBrMode(false)
            } else if (isPtBrMode === true) {
                languageMode.className = "en-us";
                setTimeout(() => {
                    languageMode.src = en;
                }, 150)
                setIsPtBrMode(true)
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
        <HomeContainer id="home">
            <div className="homeChangeMode">
                <button type="button" id="backgroundModeButton" onClick={() => setIsLightMode(!isLightMode)}>
                    <img src={ isLightMode ? light : dark } alt="Botão Light" id="backgroundMode" className={ isLightMode ? 'lightMode' : 'blackMode' }/>
                </button>
                <button type="button" id="changeLanguageBtn" onClick={() => setIsPtBrMode(!isPtBrMode)}>
                    <img src={ isPtBrMode ? br : en } alt="Botão Pt-Br" id="languageMode" className={ isPtBrMode ? 'pt-br' : 'en-us' }/>
                </button>
            </div>
            <h3>Olá 👋, eu sou</h3>
            <h1>Thálisson Gonçalves</h1>
            <h2>Desenvolvedor Full-Stack</h2>

            <div className="homeButtons">
                <a href={curriculo} download="Thálisson-G-Curriculo.pdf">
                    <button type="button">Download CV</button>
                </a>
                <button type="button">Contato</button>
            </div>

            <div className="homeIcons">
                <a href="https://www.linkedin.com/in/thalissongoncalves" target="__blank">
                    <img src={linkedin} alt="Linkedin Icon" />
                </a>
                <a href="https://github.com/thalissongoncalves" target="__blank">
                    <img src={github} alt="GitHub Icon" />
                </a>
            </div>

        </HomeContainer>
    );
}
  
export default Home;