import "./toolBarClient.css";
import LogoImg from '../../assets/images/corretor1.jpg'
import {IoSpeedometer, IoPerson, IoHeart, IoNotifications, IoLogOutOutline, IoChatboxEllipses,
    IoHome, IoLaptopOutline, IoCalendar, IoLogoWhatsapp, IoQrCode, IoPeople } from 'react-icons/io5';
export function ToolBarClient() {
    return (
        <div className="ToolBarClient">
            <div className="image">
                <img src={LogoImg} alt="" />
            </div>
            <div className="ToolsClient">
                <div className="ToolUnicClient">
                   <a href="/mensagens">
                    <IoChatboxEllipses /><p>Chat</p>
                    </a>
                </div>
                <div className="ToolUnicClient">
                   <a href="/agendamentos">
                    <IoCalendar /><p>Agenda</p>
                    </a>
                </div>
                <div className="ToolUnicClient">
                   <a href="/favoritos">
                    <IoHeart /><p>Favoritos</p>
                    </a>
                </div>
                <div className="ToolUnicClient">
                   <a href="/minhaconta">
                    <IoPerson /><p>Conta</p>
                    </a>
                </div>
                <button><IoLogOutOutline />Sair</button>
            </div>
        </div>
    )
}