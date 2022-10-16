import "./properties.css";
import Navbar2 from "../../components/Nav/Navbar";
import { ListProperty } from "../../components/ListProperty/ListProperty";
import { SearchPropertyListing } from "../../components/SearchPropertyListing/SearchPropertyListing";
import { Footer } from "../../components/Footer/Footer";

export function Properties(){
    return (
        <div className="Properties">
        <Navbar2 />
        <div className="listPage">
            <SearchPropertyListing />
            <ListProperty />
        </div>
        <Footer />
        </div>
    )
}
