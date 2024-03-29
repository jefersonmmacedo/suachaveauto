﻿import "./pricing.css";
import Navbar2 from "../../components/Nav/Navbar";
import { Plains } from "../../components/Plains/Plains";
import { Footer } from "../../components/Footer/Footer";
import {MdAlarm} from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import black from "../../assets/images/Black.png";

export function Pricing() {
    return (
        <div className="Pricing">
            <Navbar2 />
            <div className="imagePromo">
                <img src={black} alt="" />
            </div>
            <h2>Escolha o <span>plano ideal</span> para o seu negócio</h2>
            <h4>Cada plano atende a uma necessidade, de acordo com as ferramentas oferecidas. <br/>Você poderá alterar a qualquer momento.</h4>

            <Plains />
            {/* <a href="https://wa.me/5521997429585?text=Olá. Gostaria de saber mais detalhes sobre os planos e serviços que a Sua Chave Auto pode me oferecer" target="_Blank">
                <img className="image" src={integracoes} alt="Propaganda de integrações" />
            </a> */}

            <div className="content">
                <h4><span>Todos</span> os <span>planos</span> também incluem:</h4>
                <div className="itensContent">
                <h5><IoCheckmarkCircleOutline /> Todos os anúncios no portal Sua Chave Auto</h5>
                <h5><IoCheckmarkCircleOutline /> Chat único por anúncio</h5>
                <h5><IoCheckmarkCircleOutline /> Agendamento de visitas</h5>
                <h5><IoCheckmarkCircleOutline /> Cadastro de clientes, proprietários e fiadores</h5>
                <h5><IoCheckmarkCircleOutline /> Contato via ligação e whatsapp</h5>
                <h5><IoCheckmarkCircleOutline /> Área administrativa - CRM</h5>
                <h5><IoCheckmarkCircleOutline /> Gestão financeira<span>*</span></h5>
                <h5><IoCheckmarkCircleOutline /> Acesso a busca de autos dos clientes<span>*</span></h5>
                <h5><IoCheckmarkCircleOutline /> Solicitação para avaliação de autos<span>*</span></h5>
                <h5><IoCheckmarkCircleOutline /> Captação de leads</h5>
                <h5><IoCheckmarkCircleOutline /> Página/perfil com seus dados e anúncios</h5>
                <h5><IoCheckmarkCircleOutline /> Taxa de adesão gratuita</h5>
                </div>
                <div className="infosContent">
                    <h5>* Apartir do plano Start</h5>
                </div>
            </div>
            {/* <div className="future">
                <h4>Serviços disponíveis <span>em breve</span>:</h4>
            <div className="itensContent">
                <h5><MdAlarm /> Integração com portais</h5>
                <h5><MdAlarm /> Assinatura digital de contratos</h5>
                <h5><MdAlarm /> Tour virtual para os anúncios (360º)</h5>
                <h5><MdAlarm /> Módulo de vistoria de anúncios</h5>
                <h5><MdAlarm /> Sistema de controle aluguel (Pagamentos e suporte)</h5>
                <h5><MdAlarm /> Google analytcs</h5>
                <h5><MdAlarm /> Processo de compra e aluguel de imóvel online</h5>
                <h5><MdAlarm /> Aplicativo para gerenciamento de sua imobiliária</h5>
                <h5><MdAlarm /> Marketing digital especializado</h5>
                <h5><MdAlarm /> Contas de email personalizadas</h5>
                <h5><MdAlarm /> Disparo de e-mail automático personalizável</h5> 
            </div>
            </div> */}

            <Footer />
        </div>
    )
}










