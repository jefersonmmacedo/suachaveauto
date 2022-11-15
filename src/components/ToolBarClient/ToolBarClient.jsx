import "./toolBarClient.css";
import LogoImg from '../../assets/images/corretor1.jpg'
import {IoSpeedometer, IoPersonOutline, IoHeartOutline, IoNotifications, IoLogOutOutline, IoChatboxEllipsesOutline,
    IoHomeOutline, IoLaptopOutline, IoCalendarOutline, IoLogoWhatsapp, IoQrCode, IoPeople,  } from 'react-icons/io5';
export function ToolBarClient() {
    return (
        <div className="ToolBarClient">
            <div className="image">
                <img src={LogoImg} alt="" />
            </div>
            <div className="ToolsClient">
                <div className="ToolUnicClient">
                   <a href="/mensagens">
                    <IoChatboxEllipsesOutline /><p>Chat</p>
                    </a>
                </div>
                <div className="ToolUnicClient">
                   <a href="/agendamentos">
                    <IoCalendarOutline /><p>Agenda</p>
                    </a>
                </div>
                <div className="ToolUnicClient2">
                   <a href="/minhaconta">
                   <div className="image2">
                      <img src={LogoImg} alt="" />
                    </div>  
                    </a>
                </div>
                <div className="ToolUnicClient">
                   <a href="/favoritos">
                    <IoHeartOutline /><p>Favoritos</p>
                    </a>
                </div>
                <div className="ToolUnicClient">
                   <a href="/alugueis">
                    <IoHomeOutline /><p>Imóveis</p>
                    </a>
                </div>
                <div className="ToolUnicClient3">
                   <a href="/minhaconta">
                    <IoPersonOutline /><p>Conta</p>
                    </a>
                </div>
                <button><IoLogOutOutline />Sair</button>
            </div>
        </div>
    )
}