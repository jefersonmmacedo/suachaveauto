import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import Caixa from "../../assets/images/logos/caixa.svg";
import Santander from "../../assets/images/logos/santander.svg";
import Bradesco from "../../assets/images/logos/bradesco.svg";
import Itau from "../../assets/images/logos/itau2.svg";
import Brasil from "../../assets/images/logos/brasil.svg";
import Inter from "../../assets/images/logos/inter.svg";
import "./simulator.css";

export function Simulator() {
    return (
        <div className="Simulator">
            <Navbar2 />
                <h2>Escolha um banco para a simulação</h2>
                <h4>Estamos trabalhando para trazer as simulações direto em nosso site.</h4>

                <div className="logosBank">
                    <div className="logoUnicBank">
                        <img src={Caixa} alt="" className="imageBank"/>
                    </div>
                    <div className="logoUnicBank">
                        <img src={Bradesco} alt="" className="imageBank"/>
                    </div>
                    <div className="logoUnicBank">
                        <img src={Santander} alt="" className="imageBank"/>
                    </div>
                    <div className="logoUnicBank">
                        <img src={Itau} alt="" className="imageBank"/>
                    </div>
                    <div className="logoUnicBank">
                        <img src={Brasil} alt="" className="imageBank"/>
                    </div>
                    <div className="logoUnicBank">
                        <img src={Inter} alt="" className="imageBank"/>
                    </div>
                </div>
                <Footer />
        </div>
    )
}