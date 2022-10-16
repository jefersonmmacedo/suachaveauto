import "./budgetPage.css";
import Navbar2 from "../../components/Nav/Navbar";
import { BudgetUnic } from "../../components/BudgetUnic/BudgetUnic";
import { ProposalUnic } from "../../components/ProposalUnic/ProposalUnic";
import Anuncie from "../../assets/images/anuncie.jpg";

export function BudgetPage() {
    return (
        <div className="BudgetPage">
                <Navbar2 />
                <div className="text">
                <h4>Proposta</h4>
                </div>
                <ProposalUnic />
                <div className="text">
                <h4>Orçamento</h4>
                </div>
                <BudgetUnic />
                    <a className="link" href="/mensagens">Mensagens</a>
                    <img src={Anuncie} alt="" className="img"/>
                    <button className="btn-budget">Voltar meus orçamentos</button>
        </div>
    )
}