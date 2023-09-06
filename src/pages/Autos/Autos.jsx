import "./autos.css"
import { SliderImages } from '../../components/SliderImages/SliderImages';
import Navbar2 from "../../components/Nav/Navbar";
import { IoColorFillOutline, IoCalendarOutline, IoCheckmarkSharp, IoLocationOutline, IoCarSportOutline } from "react-icons/io5";
import {TbRoad, TbGasStation} from 'react-icons/tb';
import {TiSortNumerically} from 'react-icons/ti';
import {GiGearStickPattern, GiCarDoor, GiSteeringWheel } from 'react-icons/gi';
import { Footer } from "../../components/Footer/Footer";
import { CompanyInfo } from "../../components/CompanyInfo/CompanyInfo";
import { NewScheduling } from "../../components/NewScheduling/NewScheduling";
import { NewMessageAutos } from "../../components/NewMessageAutos/NewMessageAutos";
import { NewFavorite } from "../../components/NewFavorite/NewFavorite";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { NewShare } from "../../components/NewShare/NewShare";
import { FaMotorcycle } from "react-icons/fa";
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";
import { DownloadApp2 } from "../../components/DownloadApp2/DownloadApp2";


export function Autos() {
    const {id} = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadPlains() {
            await api.get(`/autos/unicauto/${id}`).then((res) => {
                setData(res.data[0]);

            }).catch((err) => {
                console.log(err);
            });
        }
        loadPlains() 
    },[]);


    if(data.length === 0) {
        return (
            <h5>Carregando...</h5>
        )
    }

    
    const Referência = new Date(data?.created_at).getMonth() === 0 ? "Janeiro"
                    : new Date(data?.created_at).getMonth() === 1 ? "Fevereiro"
                    : new Date(data?.created_at).getMonth() === 2 ? "Março"
                    : new Date(data?.created_at).getMonth() === 3 ? "Abril"
                    : new Date(data?.created_at).getMonth() === 4 ? "Maio"
                    : new Date(data?.created_at).getMonth() === 5 ? "Junho"
                    : new Date(data?.created_at).getMonth() === 6 ? "Julho"
                    : new Date(data?.created_at).getMonth() === 7 ? "Agosto"
                    : new Date(data?.created_at).getMonth() === 8 ? "Setembro"
                    : new Date(data?.created_at).getMonth() === 9 ? "Outubro"
                    : new Date(data?.created_at).getMonth() === 10 ? "Novembro"
                    : new Date(data?.created_at).getMonth() === 11 ? "Dezembro"
                    : ""
   
    const textReferência = `${Referência}/${new Date(data?.created_at).getFullYear()}`
    return (
       <div className="Autos">
        <Navbar2 />
        <div className="main">
          <SliderImages images={data?.images} id={data?.id}/>
          <div className="data">
          <div className="AutosUnic">
            <div className="targets">

            {new Date(data?.created_at).getDate() === new Date().getDate() &&
                new Date(data?.created_at).getMonth() === new Date().getMonth() &&
                new Date(data?.created_at).getFullYear() === new Date().getFullYear()
                ? 
            <div className="featured">
                        <p>Novo</p>
                    </div>
                    : ""
             }


                    <div className="ref">
                        <p>REF.: {data?.id?.toUpperCase()}</p>
                    </div>
                    {/* <NewMessageAutos idAuto={data?.id} idCompany={data?.idCompany} imageAuto={data?.featuredImage}/> */}
                    <NewScheduling idAuto={data?.id} idCompany={data?.idCompany} image={data?.featuredImage} brand={data?.brand}  model={data?.model}
                        version={data?.version} year={`${data?.year}/${data?.yearModel}`} plate={data?.plate}/>
                    <NewShare idAuto={data?.id} title={`${data?.brand} - ${data?.model} - ${data?.year}/${data?.yearModel} | Sua Chave Auto`} image={data?.featuredImage}/>
                     <div className="heart">
                    <NewFavorite idAuto={data?.id} idCompany={data?.idCompany} page={"yes"}/>
                    </div>
            </div>
                <div className="text">
                    <h2>{data?.brand} <span>{data?.model}</span></h2>
                    <h3>{data?.version}</h3>
                    <h5><IoLocationOutline />{data?.cityCompany} - {data?.ufCompany}</h5>
                    {/* <h4>ID: {data?.id}</h4> */}
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <h4 className="description">{data?.description}</h4>

                    <div className="iconsBox">

                        <div className="iconUnicBox">
                            <div className="simbolBox">
                                <IoCalendarOutline />
                               
                            </div>
                                <p>{data?.year}/{data?.yearModel}</p>
                        </div>
                        

                        <div className="iconUnicBox">
                            <div className="simbolBox">
                                <TbRoad />
                          
                            </div>
                                <p>{data?.mileage} Km</p>
                        </div>
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <TbGasStation />
                           
                            </div>
                                <p>{data?.fuel}</p>
                        </div>
                        {data?.type === "Motos" ? "":
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <GiGearStickPattern />
                           
                            </div>
                                <p>{data?.march}</p>
                        </div>
                        }
                        {data?.type === "Motos" ? "":
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <GiCarDoor />
                         
                            </div>
                                <p>{data?.doors}</p>
                        </div>
                         }
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <IoColorFillOutline />
                          
                            </div>
                                <p>{data?.color}</p>
                        </div>
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            {data?.type === "Motos" ?
                                <FaMotorcycle />
                                :
                                <IoCarSportOutline />
                                }
                              
                            </div>
                                <p>{data?.bodywork}</p>
                        </div>
                        {data?.type === "Motos" ? "":
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <GiSteeringWheel />
                           
                            </div>
                                <p>{data?.direction}</p>
                        </div>
                        }
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <TiSortNumerically />
                            <p>Final/Placa</p>
                            </div>
                            <p>{data?.endOfBoard}</p>
                        </div>
                    </div>

                    <div className="informationsDocs">

                        {data?.licensingInfos.map((doc) => {
                            return (
                        <div className="item">
                            <IoCheckmarkSharp /> <p>{doc.item}</p> 
                        </div>
                            )
                        })}
                    </div>
                    <div className="characteristics">
                    {data?.characteristcs.map((doc) => {
                            return (
                        <div className="item">
                            <IoCheckmarkSharp /> <p>{doc.item}</p> 
                        </div>
                            )
                        })}

                    </div>
                    <div className="pricing">
                        <div className="PricingClient">
                        <h5>À venda por:</h5>
                        <h2>R$ {data?.value}</h2>
                        </div>
                        <div className="PricingFipe">
                        <h5>Cadastrado em {textReferência}</h5>
                        {/* <h2>R$ {data?.valueFipe}</h2> */}
                       <a href={`/consulta-placa/${data?.plate}`}><h2>Ver tabela Fipe</h2></a>
                        </div>
                       
                    </div>
                    {/* /consulta-placa/LXK-0783 */}

                    {data?.video === "" ? "" :
                    <div className="video">
                    <iframe width="100%" height="300" src={data?.video} title="YouTube video player" frameBorder="0"
                    style={{border:"0px", borderRadius: "20px"}}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    }

                        {/* <div className="map">
                            <iframe
                            width="100%" height="300"
                            frameBorder="0" style={{border:"0px", borderRadius: "20px"}} 
                            referrerpolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZllXD0czNd_oeF0u_o9LUVJ2bCd1K4p8&q=${data?.cityCompany} - ${data?.ufCompany}`}
                            allowFullScreen>
                            </iframe>
                           <h6> * Endereço aproximado</h6>
                        </div>  */}

                 <div className="infosCompanyMobile">
                     <div className="pricingInfos">
                     <h5>À venda por:</h5>
                     <h3>R$ <span>{data?.value} </span></h3>
                 </div>
                    <CompanyInfo idAuto={data?.id} idCompany={data?.idCompany} nameCompany={data?.fantasyName} companyPhone={data?.phone}/>
                </div>

             
                    </div>
                </div>

                <div className="infosCompanyAuto">
                     <div className="pricingInfos">
                     <h5>À venda por:</h5>
                     <h3>R$ <span>{data?.value} </span></h3>
                     </div>
                    <CompanyInfo idAuto={data?.id} idCompany={data?.idCompany} nameCompany={data?.fantasyName} companyPhone={data?.phone}/>
                </div>


                </div>
        </div>
        {/* <DownloadApp2 /> */}
        <Footer />

       </div>
      )
}