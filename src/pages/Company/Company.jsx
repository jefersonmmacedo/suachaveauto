import "./company.css";
import Navbar2 from "../../components/Nav/Navbar";
import { IoLocationOutline, IoCallOutline, IoLogoWhatsapp, IoMailOutline, IoGlobeOutline } from "react-icons/io5";
import { Footer } from "../../components/Footer/Footer";
import { BrokerList } from "../../components/BrokerList/BrokerList";
import { Sale } from "../../components/Sale/Sale";
import imobiliária from "../../assets/images/imob1.png";

export function Company() {
    return (
       <div className="Company">
        <Navbar2 />
        <div className="main">
          <div className="data">
          <div className="CompanyUnic">
            {/* <div className="targets">
            <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="chat">
                        <IoChatboxEllipsesOutline/><p>Enviar mensagem</p>
                    </div>
                     <div className="heart2">
                    <IoHeart />
                    </div>
            </div> */}
                    <div className="title">
                        <div className="image">
                            <img src={imobiliária} alt="" />
                        </div>
                        <div className="textTitle">
                    <h2>James Estate Agents</h2>
                    <h5><IoLocationOutline /> Centro - Rio Bonito - Rio de Janeiro</h5>
                        </div>
                    </div>
                <div className="text">

                    {/* <h4>A finalidade de uma imobiliária é bem simples: dar todo o suporte necessário em processos de compra, venda, locação ou qualquer outro tipo de transação imobiliária. É ela que vai garantir a segurança e a sua comodidade durante esses processos.
                    <br />
Para sua segurança é importante ressaltar que todas as imobiliárias devem possuir um CRECI que é um certificado emitido pelo Conselho Regional de Corretores de Imóveis.</h4> */}

<div className="iconsCompany">
                        <div className="iconCompanyUnic">
                            <div className="simbol">
                                <IoCallOutline />
                                <p>(21) 2222-2222</p>
                            </div>
                        </div>
                        <div className="iconCompanyUnic">
                            <div className="simbol">
                                <IoLogoWhatsapp />
                                <p>(21) 99999-9999)</p>
                            </div>
                        </div>
                        <div className="iconCompanyUnic">
                            <div className="simbol">
                                <IoMailOutline />
                                <p>contato@suachave.com.br</p>
                            </div>
                        </div>                        
                        <div className="iconCompanyUnic">
                            <div className="simbol">
                                <IoGlobeOutline />
                                <p>www.suachave.com.br</p>
                            </div>
                        </div>                        
                    </div>
                    </div>
                    {/* <BrokerList /> */}
                </div>

                </div>
                <Sale />
                <button className="btnCompany">Mais imóveis de James Estate Agents</button>
        </div>
        <Footer />

       </div>
      )
}