import "./toolBar.css";
import LogoImg from '../../../assets/images/imob2.png'
import {IoSpeedometer, IoPerson,  IoNotifications, IoLogOutOutline, IoChatboxEllipses,
    IoHome, IoLaptopOutline, IoCalendar, IoLogoWhatsapp, IoQrCode, IoPeople } from 'react-icons/io5';
export function ToolBar() {
    return (
        <div className="ToolBar">
            <div className="image">
                <img src={LogoImg} alt="" />
            </div>
            <div className="Tools">
                <div className="ToolUnic">
                   <a href="/painel">
                    <IoSpeedometer /><p>Painel</p>                    
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/painel/chat">
                    <IoChatboxEllipses /><p>Chat</p>
                    </a>
                </div>
                <div className="ToolUnic3">
                   <a href="/painel/novoimovel">
                    <IoHome /><p>Imóveis</p>
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/painel/agendamentos">
                    <IoCalendar /><p>Agenda</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/painel/notificacoes">
                    <IoNotifications /><p>Alertas</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/painel/planos">
                    <IoQrCode /><p>Meu plano</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/painel/corretores">
                    <IoPeople /><p>Corretores</p>
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/painel/minhaconta">
                    <IoPerson /><p>Conta</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/painel/web">
                    <IoLaptopOutline /><p>Site/App</p>
                    </a>
                </div>
                   <button className="btnToolBar">Atendimento</button>
                {/* <button className="btnToolBar"><IoLogoWhatsapp />Financeiro</button>
                <button className="btnToolBar"><IoLogoWhatsapp />Comercial</button> */}
                <button><IoLogOutOutline />Sair</button>
            </div>
        </div>
    )
}