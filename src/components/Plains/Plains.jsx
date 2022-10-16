import "./plains.css"
import {IoCheckbox} from "react-icons/io5";

export function Plains() {
    const professional = false;
    return (
        <div className="Plains">
            <div className="plain">
                <h3>Plano Básico</h3>
                <div className="title">
                <h1>R$ 149,99</h1>
                {/* <h4>/ mês</h4> */}
                </div>
                <div className="text">
                    <p><IoCheckbox /> Imóveis ilimitadas</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    <p><IoCheckbox /> App administrativo [Breve]</p>
                    <p><IoCheckbox /> Imóveis no site Sua Chave</p>
                    <p><IoCheckbox /> Imóveis no app Sua Chave [Breve]</p>
                    <p><IoCheckbox /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Seu plano atual</a>
            </div>
            <div className="plain2">
                <h3>Plano Web</h3>
                <div className="title">
                <h1>R$ 299,99</h1>
                <h4>/ mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckbox /> Imóveis ilimitadas</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    <p><IoCheckbox /> App administrativo [Breve]</p>
                    <p><IoCheckbox /> Site individual para sua empresa</p>
                    <p><IoCheckbox /> Imóveis em seu site</p>
                    <p><IoCheckbox /> Imóveis no site Sua Chave</p>
                    <p><IoCheckbox /> Imóveis no app Sua Chave [Breve]</p>
                    <p><IoCheckbox /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Selecionar plano</a>
                <p>Mais procurado</p>
            </div>
            <div className="plain3">
                <h3>Plano WebApp [Breve]</h3>
                <div className="title">
                <h1>R$ 449,99</h1>
                <h4>/ mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckbox /> Imóveis ilimitadas</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    <p><IoCheckbox /> App administrativo [Breve]</p>
                    <p><IoCheckbox /> Site individual para sua empresa</p>
                    <p><IoCheckbox /> App individual para sua empresa [Breve]</p>
                    <p><IoCheckbox /> Imóveis no seu site</p>
                    <p><IoCheckbox /> Imóveis no seu app [Breve]</p>
                    <p><IoCheckbox /> Imóveis no site Sua Chave</p>
                    <p><IoCheckbox /> Imóveis no app Sua Chave [Breve]</p>
                    <p><IoCheckbox /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Selecionar plano</a>
            </div>


        </div>
    )
}