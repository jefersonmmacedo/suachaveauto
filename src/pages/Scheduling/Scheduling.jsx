import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import "./scheduling.css";
import {IoCalendar, IoAlarmOutline, IoCalendarOutline, IoLocationOutline} from 'react-icons/io5';
import { ToolBarClient } from "../../components/ToolBarClient/ToolBarClient";
import ImageHouse from "../../assets/images/house.jpg";

export function Scheduling() {
    return (
        <div className="Scheduling">
            <Navbar2 />
            <div className="main">
                <ToolBarClient />
                <div className="text">
                <div className="SchedulingProperty">
                    <h2><IoCalendarOutline />Imobiliária LXZ</h2>
                    <div className="textDataHours">
                    <h5><IoCalendarOutline /> Data: 25 de Novembro</h5>
                    <h5><IoAlarmOutline />Horário: 16:45h</h5>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    </div>
                    <div className="dataInfos">
                        <div className="infoUnicScheduling">
                            <p>Quantidade de pessoas: 5</p>
                        </div>
                        <div className="infoUnicScheduling">
                            <p>Possui carro? Não</p>
                        </div>
                        <div className="infoUnicScheduling">
                            <p>Deseja ver outros imóveis? Sim</p>
                        </div>
                    </div>
                    <h4>Imóveis para visita:</h4>
                    <div className="listPropertiesScheduling">
                    <div className="property">
                    <div className="image">
                       <img src={ImageHouse} alt="" />
                    </div>
                    <div className="textProperty">
                    <h3>Apartamento luxuoso</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <div className="pricing">
                        <h6>Aluguel</h6>
                        <h3>R$ 2.000,00 / Mês</h3>
                    </div>
                    </div>
                    </div>
                    <div className="property">
                    <div className="image">
                       <img src={ImageHouse} alt="" />
                    </div>
                    <div className="textProperty">
                    <h3>Apartamento luxuoso</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <div className="pricing">
                        <h6>Aluguel</h6>
                        <h3>R$ 2.000,00 / Mês</h3>
                    </div>
                    </div>
                    </div>
                    <div className="property">
                    <div className="image">
                       <img src={ImageHouse} alt="" />
                    </div>
                    <div className="textProperty">
                    <h3>Apartamento luxuoso</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <div className="pricing">
                        <h6>Aluguel</h6>
                        <h3>R$ 2.000,00 / Mês</h3>
                    </div>
                    </div>
                    </div>

                    </div>
                </div>
                </div>
            </div>

                <Footer />
        </div>
    )
}