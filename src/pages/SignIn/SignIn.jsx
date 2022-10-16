import "./signIn.css";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";

export function SignIn() {
    const [company, setCompany] = useState(false);

    function handleSelectClient(e) {
        e.preventDefault();
        setCompany(false)
    }
    function handleSelectCompany(e) {
        e.preventDefault();
        setCompany(true)
    }
    function handleRedirectToPage(e) {
        e.preventDefault();
        window.open("/entrar-empresa", "_self")
    }
    return (
        <div className="SignIn">
            <div className="login">
                <form action="">
                <img src={Logo} alt="Logo GPS Buscador" />
                    <div className="data">
                <div className="buttons">
                    <button className={company === false ? "btn" : "btn2"} onClick={handleSelectClient}>Cliente</button>
                    <button className={company === false ? "button1" : "button2"} onClick={handleSelectCompany}>Imobiliária</button>
                </div>

                {company === false ?
                    <>
                        <input type="text" placeholder="Email ou ID"/>
                        <input type="password" placeholder="Senha"/>
                        <div className="links">
                            <p>Recuperar senha</p>
                        </div>
                        <button>Entrar</button>
                        <a href="/cadastrar">Cadastre-se aqui!</a>
                    </>
                    :
                    <>
                    <button className="buttonCompany" onClick={handleRedirectToPage}>Entrar como imobiliária / Corretor</button>
                    <a href="/cadastrar">Cadastre-se aqui!</a>
                    </>
                }
                    </div>
                </form>

            </div>
            <div className="professional">
                <div className="block">
                </div>
            </div>
        </div>
    )
}