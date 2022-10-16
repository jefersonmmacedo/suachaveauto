import "./about.css"
import Navbar2 from "../../components/Nav/Navbar";
import { Footer } from "../../components/Footer/Footer";
import {IoPlayCircle, IoHome, IoQrCodeOutline, IoIdCardOutline, IoPhonePortraitOutline,
        IoLayersOutline, IoChatbubblesOutline, IoCropOutline, IoLaptopOutline, IoMailOpenOutline, IoCallOutline, IoCloseOutline} from "react-icons/io5"
import { Plains } from "../../components/Plains/Plains";
import SmartPhone from "../../assets/images/iphone.png";
import Modal from 'react-modal';
import { useState } from "react";

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
        <div className="topRotate">
            <div className="bloco">
                <div className="textAbout">
                    <h1>Seja bem vindo ao <span>Sua Chave</span></h1>
                    <h3>Somos um marketplace para imobiliárias e corretores, <br />
                    com foco em conectar seus imóveis a clientes interessados.</h3>

                    <div className="buttonsText">
                        <button>Fale conosco</button>
                        <button className="btn">Cadastrar</button>
                    </div>
                </div>
                <div className="imageAbout">
                    <IoPlayCircle onClick={handleOpenModal}/>
                </div>
            </div>
        </div>
        <div className="textPricing">
        <h1>Porque escolher o <span>Sua Chave</span> ?</h1>
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
                    <h2>Chat único por imóvel</h2>
                    <h4>Seu cliente conversa com você em uma aba específica por imóvel</h4>
                    </div>
                </div>
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoCropOutline />
                    </div>
                    <div className="IconsWhyText">
                    <h2>Design responsivo</h2>
                    <h4>Você e seu cliente acessa o nosso marketplace de qualquer dispositivo facilmente</h4>
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
                        <h2>Aplicativo Administrativo</h2>
                        <h4>Controle seu negócio de qualquer lugar a qualquer hora</h4>
                    </div>
                </div>
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoLaptopOutline />
                    </div>
                    <div className="IconsWhyText">
                    <h2>Site para o seu negócio</h2>
                    <h4>Tenha o site do seu negócio totalmente integrado ao nosso marketplace</h4>
                    </div>
                </div>
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoPhonePortraitOutline />
                    </div>
                    <div className="IconsWhyText">
                    <h2>Aplicatico para o seu negócio</h2>
                    <h4>Tenha o Aplicativo do seu negócio totalmente integrado ao nosso marketplace</h4>
                    </div>
                </div>
            </div>
        </div>

    <div className="howItWorks">
        <h1>Como funciona o Sua Chave?</h1>
        <h4>Somos um marketplace para imobiliárias e corretores, com foco em conectar seus imóveis a clientes interessados
            <br />
        Utilizando ferramentas de marketing, geolocalização e integrações trazemos mais objetividade nas ofertas de propriedades</h4>
        <div className="iconsWorks">
            <div className="iconWork">
                <IoIdCardOutline />
                <h3>Cadastre-se</h3>
                <h4>Realize seu cadastro para imobiliária ou corretor de forma rápida e objetiva.</h4>
            </div>
            <div className="iconWork">
                <IoQrCodeOutline />
                <h3>Escolha seu plano</h3>
                <h4>Escolha o pacote que mais se adequa ao momento atual de seu negócio</h4>
            </div>
            <div className="iconWork">
                <IoHome />
                <h3>Adicione seus imóveis</h3>
                <h4>Cadastre seus imóveis e aproveite nossas ferramentas para alcancar mais clientes</h4>
            </div>
        </div>
    </div>
    <div className="textPricing">
        <h1>Escolha o <span>plano ideal</span> para o seu negócio</h1>
        <h4>Cada plano atende a uma necessidade, de acordo com as ferramentas oferecidas. <br/>Você poderá alterar a qualquer momento.</h4>
    </div>
        <Plains />
        <div className="textPricing">
        <h1><span>Fale conosco</span></h1>
        <h4>Entre em contato conosco, estamos prontos para atendê-lo.</h4>
    </div>
        <div className="BlocksContact">
                <div className="blockContact">
                        <h3><IoMailOpenOutline /> Email</h3>
                        <h5>contato@suachave.com.br</h5>

                        <button>Enviar e-mail</button>
                </div>
                <div className="blockContact">
                        <h3><IoCallOutline  /> Telefone</h3>
                        <h5>21 97168-4632</h5>

                        <button>Ligar</button>
                </div>
                <div className="blockContact">
                    <h3><IoPhonePortraitOutline /> Whatsapp </h3>
                    <h5>21 97168-4632</h5>
                    <button>Enviar mensagem</button>
                </div>
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
   
    <iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/YODMbyiUng4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
            </Modal>


</div>
    )
}