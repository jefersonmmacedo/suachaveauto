import NavbarAdm from "../../../components/Adm/Nav/Navbar"
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar"
import "./dashboard.css"

export function Dashboard() {
    return (
        <div className="Dashboard">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Olá, Sua Chave. Seja bem vindo!</h3>
            <div className="informations">
                <div className="infoData">
                </div>
                <div className="infoData">
                </div>
                <div className="infoData">
                </div>
                <div className="infoData">
                </div>
            </div>
            </div>
        </div>
    )
}