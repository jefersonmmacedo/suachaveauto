import "./sliderHome.css"
import {FaBed, FaShower, FaCar, FaBath} from 'react-icons/fa';
import {IoCrop, IoMove, IoArrowBack, IoArrowForward, IoLocationOutline, IoCalendarClearOutline} from 'react-icons/io5';
import ImageHouse1 from "../../assets/images/house.jpg";
import ImageHouse2 from "../../assets/images/house1.jpg";
import ImageHouse3 from "../../assets/images/house2.jpg";
import ImageHouse4 from "../../assets/images/house4.jpg";
import ImageHouse5 from "../../assets/images/house5.jpg";
import ImageHouse6 from "../../assets/images/house6.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import km from "../../assets/images/icons/km.png";  
import marcha2 from "../../assets/images/icons/marcha2.png";   
import gasolina from "../../assets/images/icons/gasolina.png";  
import porta from "../../assets/images/icons/porta.png";  

function SliderHome() {
  const images = [
    ImageHouse1,
    ImageHouse2,
    ImageHouse3,
    ImageHouse4,
];

const buttonStyle = {
  padding: '10px',
  borderRadius: '50%',
  background: 'rgba(237,50,55, 0.5)',
  color: '#fff',
  border: '0px',
  margin: '10px'
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><IoArrowBack/></button>,
  nextArrow: <button style={{ ...buttonStyle }}><IoArrowForward/></button>
}
   
    return (
      <Slide {...properties}>
          <div className="each-slide-effect">
          <div className="imageTop">
            <div className="image">
                <a href="/imovel">
                    <img src={images[0]} alt="" />
                </a>
            </div>
                <div className="blockSlider">
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <a href="/imovel">
                    <h3>VOLKSWAGEN <span>GOLF</span></h3>
                    <h4>2.0 TSI GTI 16V TURBO GASOLINA 4P AUTOMÁTICO</h4>
                    </a>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
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
                        <div className="iconUnic">
                            <p>Combustível</p>
                            <div className="simbol">
                            <img src={gasolina} alt="" />
                                <p>Gasolina</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Portas</p>
                            <div className="simbol">
                            <img src={porta} alt="" />
                                <p>4</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Carroceria</p>
                            <div className="simbol">
                                <FaCar />
                                <p>Sedan</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                </div>
            </div>
          </div>
          <div className="each-slide-effect">
          <div className="imageTop">
          <div className="image">
            <a href="/imovel">
                    <img src={images[1]} alt="" />
            </a>
            </div>
                <div className="blockSlider">
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <a href="/imovel">
                    <h3>VOLKSWAGEN <span>GOLF</span></h3>
                    <h4>2.0 TSI GTI 16V TURBO GASOLINA 4P AUTOMÁTICO</h4>
                    </a>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
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
                        <div className="iconUnic">
                            <p>Combustível</p>
                            <div className="simbol">
                            <img src={gasolina} alt="" />
                                <p>Gasolina</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Portas</p>
                            <div className="simbol">
                            <img src={porta} alt="" />
                                <p>4</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Carroceria</p>
                            <div className="simbol">
                                <FaCar />
                                <p>Sedan</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                </div>
            </div>
          </div>
          <div className="each-slide-effect">
          <div className="imageTop">
          <div className="image">
            <a href="/imovel">
                    <img src={images[2]} alt="" />
            </a>
            </div>
                <div className="blockSlider">
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <a href="/imovel">
                    <h3>VOLKSWAGEN <span>GOLF</span></h3>
                    <h4>2.0 TSI GTI 16V TURBO GASOLINA 4P AUTOMÁTICO</h4>
                    </a>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
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
                        <div className="iconUnic">
                            <p>Combustível</p>
                            <div className="simbol">
                            <img src={gasolina} alt="" />
                                <p>Gasolina</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Portas</p>
                            <div className="simbol">
                            <img src={porta} alt="" />
                                <p>4</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Carroceria</p>
                            <div className="simbol">
                                <FaCar />
                                <p>Sedan</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                </div>
            </div>
          </div>
          <div className="each-slide-effect">
          <div className="imageTop">
          <div className="image">
            <a href="/imovel">
                    <img src={images[3]} alt="" />
            </a>
            </div>
                <div className="blockSlider">
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <a href="/imovel">
                    <h3>VOLKSWAGEN <span>GOLF</span></h3>
                    <h4>2.0 TSI GTI 16V TURBO GASOLINA 4P AUTOMÁTICO</h4>
                    </a>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
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
                        <div className="iconUnic">
                            <p>Combustível</p>
                            <div className="simbol">
                            <img src={gasolina} alt="" />
                                <p>Gasolina</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Portas</p>
                            <div className="simbol">
                            <img src={porta} alt="" />
                                <p>4</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Carroceria</p>
                            <div className="simbol">
                                <FaCar />
                                <p>Sedan</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                </div>
            </div>
          </div>
      </Slide>
  );
};
  

  export { SliderHome }