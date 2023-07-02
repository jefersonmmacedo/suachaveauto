import { useState } from "react";
import Navbar2 from "../../components/Nav/Navbar";
import "./fipeCar.css";

export function FipeCar() {

    const [placa, setPlaca] = useState("")

    function handleRedirect() {
        if(placa === "") {
            return
        }
        window.open(`/consulta-placa/${placa}`, "_self");
    }
    return (
        <div className="FipeCar">
            <Navbar2 />
        <div className="blockImage">
            <div className="imageBlock"></div>
        </div>
        <div className="blockSearch">
            <h3>Informe a placa:</h3>
            <input type="text" placeholder="digite a placa aqui" value={placa} onChange={e => setPlaca(e.target.value)}/>
            <button onClick={handleRedirect}>Consultar</button>
        </div>
    </div>
    )
}