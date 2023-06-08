import "./propertyUnicBlock.css"
import { FaBed, FaCar, FaShower } from "react-icons/fa";
import profile from "../../assets/images/profile.png";
import km from "../../assets/images/icons/km.png";  
import marcha2 from "../../assets/images/icons/marcha2.png";  
import {IoHeart, IoLocationOutline, IoCalendarOutline} from 'react-icons/io5';
import {FaRoad} from 'react-icons/fa';
import {GiGearStickPattern, GiRoad} from 'react-icons/gi';
import { NewFavorite } from "../NewFavorite/NewFavorite";
import { NewShareBox } from "../NewShareBox/NewShareBox";
import { TbRoad } from "react-icons/tb";

export function PropertyUnicBlock({image}) {
    console.log(image)
    return (
            <div className="PropertyUnicBlock">
                            <div className="imageSlider">
                                <a href="/auto">
                            <img src={image} alt="" />
                                </a>
                            </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>

                            {/* {new Date(property?.created_at).getDate() === new Date().getDate() &&
                    new Date(property?.created_at).getMonth() === new Date().getMonth() &&
                    new Date(property?.created_at).getFullYear() === new Date().getFullYear()
                    ?
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    : ""
                    }  */}
                    <div className="infosPropertyButtons">
                        <div className="status">
                        <a href={`/imobiliaria/{nameSlug}`}>
                            <div className="image">
                                <img src="{property?.avatarCompany}" alt="{property?.nameCompany}" />
                            </div>
                            </a>
                            <a href={`/imobiliaria/{nameSlug}`}>
                            {/* <p>{company !== undefined ? company.slice(0,23) : company}</p> */}
                            <p>Agencia de carros</p>
                            </a>
                        </div>
                    <div className="infosButtons">
                  
                    <div className="share">
                    <NewShareBox idProperty="{property?.id}" title="{property?.title}"/>
                    </div>
                    <div className="heart2">
                    <NewFavorite idProperty="{property?.id}" idCompany="{property?.idCompany}" page={"not"}/>
                    </div>
                    </div>
                    </div>
                            <div className="text">
                            <div className="textInfos">
                    <a href={`/imovel/{property?.id}`}>
                    <h4>VOLKSWAGEN <span>GOLF</span></h4>
                        </a>
                    {/* <h5>{StatusProperty}</h5> */}
                    <h6>2.0 TSI GTI 16V TURBO GASOLINA 4P AUTOMÁTICO</h6>
                    <h6><IoLocationOutline />Centro - Rio Bonito - RJ</h6>
                    </div>

                            <div className="iconsBox">
                            <div className="iconUnicBox">
                                    
                                        <IoCalendarOutline />
                                    <div className="simbolBox">
                                        <p>2014/2015</p>
                                    </div>
                                    </div>                        
                            <div className="iconUnicBox">
                                    
                                        <TbRoad />
                                    <div className="simbolBox">
                                        <p>194.000 Km</p>
                                    </div>
                                </div>
                                <div className="iconUnicBox">
                                    
                                    <GiGearStickPattern />
                                    <div className="simbolBox">
                                        <p>Automático</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pricing">
                                <h3>R$ <span>139.000,00</span></h3>
                            </div>
                            </div>
            </div>
    )
}