import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import "./messagesProperty.css";
import {IoCloseCircle} from 'react-icons/io5';
import { ToolBarClient } from "../../components/ToolBarClient/ToolBarClient";
import ImageHouse from "../../assets/images/house.jpg";
import ImageHouse1 from "../../assets/images/house1.jpg";
import ImageHouse2 from "../../assets/images/house2.jpg";

export function MessagesProperty() {
    return (
        <div className="MessagesProperty">
            <Navbar2 />

                <div className="main">
                <ToolBarClient />
                {/* <div className="text">
                <h2>Minhas mensagens</h2>
                    <h3><IoCloseCircle /></h3>
                    <h3>Você não possui agendamentos</h3>
                    <a href="/imoveis/venda">Ver imóveis</a>
                </div> */}
                <div className="text">
                <h2>Minhas conversas</h2>
                <div className="chat">
                    <div className="image">
                        <img src={ImageHouse} alt="" />
                    </div>
                    <div className="textChat">
                    <h3>Lindo apartamento luxuoso</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
                <div className="chat">
                    <div className="image">
                        <img src={ImageHouse1} alt="" />
                    </div>
                    <div className="textChat">
                    <h3>Lindo apartamento luxuoso</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
                <div className="chat">
                    <div className="image">
                        <img src={ImageHouse2} alt="" />
                    </div>
                    <div className="textChat">
                    <h3>Lindo apartamento luxuoso</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
                </div>
            </div>
                <Footer />
        </div>
    )
}