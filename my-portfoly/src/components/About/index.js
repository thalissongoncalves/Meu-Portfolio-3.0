import { AboutContainer } from "./style";
import photo from "../../assets/my-photo.png";
import trybe from "../../assets/Trybe.png";
import certificateBlack from "../../assets/certificate-black-icon.png";
import maletaBlack from "../../assets/maleta-black-icon.png";
import trybeCertification from '../../assets/Certificado-Desenvolvimento-Full-Stack.png';

function About() {

    return (
        <AboutContainer id="about">
            <h2>Saiba mais</h2>
            <h1>Sobre mim</h1>
            <div className="cardsAboutMe">
                <div className="cardOne">
                    <img src={ photo } alt="Minha foto" />
                    <div className="cardDescription">
                        <p>
                            Olá! Sou Thálisson Gonçalves, tenho 22 anos e sou um entusiasta de tecnologia desde a minha infância, apaixonado por resolver problemas e construir soluções inovadoras. Como um Full-Stack Developer, minhas competências principais incluem JavaScript, React, Python, TypeScript, MySQL, Docker, e API REST.
                            <br />
                            <br />
                            Meu objetivo é me tornar um Desenvolvedor Sênior de sucesso. Estou sempre aberto a oportunidades desafiadoras e projetos empolgantes que me permitam aplicar meu conhecimento e contribuir para o crescimento de uma equipe ou organização.
                            <br />
                            <br />
                            Se você procura um profissional dedicado, apaixonado por tecnologia, e com uma sólida base de conhecimento em desenvolvimento, entre em contato comigo! Estou pronto para enfrentar novos desafios e fazer a diferença.
                        </p>
                    </div>
                </div>
                <div className="cardTwo">
                    <img src={ trybe } alt="Minha foto" />
                    {/* <div>
                        <img src={ certificateBlack } alt="ícone de certificado" className="certificateIcon" />
                        <h3>Estácio</h3>
                        <h4>Out. 2023 - Abr. 2026</h4>
                        <p>
                            Tecnólogo - Análise e <br /> Desenvolvimento de Sistemas
                        </p>
                    </div>
                    <hr /> */}
                    <div>
                        <img src={ certificateBlack } alt="ícone de certificado" className="certificateIcon" />
                        <h3>Trybe</h3>
                        <h4>Nov. 2022 - Jan. 2024</h4>
                        <p>Desenvolvimento Web Full-Stack</p>
                        <a href={ trybeCertification } download="Full-Stack-Certification.png">
                            <button>Visualizar Diploma</button>
                        </a>
                    </div>
                </div>
                <div className="cardThree">
                    <img src={ maletaBlack } alt="ícone de maleta" className="maletaIcon" />
                    <h3>Grupo EROS</h3>
                    <h4>Jul. 2023 - Atual</h4>
                    <p>Desenvolvedor Full-Stack Jr.</p>
                    <h5>Atividades</h5>
                    <ul>
                        <li>Criação de Páginas WEB utilizando HTML, CSS, JavaScript;</li>
                        <li>Manutenção dos sites das lojas da empresa utilizando Magento2 e WordPress;</li>
                        <li>Integrações de sistemas utilizando Python, JavaScript e API REST;</li>
                        <li>Utilização de ferramentas para análise de dados e CRM: Looker Studio e Bitrix24;</li>
                        <li>Atendimento e Suporte relacionado a serviços de TI;</li>
                        <li>Responsável pela configuração do Oracle Netsuite, criação de formulários, transações, campos, importação de itens e criação de scripts utilizando SuiteScript.</li>
                    </ul>
                </div>
            </div>
            
        </AboutContainer>
    );
}
  
export default About;