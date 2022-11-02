import "./pricing.css";
import Navbar2 from "../../components/Nav/Navbar";
import { Plains } from "../../components/Plains/Plains";
import { Footer } from "../../components/Footer/Footer";

export function Pricing() {
    return (
        <div className="Pricing">
            <Navbar2 />
            <h2>Escolha o <span>plano ideal</span> para o seu negócio</h2>
            <h4>Cada plano atende a uma necessidade, de acordo com as ferramentas oferecidas. <br/>Você poderá alterar a qualquer momento.</h4>

            <Plains />
            <Footer />
        </div>
    )
}