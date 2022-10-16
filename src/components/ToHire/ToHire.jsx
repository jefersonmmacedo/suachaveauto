import ImageContract from "../../assets/images/background7.jpg";
import {IoMegaphoneOutline} from "react-icons/io5"
import "./toHire.css";
export function ToHire() {
    return (
        <div className="ToHire">
            <div className="imageToHire">
                <div className="imgToHireIn">
                <img src={ImageContract} alt="" />
                </div>
            </div>
            <div className="textToHire">
                <h1><IoMegaphoneOutline />Anuncie com a gente</h1>
                <h3>Saiba tudo sobre nossos planos para imobiliárias e corretores</h3>

                <a href="/sobre">Saber mais</a>
            </div>
        </div>
    )
}