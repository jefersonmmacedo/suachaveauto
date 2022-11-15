import "./brokers.css"
import Navbar2 from "../../components/Nav/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { BrokerList } from "../../components/BrokerList/BrokerList";

export function Brokers() {
    return (
        <div className="Brokers">
            <Navbar2 />

            <h2>Consultores</h2>

            <BrokerList />
            <Footer />
        </div>
    )
}