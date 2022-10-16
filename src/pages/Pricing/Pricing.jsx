import "./pricing.css";
import Navbar2 from "../../components/Nav/Navbar";
import { Plains } from "../../components/Plains/Plains";
import { Footer } from "../../components/Footer/Footer";
// import Anuncie from "../../assets/images/anuncie.jpg";
import Megafone from "../../assets/images/megafone.png";

export function Pricing() {
    return (
        <div className="Pricing">
            <Navbar2 />
            <h2>Escolha o <span>plano ideal</span> para o seu negócio</h2>
            <h4>Cada plano atende a uma necessidade, de acordo com as ferramentas oferecidas. <br/>Você poderá alterar a qualquer momento.</h4>

            <Plains />

            {/* <div className="marketing">
                <div className="imageMarketing">
                    <img src={Megafone} alt="Megafone" />
                </div>
                <div className="textMarketing">
                    <h3>As melhores ferramentas para melhorar o seu anúncio e alcançar o sucesso</h3>
                    <h4>Alcance mais clientes com as melhores práticas de mercado.</h4>
                    <a href="/">Conhecer o Sua Chave Marketing</a>
                </div>
            </div> */}

            {/* <img src={Anuncie} alt="" className="img"/> */}
            <Footer />
        </div>
    )
}