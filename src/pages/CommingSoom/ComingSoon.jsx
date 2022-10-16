import "./comingSoon.css"
import Logo from "../../assets/images/Logo2.png";
import Notebook from "../../assets/images/Laptop.png";

export function ComingSoon() {
    return(
        <div className="ComingSoon">
            <div className="logo">
              <img src={Logo} alt="Logo sua chave" />
            </div>
            
            <h1>Encontre carros, motos e <br />agências em poucos cliques!</h1>

            <img src={Notebook} alt="Notebook" />


            <div className="coming">
                <h3>EM BREVE!</h3>
            </div>
            

                
        </div>
    )
}