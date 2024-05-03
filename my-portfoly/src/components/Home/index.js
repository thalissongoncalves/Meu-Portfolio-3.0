import { HomeContainer } from "./style";
import linkedin from '../../assets/linkedinIcon.png';
import github from '../../assets/githubIcon.png';
import dark from '../../assets/Dark-mode.png';
import light from '../../assets/White-mode.png';
import en from '../../assets/en-us.png';
import br from '../../assets/pt-br.png';
import curriculo from '../../assets/Thálisson-G-Curriculo.pdf';
import { useState } from "react";

function Home() {
    const [isLightMode, setIsLightMode] = useState(true);
    const [isPtBrMode, setIsPtBrMode] = useState(true);

    return (
        <HomeContainer id="home">
            <div className="homeChangeMode">
                <button type="button" id="backgroundModeButton" onClick={() => setIsLightMode(!isLightMode)}>
                    <img src={ isLightMode ? light : dark } alt="Botão Light" id="backgroundMode" className={ isLightMode ? 'lightMode' : 'blackMode' }/>
                </button>
                <button type="button" id="changeLanguageBtn" onClick={() => setIsPtBrMode(!isLightMode)}>
                    <img src={ isPtBrMode ? br : en } alt="Botão Pt-Br" id="languageMode" className={ isPtBrMode ? 'pt-br' : 'en-us' }/>
                </button>
            </div>
            <h3>Olá, eu sou</h3>
            <h1>Thálisson G.</h1>
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