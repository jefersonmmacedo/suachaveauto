import NavbarAdm from "../../../components/Adm/Nav/Navbar";
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar";
import "./chatAdm.css";
import ImageHouse from "../../../assets/images/house.jpg";
import ImageHouse1 from "../../../assets/images/house1.jpg";
import ImageHouse2 from "../../../assets/images/house2.jpg";

export function ChatAdm() {
    return (
        <div className="ChatAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Mensagens</h3>
            <div className="informations">
            <div className="chat">
                    <div className="image">
                        <a href="/conversa">
                        <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="textChat">
                    <h3>Lindo apartamento luxuoso</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
                <div className="chat">
                    <div className="image">
                    <a href="/conversa">
                        <img src={ImageHouse1} alt="" />
                        </a>
                    </div>
                    <div className="textChat">
                    <h3>Lindo apartamento luxuoso</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
                <div className="chat">
                    <div className="image">
                    <a href="/conversa">
                        <img src={ImageHouse2} alt="" />
                        </a>
                    </div>
                    <div className="textChat">
                    <h3>Lindo apartamento luxuoso</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}