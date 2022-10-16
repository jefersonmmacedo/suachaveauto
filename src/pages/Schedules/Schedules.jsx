import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import "./schedules.css";
import {IoCalendarClear, IoLocationOutline} from 'react-icons/io5';
import { ToolBarClient } from "../../components/ToolBarClient/ToolBarClient";

export function Schedules() {
    return (
        <div className="Schedules">
            <Navbar2 />
            <div className="main">
                <ToolBarClient />
                {/* <div className="text">
                <h2>Meus agendamentos</h2>
                    <h3><IoCloseCircle /></h3>
                    <h3>Você não possui agendamentos</h3>

                    <a href="/imoveis/venda">Ver imóveis</a>
                </div> */}
                <div className="text">
                <h2>Meus agendamentos</h2>
                <div className="chat">
                    <div className="image">
                        <IoCalendarClear/>
                        <h3>22</h3>
                        <h4>Nov</h4>
                    </div>
                    <div className="textChat">
                    <h3>Imobiliária LXZ</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <h6>Horário de agendamento: 16:45h</h6>
                    </div>
                </div>
                <div className="chat">
                    <div className="image">
                        <IoCalendarClear/> 
                        <h3>15</h3>
                        <h4>Dez</h4>                       
                    </div>
                    <div className="textChat">
                    <h3>Imobiliária LXZ</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <h6>Horário de agendamento: 16:45h</h6>
                    </div>
                </div>
                <div className="chat">
                    <div className="image">
                        <IoCalendarClear/>
                        <h3>05</h3>
                        <h4>Jan</h4>                     
                    </div>
                    <div className="textChat">
                    <h3>Imobiliária LXZ</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <h6>Horário de agendamento: 16:45h</h6>
                    </div>
                </div>
                </div>
            </div>

                <Footer />
        </div>
    )
}