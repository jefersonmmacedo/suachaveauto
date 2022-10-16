import "./brandCarroussel.css";
import volkswagen from "../../assets/images/logos/volkswagen.png";
import fiat from "../../assets/images/logos/fiat.png";
import chevrolet from "../../assets/images/logos/chevrolet.png";
import ford from "../../assets/images/logos/ford.png";
import hondamoto from "../../assets/images/logos/hondamoto.png";
import hyundai from "../../assets/images/logos/hyundai.png";
import toyota from "../../assets/images/logos/toyota.png";
import citroen from "../../assets/images/logos/citroen.png";
import audi from "../../assets/images/logos/audi.png";
import jeep from "../../assets/images/logos/jeep.png";
import bmw from "../../assets/images/logos/bmw.png";
import volvo from "../../assets/images/logos/volvo.png";
import mini from "../../assets/images/logos/mini.png";
import nissan from "../../assets/images/logos/nissan.png";
import peugeot from "../../assets/images/logos/peugeot.png";
import scania from "../../assets/images/logos/scania.png";
import tesla from "../../assets/images/logos/tesla.png";

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export function BrandCarroussel() {
    const buttonStyle = {
        display:'none'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}></button>,
        nextArrow: <button style={{ ...buttonStyle }}></button>
    }

    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 10,
                slidesToScroll: 10,
            }
        },
        {
            breakpoint: 610,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 8
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        },
        {
            breakpoint: 250,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
    ]

    return (
        <div>
            <Slide slidesToScroll={3} slidesToShow={3} autoplay={false} indicators={true} {...properties} responsive={responsiveSettings}>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={volkswagen} alt="" />
                        </a>
                    </div>
                </div>
                
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={fiat} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={ford} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={chevrolet} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={peugeot} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={hondamoto} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={hyundai} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={toyota} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={citroen} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={jeep} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={nissan} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={audi} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={volvo} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={scania} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={tesla} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={bmw} alt="" />
                        </a>
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                        <a href="/imovel">
                    <img src={mini} alt="" />
                        </a>
                    </div>
                </div>

            </Slide>
        </div>
    )
}