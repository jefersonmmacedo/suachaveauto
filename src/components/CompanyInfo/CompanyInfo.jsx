import "./companyInfo.css";
import {IoCallOutline, IoLocationOutline, IoLogoWhatsapp, IoMailOutline, IoChatboxEllipsesOutline} from 'react-icons/io5'
import imobiliária from "../../assets/images/imob1.jpg";

export function CompanyInfo() {
    return (
        <div className="CompanyInfo">
            <div className="image">
                <img src={imobiliária} alt="" />
            </div>
            <h2>Sua Chave Imóveis</h2>
            <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>

            <div className="contact">
                <div className="info"> 
                <h4>Contato</h4>           
                    <h5><IoCallOutline /> (21) 2222-2222</h5> 
                    <h5><IoLogoWhatsapp /> (21) 99999-9999</h5>          
                    <h5><IoMailOutline /> contato@suachaveauto.com.br</h5>
                </div>
            </div>
                <divo className="buttonsContact">
                    <button className="btn-whats"><IoLogoWhatsapp /> Whatsapp</button>
                    <button><IoCallOutline /> Ligar</button>
                </divo>
        </div>
    )
}