import "./propertyCarroussel.css";
import {FaBed, FaShower, FaCar} from 'react-icons/fa';
import {IoHeart, IoLocationOutline, IoCalendar, IoCalendarClearOutline} from 'react-icons/io5';
import ImageHouse from "../../assets/images/house.jpg";
import ImageHouse1 from "../../assets/images/house1.jpg";
import ImageHouse2 from "../../assets/images/house2.jpg";
import ImageHouse3 from "../../assets/images/house3.jpg";
import ImageHouse4 from "../../assets/images/house4.jpg";
import ImageHouse5 from "../../assets/images/house5.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import km from "../../assets/images/icons/km.png";  
import marcha2 from "../../assets/images/icons/marcha2.png";  

export function PropertyCarroussel() {
    const buttonStyle = {
        display:'none'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}></button>,
        nextArrow: <button style={{ ...buttonStyle }}></button>
    }

    const responsiveSettings = [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 610,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 250,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

    return (
        <div>
            <Slide slidesToScroll={3} slidesToShow={3} indicators={true} {...properties} responsive={responsiveSettings}>
            <div className="block">
                    <div className="image">
                        <a href="/imovel">
                    <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
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
                                <IoCalendarClearOutline />
                                <p>14/15</p>
                            </div>
                            </div>                        
                    <div className="iconUnic">
                            <p>Km</p>
                            <div className="simbol">
                                <img src={km} alt="" />
                                <p>194.000</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Câmbio</p>
                            <div className="simbol">
                            <img src={marcha2} alt="" />
                                <p>Manual</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                        <a href="/imovel">
                    <img src={ImageHouse2} alt="" />
                        </a>
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
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
                                <IoCalendarClearOutline />
                                <p>14/15</p>
                            </div>
                            </div>                        
                    <div className="iconUnic">
                            <p>Km</p>
                            <div className="simbol">
                                <img src={km} alt="" />
                                <p>194.000</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Câmbio</p>
                            <div className="simbol">
                            <img src={marcha2} alt="" />
                                <p>Manual</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                        <a href="/imovel">
                    <img src={ImageHouse3} alt="" />
                        </a>
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
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
                                <IoCalendarClearOutline />
                                <p>14/15</p>
                            </div>
                            </div>                        
                    <div className="iconUnic">
                            <p>Km</p>
                            <div className="simbol">
                                <img src={km} alt="" />
                                <p>194.000</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Câmbio</p>
                            <div className="simbol">
                            <img src={marcha2} alt="" />
                                <p>Manual</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                        <a href="/imovel">
                    <img src={ImageHouse4} alt="" />
                        </a>
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
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
                                <IoCalendarClearOutline />
                                <p>14/15</p>
                            </div>
                            </div>                        
                    <div className="iconUnic">
                            <p>Km</p>
                            <div className="simbol">
                                <img src={km} alt="" />
                                <p>194.000</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Câmbio</p>
                            <div className="simbol">
                            <img src={marcha2} alt="" />
                                <p>Manual</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                        <a href="/imovel">
                    <img src={ImageHouse5} alt="" />
                        </a>
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
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
                                <IoCalendarClearOutline />
                                <p>14/15</p>
                            </div>
                            </div>                        
                    <div className="iconUnic">
                            <p>Km</p>
                            <div className="simbol">
                                <img src={km} alt="" />
                                <p>194.000</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Câmbio</p>
                            <div className="simbol">
                            <img src={marcha2} alt="" />
                                <p>Manual</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                        <a href="/imovel">
                    <img src={ImageHouse1} alt="" />
                        </a>
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
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
                                <IoCalendarClearOutline />
                                <p>14/15</p>
                            </div>
                            </div>                        
                    <div className="iconUnic">
                            <p>Km</p>
                            <div className="simbol">
                                <img src={km} alt="" />
                                <p>194.000</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Câmbio</p>
                            <div className="simbol">
                            <img src={marcha2} alt="" />
                                <p>Manual</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                        <a href="/imovel">
                    <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
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
                                <IoCalendarClearOutline />
                                <p>14/15</p>
                            </div>
                            </div>                        
                    <div className="iconUnic">
                            <p>Km</p>
                            <div className="simbol">
                                <img src={km} alt="" />
                                <p>194.000</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Câmbio</p>
                            <div className="simbol">
                            <img src={marcha2} alt="" />
                                <p>Manual</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                        <a href="/imovel">
                    <img src={ImageHouse2} alt="" />
                        </a>
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
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
                                <IoCalendarClearOutline />
                                <p>14/15</p>
                            </div>
                            </div>                        
                    <div className="iconUnic">
                            <p>Km</p>
                            <div className="simbol">
                                <img src={km} alt="" />
                                <p>194.000</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Câmbio</p>
                            <div className="simbol">
                            <img src={marcha2} alt="" />
                                <p>Manual</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                        <a href="/imovel">
                    <img src={ImageHouse3} alt="" />
                        </a>
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
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
                                <IoCalendarClearOutline />
                                <p>14/15</p>
                            </div>
                            </div>                        
                    <div className="iconUnic">
                            <p>Km</p>
                            <div className="simbol">
                                <img src={km} alt="" />
                                <p>194.000</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Câmbio</p>
                            <div className="simbol">
                            <img src={marcha2} alt="" />
                                <p>Manual</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                        <a href="/imovel">
                    <img src={ImageHouse4} alt="" />
                        </a>
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
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
                                <IoCalendarClearOutline />
                                <p>14/15</p>
                            </div>
                            </div>                        
                    <div className="iconUnic">
                            <p>Km</p>
                            <div className="simbol">
                                <img src={km} alt="" />
                                <p>194.000</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Câmbio</p>
                            <div className="simbol">
                            <img src={marcha2} alt="" />
                                <p>Manual</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                        <a href="/imovel">
                    <img src={ImageHouse5} alt="" />
                        </a>
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
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
                                <IoCalendarClearOutline />
                                <p>14/15</p>
                            </div>
                            </div>                        
                    <div className="iconUnic">
                            <p>Km</p>
                            <div className="simbol">
                                <img src={km} alt="" />
                                <p>194.000</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Câmbio</p>
                            <div className="simbol">
                            <img src={marcha2} alt="" />
                                <p>Manual</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                        <a href="/imovel">
                    <img src={ImageHouse1} alt="" />
                        </a>
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
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
                                <IoCalendarClearOutline />
                                <p>14/15</p>
                            </div>
                            </div>                        
                    <div className="iconUnic">
                            <p>Km</p>
                            <div className="simbol">
                                <img src={km} alt="" />
                                <p>194.000</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Câmbio</p>
                            <div className="simbol">
                            <img src={marcha2} alt="" />
                                <p>Manual</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                    </div>
                </div>
            </Slide>
        </div>
    )
}