import "./budgets.css"
import Navbar2 from "../../components/Nav/Navbar";
import { Budget } from "../../components/Budget/Budget";

export function Budgets() {
    return (
        <div className="Budgets">
            <Navbar2 />

            <h2>Meus orçamentos</h2>

            <Budget />
        </div>
    )
}