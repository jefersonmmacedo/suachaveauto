import "./myProposals.css"
import Navbar2 from "../../components/Nav/Navbar";
import { Proposal } from "../../components/Proposal/Proposal";

export function MyProposals() {
    return (
        <div className="MyProposals">
            <Navbar2 />

            <h2>Minhas propostas</h2>

            <Proposal />
            <Proposal />
            <Proposal />
            <Proposal />
            <Proposal />
            <Proposal />
            <Proposal />
        </div>
    )
}