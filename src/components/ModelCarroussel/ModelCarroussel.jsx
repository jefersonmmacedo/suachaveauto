import "./modelCarroussel.css";
import gol from "../../assets/images/cars/gol.png";
import palio from "../../assets/images/cars/palio.png";
import onix from "../../assets/images/cars/onix.png";
import fiesta from "../../assets/images/cars/fiesta.png";
import hb20 from "../../assets/images/cars/hb20.png";
import corolla from "../../assets/images/cars/corolla.png";
import compass from "../../assets/images/cars/compass.png";
import jetta from "../../assets/images/cars/jetta.png";
import toro from "../../assets/images/cars/toro.png";
import renegade from "../../assets/images/cars/renegade.png";
import onixsedan from "../../assets/images/cars/onixsedan.png";
import s10 from "../../assets/images/cars/s10.png";
import pulse from "../../assets/images/cars/pulse.png";
import prisma from "../../assets/images/cars/prisma.png";
import civic from "../../assets/images/cars/civic.png";
import ecosport from "../../assets/images/cars/ecosport.png";
import mobi from "../../assets/images/cars/mobi.png";
import {IoArrowForward, IoArrowBack} from "react-icons/io5"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export function ModelCarroussel() {
    const buttonStyle = {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '30px',
        height:'30px',
        borderRadius: '50%',
        color: "#000000",
        border: 'none',
        boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.2)',
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><IoArrowBack /></button>,
        nextArrow: <button style={{ ...buttonStyle }}><IoArrowForward /></button>
    }

    const responsiveSettings = [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 485,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 305,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 250,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]

    return (
        <div>
            <Slide slidesToScroll={3} slidesToShow={3} autoplay={false} indicators={false} {...properties} responsive={responsiveSettings}>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Volkswagen</h3>
                        <h2>Gol</h2>
                    </div>
                    <img src={gol} alt="" />
                    
                </div>
                        </a>
                
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Fiat</h3>
                        <h2>Palio</h2>
                    </div>
                    <img src={palio} alt="" />
                    
                </div>
                        </a>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Ford</h3>
                        <h2>Fiesta</h2>
                    </div>
                    <img src={fiesta} alt="" />
                    
                </div>
                        </a>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Chevrolet</h3>
                        <h2>Onix</h2>
                    </div>
                    <img src={onix} alt="" />
                    
                </div>
                        </a>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Honda</h3>
                        <h2>Civic</h2>
                    </div>
                    <img src={civic} alt="" />
                    
                </div>
                        </a>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Hyndai</h3>
                        <h2>HB20</h2>
                    </div>
                    <img src={hb20} alt="" />
                    
                </div>
                        </a>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Toyota</h3>
                        <h2>Corolla</h2>
                    </div>
                    <img src={corolla} alt="" />
                    
                </div>
                        </a>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Jeep</h3>
                        <h2>Compass</h2>
                    </div>
                    <img src={compass} alt="" />
                    
                </div>
                        </a>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Volkswagen</h3>
                        <h2>Jetta</h2>
                    </div>
                    <img src={jetta} alt="" />
                    
                </div>
                        </a>

                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Jeep</h3>
                        <h2>Renegade</h2>
                    </div>
                    <img src={renegade} alt="" />
                    
                </div>
                        </a>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Chevrolet</h3>
                        <h2>Prisma</h2>
                    </div>
                    <img src={prisma} alt="" />
                    
                </div>
                        </a>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Fiat</h3>
                        <h2>Toro</h2>
                    </div>
                    <img src={toro} alt="" />
                    
                </div>
                        </a>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Chevrolet</h3>
                        <h2>S10</h2>
                    </div>
                    <img src={s10} alt="" />
                    
                </div>
                        </a>
 
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Ford</h3>
                        <h2>Ecosport</h2>
                    </div>
                    <img src={ecosport} alt="" />
                    
                </div>
                        </a>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Fiat</h3>
                        <h2>Mobi</h2>
                    </div>
                    <img src={mobi} alt="" />
                    
                </div>
                        </a>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Chevrolet</h3>
                        <h2>Onix</h2>
                    </div>
                    <img src={onixsedan} alt="" />
                    
                </div>
                        </a>
                        <a href="/imovel">
            <div className="logoModel">
                    <div className="Model">
                        <h3>Fiat</h3>
                        <h2>Pulse</h2>
                    </div>
                    <img src={pulse} alt="" />
                    
                </div>
                        </a>

            </Slide>
        </div>
    )
}