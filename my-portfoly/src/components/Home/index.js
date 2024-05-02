import { HomeContainer } from "./style";
import linkedin from '../../assets/linkedinIcon.png';
import github from '../../assets/githubIcon.png';
import dark from '../../assets/Dark-mode.png';
import light from '../../assets/White-mode.png';
import en from '../../assets/en-us.png';
import br from '../../assets/pt-br.png';

function Home() {
    return (
        <HomeContainer id="home">
            <div className="homeChangeMode">
                <button type="button">
                    <img src={light} alt="Botão Light" className="backgroundMode"/>
                </button>
                <button type="button">
                    <img src={br} alt="Botão Pt-Br" className="languageMode"/>
                </button>
            </div>
            <h3>Olá, eu sou</h3>
            <h1>Thálisson G.</h1>
            <h2>Desenvolvedor Full-Stack</h2>
            <div className="homeButtons">
                <button type="button">Download CV</button>
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