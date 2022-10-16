import "./companyInfo.css";
import {IoCallOutline, IoLogoWhatsapp, IoMailOutline, IoChatboxEllipsesOutline} from 'react-icons/io5'
import imobiliária from "../../assets/images/imob1.png";

export function CompanyInfo() {
    return (
        <div className="CompanyInfo">
            <div className="image">
                <img src={imobiliária} alt="" />
            </div>
            <h2>Sua Chave Imóveis</h2>
            <h5>Centro - Rio Bonito - Rio de Janeiro</h5>

            <div className="contact">
                <div className="info">
                    <IoCallOutline />
                    <h5>(21) 2222-2222</h5>
                </div>
                <div className="info">
                    <IoLogoWhatsapp />
                    <h5>(21) 99999-9999</h5>
                </div>
                <div className="info">
                    <IoMailOutline />
                    <h5>contato@suachaveimoveis.com.br</h5>
                </div>
            </div>
                <divo className="buttonsContact">
                    <button className="btn-whats"><IoLogoWhatsapp /> Whatsapp</button>
                    <button className="btn-call"><IoCallOutline /> Ligar</button>
                    <button><IoChatboxEllipsesOutline /> Mensagem</button>
                </divo>
        </div>
    )
}