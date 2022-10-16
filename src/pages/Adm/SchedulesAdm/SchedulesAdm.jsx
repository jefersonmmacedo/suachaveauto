import { IoCalendarClear, IoLocationOutline } from "react-icons/io5";
import NavbarAdm from "../../../components/Adm/Nav/Navbar";
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar";
import "./schedulesAdm.css"

export function SchedulesAdm() {
    return (
        <div className="SchedulesAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Agendamentos</h3>
            <div className="informations">
            <div className="chat">
                    <div className="image">
                        <IoCalendarClear/>
                        <h3>22</h3>
                        <h4>Nov</h4>
                    </div>
                    <div className="textChat">
                    <a href="/painel/agendamento/unico">
                    <h3>Imobiliária LXZ</h3>
                    </a>
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
                    <a href="/painel/agendamento/unico">
                    <h3>Imobiliária LXZ</h3>
                    </a>
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
                    <a href="/painel/agendamento/unico">
                    <h3>Imobiliária LXZ</h3>
                    </a>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <h6>Horário de agendamento: 16:45h</h6>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}