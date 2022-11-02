import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import BV from "../../assets/images/financiamento/bv.png";
import Porto from "../../assets/images/financiamento/porto.png";
import Santander from "../../assets/images/financiamento/santander.png";
import Bradesco from "../../assets/images/logos/bradesco.svg";
import Itau from "../../assets/images/logos/itau2.svg";
import Brasil from "../../assets/images/logos/brasil.svg";
import "./simulator.css";

export function Simulator() {
    return (
        <div className="Simulator">
            <Navbar2 />
                <h2>Escolha um banco para a simulação</h2>
                <h4>Você será direcionado a página do simulador da empresa desejada.</h4>

                <div className="logosBank">
                    <a href="https://www.bv.com.br/simular?idcmp=T01|C04|V03|F08|P206|P|responsivo|bv_financeira_2|fv_midia_google_conversao_branding_search_062021&gclid=Cj0KCQjwwfiaBhC7ARIsAGvcPe4DYoqSCo4rDdJ02PmHPjHfpGVq7VAJyUQMoQ0vbgoDWufnmWAjgtgaAjdnEALw_wcB#/veiculo" target="_blank">                   
                    <div className="logoUnicBank">
                        <img src={BV} alt="" className="imageBank"/>
                    </div>
                    </a>
                    <a href="https://www.portoseguro.com.br/financiamento" target="_blank">                   
                    <div className="logoUnicBank">
                        <img src={Porto} alt="" className="imageBank"/>
                    </div>
                    </a>
                    <a href="https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/financiamento-veiculos.shtm" target="_blank">                   
                    <div className="logoUnicBank">
                        <img src={Bradesco} alt="" className="imageBank"/>
                    </div>
                    </a>
                    <a href="https://www.santander.com.br/hotsite/santanderfinanciamentos/banco-do-auto.html" target="_blank">                   
                    <div className="logoUnicBank">
                        <img src={Santander} alt="" className="imageBank"/>
                    </div>
                    </a>
                    <a href="https://www.itau.com.br/emprestimos-financiamentos/veiculos/simulacao/" target="_blank">                   
                    <div className="logoUnicBank">
                        <img src={Itau} alt="" className="imageBank"/>
                    </div>
                    </a>

                </div>
                <h5 className="note">Estamos trabalhando para trazer as simulações direto em nosso site.</h5>

                <Footer />
        </div>
    )
}