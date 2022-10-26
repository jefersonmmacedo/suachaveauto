import "./searchProperty.css";
import { useState } from "react";
import buscaDistrito from '../../services/api-buscaDistrito';
import { toast } from 'react-toastify';
import {FaHome, FaBuilding, FaStore, FaTractor, FaCar, FaMotorcycle, FaBus, FaTruck} from "react-icons/fa";
import {IoBusiness, IoLocationOutline, IoSearch} from "react-icons/io5";
import {GiFarmTractor} from "react-icons/gi";

export function SearchProperty() {
    const LocalCity = localStorage.getItem("suachaveautocity");
    const userCity = JSON.parse(LocalCity);
    const [uf, setUf] = useState(userCity === null || userCity === undefined || userCity === ""? "" : userCity.uf);
    const [city, setCity] = useState(userCity === null || userCity === undefined || userCity === ""? "" : userCity.city);
    const [districtAll, setDistrictAll] = useState([]);
    const [professional, setProfessional] = useState("");
    const [code, setCode] = useState(false);
    const [status, setStatus] = useState("carro");


    console.log(uf)
    console.log(city)
    async function handleSearchDistrict(ufSelect) {
        console.log(ufSelect)
        try {
          const res = await buscaDistrito.get(`${ufSelect}/distritos`) 
            console.log(res.data)
            setDistrictAll(res.data)
            console.log(res.data[0].municipio.nome);
            return;
          }catch{
            console.log("error")
            toast.error("Escolha um estado e clica em buscar cidades");
        }
        return
    }

    if(districtAll) {
        districtAll.sort(function(a,b) {
            if(a.nome < b.nome ) {
                return -1
            } else {
                return true
            }
        })
        }

        
    function handleSetectCity(e) {
        setCity(e.target.value)
        console.log(e.target.value)
      }
      function handleSetectUf(e) {
        setUf(e.target.value)
        console.log(e.target.value)
        handleSearchDistrict(e.target.value)
      }
      function handleSearchProfessional(e) {
        console.log(e.target.value)
        toast.info(`Você escolheu: ${professional}, na cidade ${city} - ${uf}`)
        const suachave = {
            city: city,
            uf: uf,
          };

        localStorage.setItem("suachavecity", JSON.stringify(suachave));
      }

      function handleActiveCode(data, status) {
        setCode(data)
        setStatus(status)
      }

    return (
        <div className="SearchProperty">
            <button className="btnSearchModal"><IoSearch /> Buscar Autos</button>
            <div className="selectButtons">
            <button className={status === "carro" ? "btn" : "btn1"} onClick={() => handleActiveCode(false, "carro")}><FaCar /> Carro</button>
            <button className={status === "moto" ? "btn2" : ""} onClick={() => handleActiveCode(false, "moto")}><FaMotorcycle /> Moto</button>
            <button className={status === "caminhao" ? "btn2" : ""} onClick={() => handleActiveCode(false, "caminhao")}><FaTruck /> Caminhão</button>
            <button className={status === "onibus" ? "btn2" : ""} onClick={() => handleActiveCode(false, "onibus")}><FaBus /> Ônibus</button>
            <button className={status === "trator" ? "btn3" : "btn4"} onClick={() => handleActiveCode(false, "trator")}><FaTractor /> Trator</button>
                </div>   
            <div className="search">
                <input type="text" className="primary" placeholder="Digite Marca ou modelo" />
            {/* <select className="primary"> 
                            <option value="">Tipo</option>   
                            <option value="">Comercial</option>   
                            <option value="">Residencial</option>   
                            <option value="">Industrial</option>   
                            <option value="">Rural</option>   
                            <option value="">Lotes</option>       
                    </select> */}
                    <select> 
                            <option value="">Ano Máximo</option>   
                            <option value="">Casa</option>   
                            <option value="">Apartamento</option>   
                            <option value="">Cobertura</option>   
                            <option value="">Kitnet</option>   
                            <option value="">Condomínio</option>       
                    </select>
                    <select> 
                            <option value="">Ano Mínimo</option>   
                            <option value="">Casa</option>   
                            <option value="">Apartamento</option>   
                            <option value="">Cobertura</option>   
                            <option value="">Kitnet</option>   
                            <option value="">Condomínio</option>       
                    </select>
                    <select> 
                            <option value="">Preço Máximo</option>   
                            <option value="">Casa</option>   
                            <option value="">Apartamento</option>   
                            <option value="">Cobertura</option>   
                            <option value="">Kitnet</option>   
                            <option value="">Condomínio</option>       
                    </select>
                    <select> 
                            <option value="">Preço Mínimo</option>   
                            <option value="">Casa</option>   
                            <option value="">Apartamento</option>   
                            <option value="">Cobertura</option>   
                            <option value="">Kitnet</option>   
                            <option value="">Condomínio</option>       
                    </select>
            {/* <select value={uf} onChange={handleSetectUf}> 
                            <option value="">Escolha seu estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>     
                    </select>
                    <select value={city} onChange={handleSetectCity}> 
                    {districtAll.length === 0 ?
                    <option value={city}>{city}</option>
                    :
                    <>
                    {districtAll?.map((district) => {
                            return (
                                <option autocomplete="off" key={district.id} value={district.nome}>{district.nome}</option>
                            )
                        })}
                    </>
                    }     
                    </select> */}
                     <button onClick={handleSearchProfessional}>Buscar</button>
            </div>
            {userCity === null || userCity === undefined || userCity === "" ? 
            <div className="textLocation">
                <button>Definir cidade</button>
            </div>
             : 
             <div className="textLocation">
             <h4><IoLocationOutline /> {city} - {uf}</h4> 
             <button>Alterar</button>
         </div>
             }
            {/* <div className="icons">
                <div className="unic">
                    <FaHome />
                    Casas
                </div>
                <div className="unic">
                    <FaBuilding />
                    Apartamentos
                </div>
                <div className="unic">
                    <IoBusiness />
                    Salas Comercais
                </div>
                <div className="unic">
                    <FaStore />
                    Lojas
                </div>
            </div> */}
        </div>
    )
}
