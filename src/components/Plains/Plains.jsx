import "./plains.css"
import {IoCheckbox} from "react-icons/io5";

export function Plains() {
    const professional = false;
    return (
        <div className="Plains">
            <div className="plain">
                <h3>Plano Básico</h3>
                <div className="title">
                <h1>R$ 149,99</h1>
                <h4>/ mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckbox /> Anúncios ilimitados</p>
                    <p><IoCheckbox /> Agendamento de visitas</p>
                    <p><IoCheckbox /> Chat único por anúncio</p>
                    <p><IoCheckbox /> Contato via ligação e whatsapp</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    <p><IoCheckbox /> Envio e recebimento de documentos</p>
                    <p><IoCheckbox /> Controle de recebimento de aluguéis</p>
                    <p><IoCheckbox /> App administrativo</p>
                    <p><IoCheckbox /> Anúncios no site Sua Chave Auto</p>
                    <p><IoCheckbox /> Anúncios no app Sua Chave Auto</p>
                    <p><IoCheckbox /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Seu plano atual</a>
            </div>
            <div className="plain2">
                <h3>Plano Web</h3>
                <div className="title">
                <h1>R$ 249,99</h1>
                <h4>/ mês</h4>
                </div>
                <div className="text">
                <p><IoCheckbox /> Anúncios ilimitados</p>
                    <p><IoCheckbox /> Agendamento de visitas</p>
                    <p><IoCheckbox /> Chat único por anúncio</p>
                    <p><IoCheckbox /> Contato via ligação e whatsapp</p>
                    <p><IoCheckbox /> Site totalmente responsivo</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    <p><IoCheckbox /> Envio e recebimento de documentos</p>
                    <p><IoCheckbox /> Controle de recebimento de aluguéis</p>
                    <p><IoCheckbox /> App administrativo</p>
                    <p><IoCheckbox /> Site individual para sua empresa</p>
                    <p><IoCheckbox /> Site individual totalmente responsivo</p>
                    <p><IoCheckbox /> Anúncios no seu site</p>
                    <p><IoCheckbox /> Anúncios no site Sua Chave Auto</p>
                    <p><IoCheckbox /> Anúncios no app Sua Chave Auto</p>
                    <p><IoCheckbox /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Selecionar plano</a>
                <p>Mais procurado</p>
            </div>
            <div className="plain3">
                <h3>Plano WebApp</h3>
                <div className="title">
                <h1>R$ 399,99</h1>
                <h4>/ mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckbox /> Anúncios ilimitados</p>
                    <p><IoCheckbox /> Agendamento de visitas</p>
                    <p><IoCheckbox /> Chat único por anúncio</p>
                    <p><IoCheckbox /> Contato via ligação e whatsapp</p>
                    <p><IoCheckbox /> Site totalmente responsivo</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    <p><IoCheckbox /> Envio e recebimento de documentos</p>
                    <p><IoCheckbox /> Controle de recebimento de aluguéis</p>
                    <p><IoCheckbox /> App administrativo</p>
                    <p><IoCheckbox /> Site individual para sua empresa</p>
                    <p><IoCheckbox /> Site individual totalmente responsivo</p>
                    <p><IoCheckbox /> App individual para sua empresa</p>
                    <p><IoCheckbox /> Anúncios no seu site</p>
                    <p><IoCheckbox /> Anúncios no seu app</p>
                    <p><IoCheckbox /> Anúncios no site Sua Chave Auto</p>
                    <p><IoCheckbox /> Anúncios no app Sua Chave Auto</p>
                    <p><IoCheckbox /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Selecionar plano</a>
            </div>


        </div>
    )
}