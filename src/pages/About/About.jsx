import "./about.css"
import Navbar2 from "../../components/Nav/Navbar";
import { Footer } from "../../components/Footer/Footer";
import {IoPlayCircle, IoLogoWhatsapp, IoHome, IoQrCodeOutline, IoIdCardOutline, IoPhonePortraitOutline,
        IoLayersOutline, IoChatbubblesOutline, IoCropOutline, IoLaptopOutline, IoPlayOutline, IoCallOutline, IoCloseOutline, IoCalendarOutline, IoHomeOutline, IoOptionsOutline, IoChatboxEllipsesOutline, IoPersonAddOutline, IoCheckboxOutline, IoCarSport, IoFunnelOutline, IoCarSportOutline} from "react-icons/io5"
import { Plains } from "../../components/Plains/Plains";
import SmartPhone from "../../assets/images/iphone.png";
import Modal from 'react-modal';
import { useState } from "react";
import imgFamily from "../../assets/images/background2.jpg"
import Mackbook from "../../assets/images/Mockup.png"
import { FaPlay } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";

export function About() {
    const [isOpenModal, setIsOpenModa] = useState(false);

    function handleOpenModal(e) {
      e.preventDefault();
        setIsOpenModa(true)
      }
    
      function handleCloseModal(e) {
        e.preventDefault();
        setIsOpenModa(false);
      }

    Modal.setAppElement('#root');

    return (
<div className="About">
    <Navbar2 />
    <div className="MainAbout">
            <div className="bloco">
                <div className="imageAbout">
                    <div className="imgBlock">
                  <img src={imgFamily} alt="" />
                    </div>
                </div>
                <div className="textAbout">
                    <h1>Seja bem-vindo.<br /><span>O Sua Chave Auto é para você!</span></h1>
                    <h3>Somos uma start-up criada para Agências e consultores, <br />
                    com foco em conectar seus autos a novos clientes.</h3>

                    <div className="buttonsText">
                        <button ><IoLogoWhatsapp /> Falar com time comercial</button>
                        <a href="/cadastro-profissional" className="btn"><IoCheckboxOutline /> Criar minha conta agora</a>
                    </div>
                </div>
        </div>
        <div className="movie">
        <div className="textPricing">
        <h2>Um <span>novo conceito </span>de vender seus autos</h2>
        <h4>Assista e veja o que temos preparado para você.</h4>
    </div>
            <div className="moviePlay">
                <div className="box1"></div>
                <div className="play">
                    <FaPlay onClick={handleOpenModal}/>
                </div>
                <div className="box2"></div>
            </div>
        </div>
        <div className="textPricing">
        <h2>Porque escolher o <span>Sua Chave Auto</span>?</h2>
        <h4>Veja os motivos que faz nossos clientes nos escolherem e o que podemos agregar ao seu negócio.</h4>
    </div>
        <div className="WhyChoose">
            <div className="IconsWhyChoose">
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoLayersOutline />
                    </div>
                    <div className="IconsWhyText">
                    <h2>Totalmente funcional</h2>
                    <h4>Design moderno, fácil utilização com foco nas imagens e informações</h4>
                    </div>
                </div>
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoChatbubblesOutline />
                    </div>
                    <div className="IconsWhyText">
                    <h2>Chat único por anúncio</h2>
                    <h4>Seu cliente conversa com você em uma aba específica por anúncio</h4>
                    </div>
                </div>
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoCropOutline />
                    </div>
                    <div className="IconsWhyText">
                    <h2>Design responsivo</h2>
                    <h4>Você e seu cliente acessam o nosso site de qualquer dispositivo facilmente</h4>
                    </div>
                </div>
            </div>
            <div className="WhyChooseImage">
                <img src={SmartPhone} alt="" />
            </div>
            <div className="IconsWhyChoose">
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoPhonePortraitOutline />
                    </div>
                    <div className="IconsWhyText">
                        <h2>Aplicativo administrativo</h2>
                        <h4>Controle seu negócio de qualquer lugar a qualquer hora [Em breve...]</h4>
                    </div>
                </div>
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoLaptopOutline />
                    </div>
                    <div className="IconsWhyText">
                    <h2>Site para o seu negócio</h2>
                    <h4>Tenha o site do seu negócio totalmente integrado ao nosso site</h4>
                    </div>
                </div>
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoPhonePortraitOutline />
                    </div>
                    <div className="IconsWhyText">
                    <h2>Aplicativo para o seu negócio</h2>
                    <h4>Tenha o aplicativo do seu negócio totalmente integrado ao nosso site [Em breve...]</h4>
                    </div>
                </div>
            </div>
        </div>

    <div className="howItWorks">
        <h2>Como funciona o Sua Chave ?</h2>
        <h4>Nossos serviços tem como foco conectar os autos de nossos parceiros a clientes interessados.
            <br />
        Utilizando ferramentas de marketing, geolocalização e integrações, trazendo mais objetividade nas ofertas de propriedades.</h4>
        <div className="iconsWorks">
            <div className="iconWork">
                <IoIdCardOutline />
                <h3>Cadastre-se</h3>
                <h4>Realize seu cadastro para agência ou consultor de forma rápida e objetiva.</h4>
            </div>
            <div className="iconWork">
                <IoQrCodeOutline />
                <h3>Escolha seu plano</h3>
                <h4>Escolha o pacote que mais se adequa ao momento atual de seu negócio.</h4>
            </div>
            <div className="iconWork">
                <IoCarSport />
                <h3>Adicione seus autos</h3>
                <h4>Cadastre seus autos e aproveite nossas ferramentas para alcancar mais clientes.</h4>
            </div>
        </div>
    </div>

    <div className="beneficies">
        <div className="imageDashboard">
            <img src={Mackbook} alt="" />
        </div>
        <div className="textDashboardAbout">
        <h2>Gerencia sua <span>agência</span>:</h2>
                <div className="itensToHireAbout">
                    <div className="ToHireUnicAbout">
                    <IoCarSportOutline />
                        <h4>Anúncios ilimitados</h4>
                    </div>
                    <div className="ToHireUnicAbout">
                    <IoCalendarOutline />
                        <h4>Agenda de visitas</h4>
                    </div>
                    <div className="ToHireUnicAbout">
                        <IoOptionsOutline />
                        <h4>Controle de compra e vendas</h4>
                    </div>
                    <div className="ToHireUnicAbout">
                        <IoFunnelOutline />
                        <h4>Geração e captação de leads</h4>
                    </div>
                    <div className="ToHireUnicAbout">
                        <IoCarSportOutline />
                        <h4>Autos para avaliação</h4>
                    </div>
                    <div className="ToHireUnicAbout">
                    <IoChatboxEllipsesOutline />
                        <h4>Chat único por anúncio</h4>
                    </div>

                    <a href="/cadastro-profissional">Quero digitalizar minha agência</a>
                </div>
        </div>
    </div>
    <div className="textPricing">
        <h2>Escolha o <span>plano ideal</span> para o seu negócio</h2>
        <h4>Temos um plano cara cada momento do seu negócio. Acesse o link a abaixo e confira:</h4>
    </div>
    <div className="buttonsPlainsAbout">
        <a href="/planos"><IoQrCodeOutline /> Conheça nossos planos</a>
    </div>

    </div>
    <Footer />


    <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModal}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal">
   
    <iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/4lRRANhqnog" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
            </Modal>


</div>
    )
}