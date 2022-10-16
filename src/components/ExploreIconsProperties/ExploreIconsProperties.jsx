import "./exploreIconsProperties.css";
import {FaHome, FaBuilding, FaStore, FaMapMarkedAlt} from "react-icons/fa";
import {IoBusiness, IoArrowForward} from "react-icons/io5";


export function ExploreIconsProperties() {
    return (
        <div className="ExploreIconsProperties">
            <div className="mainExplorer">
            <div className="textExplore">
                <h2>Explore mais imóveis</h2>
                <h4>Veja os tipos de imóveis mais procurados</h4>

                <a href="/imoveis/all">+ 1.500 imóveis <IoArrowForward /> </a>
            </div>

            <div className="iconsExplore">
                <div className="IconUnicExplore">
                    <FaHome />
                    <h5>Casas</h5>
                </div>
                <div className="IconUnicExplore">
                    <FaBuilding />
                    <h5>Apartamentos</h5>
                </div>
                <div className="IconUnicExplore">
                    <IoBusiness />
                    <h5>Salas Comerciais</h5>
                </div>
                <div className="IconUnicExplore">
                    <FaStore />
                    <h5>Lojas</h5>
                </div>
                <div className="IconUnicExplore">
                    <FaMapMarkedAlt />
                    <h5>Terrenos e Lotes</h5>
                </div>
            </div>
            </div>

        </div>
    )
}