import "./propertyUnicBlock.css"
import { FaBed, FaCar, FaShower } from "react-icons/fa";
import profile from "../../assets/images/profile.png";
import km from "../../assets/images/icons/km.png";  
import marcha2 from "../../assets/images/icons/marcha2.png";  
import {IoHeart, IoLocationOutline, IoCalendarOutline} from 'react-icons/io5';
import {FaRoad} from 'react-icons/fa';
import {GiGearStickPattern} from 'react-icons/gi';
import { NewFavorite } from "../NewFavorite/NewFavorite";

export function PropertyUnicBlock({image}) {
    console.log(image)
    return (
            <div className="PropertyUnicBlock">
                            <div className="image">
                                <a href="/auto">
                            <img src={image} alt="" />
                                </a>
                            </div>
                            <div className="featured">
                                <p>Novo</p>
                            </div>
                            <div className="status">
                                <p>Aceita financiamento</p>
                            </div>
                            <div className="heart2">
                            <NewFavorite />
                            </div>
                            <div className="text">
                                <a href="/imovel">
                            <h3>VOLKSWAGEN <span>GOLF</span></h3>
                            <h5>2.0 TSI GTI 16V TURBO GASOLINA 4P AUTOMÁTICO</h5>
                                </a>
                            <h6><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h6>
                            <div className="icons">
                            <div className="iconUnic">
                                    <p>Ano</p>
                                    <div className="simbol">
                                        <IoCalendarOutline />
                                        <p>14/15</p>
                                    </div>
                                    </div>                        
                            <div className="iconUnic">
                                    <p>Km</p>
                                    <div className="simbol">
                                        <FaRoad />
                                        <p>194.000</p>
                                    </div>
                                </div>
                                <div className="iconUnic">
                                    <p>Câmbio</p>
                                    <div className="simbol">
                                    <GiGearStickPattern />
                                        <p>Manual</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pricing">
                                <h2>R$ 139.000,00</h2>
                            </div>
                            </div>
            </div>
    )
}