import "./property.css"
import { SliderImages } from '../../components/SliderImages/SliderImages';
import Navbar2 from "../../components/Nav/Navbar";
import { FaBed, FaCar, FaShower, FaBath } from "react-icons/fa";
import { IoCrop, IoHeart, IoMove, IoCheckmarkSharp, IoLocationOutline } from "react-icons/io5";
import { Footer } from "../../components/Footer/Footer";
import { CompanyInfo } from "../../components/CompanyInfo/CompanyInfo";
import { Rent } from "../../components/Rent/Rent";
import { NewScheduling } from "../../components/NewScheduling/NewScheduling";
import { NewMessageProperty } from "../../components/NewMessageProperty/NewMessageProperty";



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
                    <h2>Lindo apartamento luxuoso</h2>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
                    {/* <h4>ID: 9fcb1vbb</h4> */}
                    <h4>ID: IMOV-{data.getFullYear()}{data.getMonth()+1}{data.getDate()}{data.getHours()}{data.getMinutes()}</h4>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <h4>Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt.</h4>

                    <div className="icons">
                        <div className="iconUnic">
                            <p>Quartos</p>
                            <div className="simbol">
                                <FaBed />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Suítes</p>
                            <div className="simbol">
                                <FaBath />
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
                        <div className="iconUnic">
                            <p>Área total</p>
                            <div className="simbol">
                                <IoMove />
                                <p>300 M2</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Construção</p>
                            <div className="simbol">
                                <IoCrop />
                                <p>150 M2</p>
                            </div>
                        </div>
                    </div>

                    <div className="characteristics">
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Piscina</p> 
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Sacada</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Sala de estar</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Suíte</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Churrasqueira</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Wifi</p>
                        </div>
                    </div>
                    <div className="pricing">
                        <h5>Aluguel</h5>
                        <h2>R$ 2.000,00 / Mês</h2>
                    </div>

                    <div className="video">
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/vrLSiAbdXb4" title="YouTube video player" frameBorder="0"
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
                    <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src={text}
                    width="100%" height="300" style={{border:"0px", borderRadius: "6px"}} allowFullScreen=""
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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