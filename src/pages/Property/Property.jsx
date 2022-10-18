import "./property.css"
import { SliderImages } from '../../components/SliderImages/SliderImages';
import Navbar2 from "../../components/Nav/Navbar";
import { FaBed, FaCar, FaShower, FaBath, FaCalendar} from "react-icons/fa";
import { IoCrop, IoHeart, IoCalendarClearOutline, IoCheckmarkSharp, IoLocationOutline } from "react-icons/io5";
import { Footer } from "../../components/Footer/Footer";
import { CompanyInfo } from "../../components/CompanyInfo/CompanyInfo";
import { Rent } from "../../components/Rent/Rent";
import { NewScheduling } from "../../components/NewScheduling/NewScheduling";
import { NewMessageProperty } from "../../components/NewMessageProperty/NewMessageProperty";
import km from "../../assets/images/icons/km.png";  
import marcha2 from "../../assets/images/icons/marcha2.png";  
import volante from "../../assets/images/icons/volante.png";  
import gasolina from "../../assets/images/icons/gasolina.png";  
import marcha from "../../assets/images/icons/marcha.png";  
import placa from "../../assets/images/icons/placa.png";  
import porta from "../../assets/images/icons/porta.png";   
import cor from "../../assets/images/icons/cor.png";  



export function Property() {
    const data = new Date();
    var text = "https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Saquarema RJ&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    return (
       <div className="Property">
        <Navbar2 />
        <div className="main">
          <SliderImages />
          <div className="data">
          <div className="propertyUnic">
            <div className="targets">
            <div className="featured">
                        <p>Novo</p>
                    </div>

                    <NewMessageProperty />
                    <NewScheduling />
                     <div className="heart">
                    <IoHeart />
                    </div>
            </div>
                <div className="text">
                    <h2>VOLKSWAGEN <span>GOLF</span></h2>
                    <h3>2.0 TSI GTI 16V TURBO GASOLINA 4P AUTOMÁTICO</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
                    {/* <h4>ID: 9fcb1vbb</h4> */}
                    <h4>ID: AUTO-{data.getFullYear()}{data.getMonth()+1}{data.getDate()}{data.getHours()}{data.getMinutes()}</h4>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <h4 className="description">Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt.</h4>

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
                            <p>Combustível</p>
                            <div className="simbol">
                            <img src={gasolina} alt="" />
                                <p>Gasolina</p>
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
                            <p>Portas</p>
                            <div className="simbol">
                            <img src={porta} alt="" />
                                <p>4</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Cor</p>
                            <div className="simbol">
                            <img src={cor} alt="" />
                                <p>Azul</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Carroceria</p>
                            <div className="simbol">
                                <FaCar />
                                <p>Sedan</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Final de placa</p>
                            <div className="simbol">
                            <img src={placa} alt="" />
                                <p>6</p>
                            </div>
                        </div>
                    </div>

                    <div className="informationsDocs">
                        <div className="item">
                            <IoCheckmarkSharp /> <p>IPVA pago</p> 
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Licenciado</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Único dono</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Aceita troca</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Todas as revisões feitas pela concessionária</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Garantia de fábrica</p>
                        </div>
                    </div>
                    <div className="characteristics">
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Direção Hidráulica</p> 
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Ar Condicionado</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Vidros Elétricos</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Trava Elétrica</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Computador de Bordo</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Central Multimídia</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Air Bag</p> 
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Freio a Disco</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Câmera de Ré</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Alárme</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Volante com controle universal</p>
                        </div>
                    </div>
                    <div className="pricing">
                        <h5>À venda por:</h5>
                        <h2>R$ 123.900,00</h2>
                    </div>

                    <div className="video">
                    <iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/1UXGxXvhO3U" title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>


                    <div className="map">
                    {/* <iframe
  width="600"
  height="450"
  style={{border:"0px", borderRadius: "6px"}}
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?key="AIzaSyAKKy0iHlEZMQavlxNM5i-tkIYp4q7X_Y0
    &q=Space+Needle,Seattle+WA`}>
</iframe> */}
                    {/* <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src={text}
                    width="100%" height="300" style={{border:"0px", borderRadius: "6px"}} allowFullScreen=""
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12290.419599284141!2d-42.62790332892239!3d-22.711818016034076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1664680466523!5m2!1spt-BR!2sbr"
                    width="100%" height="300" style={{border:"0px", borderRadius: "6px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    </div>
                </div>


                <CompanyInfo />
                </div>
                <Rent />
        </div>
        <Footer />

       </div>
      )
}