﻿import "./searchPropertyListing.css";
import { useState } from "react";
import buscaDistrito from '../../services/api-buscaDistrito';
import { toast } from 'react-toastify';

export function SearchPropertyListing() {
    const LocalCity = localStorage.getItem("suachavecity");
    const userCity = JSON.parse(LocalCity);
    const [uf, setUf] = useState(userCity === null || userCity === undefined || userCity === ""? "" : userCity.uf);
    const [city, setCity] = useState(userCity === null || userCity === undefined || userCity === ""? "" : userCity.city);
    const [districtAll, setDistrictAll] = useState([]);
    const [professional, setProfessional] = useState("");

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
            toast.error("Escolha um estado e clica em buscar cidades")
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
        const suachave = {
            city: city,
            uf: uf,
          };

        localStorage.setItem("suachavecity", JSON.stringify(suachave));
      }
    return (
        <div className="SearchPropertyListing">
            <div className="selectButtonsStatus">
            <button className="btn">Aluguel</button>
            <button>Venda</button>
            <button className="btn2">Temporada</button>
                </div>   
            <div className="search">
            <select className="primary"> 
                            <option value="">Tipo</option>   
                            <option value="">Comercial</option>   
                            <option value="">Residencial</option>   
                            <option value="">Industrial</option>   
                            <option value="">Rural</option>   
                            <option value="">Lotes</option>       
                    </select>
            <select> 
                            <option value="">Escolha</option>   
                            <option value="">Casa</option>   
                            <option value="">Apartamento</option>   
                            <option value="">Cobertura</option>   
                            <option value="">Kitnet</option>   
                            <option value="">Condomínio</option>       
                    </select>
            <select> 
                            <option value="">Quartos</option>   
                            <option value="1">1</option>   
                            <option value="2">2</option>   
                            <option value="3">3</option>   
                            <option value="4">4</option>   
                            <option value="5">5</option>       
                            <option value="6">6</option>       
                            <option value="7">7</option>       
                            <option value="8">8</option>       
                            <option value="9">9</option>       
                            <option value="10">10</option>      
                    </select>
            <select> 
                            <option value="">Banheiros</option>   
                            <option value="1">1</option>   
                            <option value="2">2</option>   
                            <option value="3">3</option>   
                            <option value="4">4</option>   
                            <option value="5">5</option>       
                            <option value="6">6</option>       
                            <option value="7">7</option>       
                            <option value="8">8</option>       
                            <option value="9">9</option>       
                            <option value="10">10</option>      
                    </select>
            <select> 
                            <option value="">Garagem</option>   
                            <option value="1">1</option>   
                            <option value="2">2</option>   
                            <option value="3">3</option>   
                            <option value="4">4</option>   
                            <option value="5">5</option>       
                            <option value="6">6</option>       
                            <option value="7">7</option>       
                            <option value="8">8</option>       
                            <option value="9">9</option>       
                            <option value="10">10</option>       
                    </select>
            <select value={uf} onChange={handleSetectUf}> 
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
                    <option value="">Escolha sua cidade</option>
                    {districtAll?.map((district) => {
                            return (
                                <option autocomplete="off" key={district.id} value={district.nome}>{district.nome}</option>
                            )
                        })}
                    </>
                    }     
                    </select>
                     <button onClick={handleSearchProfessional}>Buscar</button>
            </div>
        </div>
    )
}
