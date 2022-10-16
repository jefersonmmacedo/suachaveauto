﻿import "./sale.css";
import {FaBed, FaShower, FaCar} from 'react-icons/fa';
import {IoHeart, IoHeartOutline} from 'react-icons/io5';
import ImageHouse from "../../assets/images/house6.jpg";
import ImageHouse1 from "../../assets/images/house7.jpg";
import ImageHouse2 from "../../assets/images/house8.jpg";

export function Sale() {
    return (
        <div className="Sale">
            <h2>Imóveis recentes de James Estate Agents</h2>  

            <div className="itens">
            
            <div className="block">
                    <div className="image">
                    <img src={ImageHouse} alt="" />
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart">
                    <IoHeartOutline />
                    </div>
                    <h2>Lindo apartamento luxuoso</h2>
                    <h4>Centro - Rio Bonito - Rio de Janeiro</h4>
                    <div className="icons">
                        <div className="iconUnic">
                            <p>Quartos</p>
                            <div className="simbol">
                                <FaBed />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Banheiro</p>
                            <div className="simbol">
                                <FaShower />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Garagem</p>
                            <div className="simbol">
                                <FaCar />
                                <p>3</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h5>Aluguel</h5>
                        <h2>R$ 2.000,00 / Mês</h2>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                    <img src={ImageHouse1} alt="" />
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
                    </div>
                    <h2>Linda cobertura em Copacabana</h2>
                    <h4>Centro - Rio Bonito - Rio de Janeiro</h4>
                    <div className="icons">
                        <div className="iconUnic">
                            <p>Quartos</p>
                            <div className="simbol">
                                <FaBed />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Banheiro</p>
                            <div className="simbol">
                                <FaShower />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Garagem</p>
                            <div className="simbol">
                                <FaCar />
                                <p>3</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h5>Venda</h5>
                        <h2>R$ 2.000.000,00</h2>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                    <img src={ImageHouse2} alt="" />
                    </div>
                    <div className="heart2">
                    <IoHeart />
                    </div>
                    <h2>Mansão em condomínio de luxo</h2>
                    <h4>Centro - Rio Bonito - Rio de Janeiro</h4>
                    <div className="icons">
                        <div className="iconUnic">
                            <p>Quartos</p>
                            <div className="simbol">
                                <FaBed />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Banheiro</p>
                            <div className="simbol">
                                <FaShower />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Garagem</p>
                            <div className="simbol">
                                <FaCar />
                                <p>3</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h5>Venda</h5>
                        <h2>R$ 5.000.000</h2>
                    </div>
                </div>
                
                </div>        
        </div>
    )
}