import "./searchProperty.css";
import { useState } from "react";
import buscaDistrito from '../../services/api-buscaDistrito';
import { toast } from 'react-toastify';
import {FaTractor, FaCar, FaMotorcycle, FaBus, FaTruck} from "react-icons/fa";
import {IoLocationOutline, IoSearch} from "react-icons/io5";
import Select from 'react-select'

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

      const customStyles = {
        option: (provided, state) => ({
          ...provided,
          padding: 20,
          width: 20,
        })
    }

      const Years = [
        { value:"1960", label: "1960"},
                          { value:"1961", label: "1961"},
                          { value:"1962", label: "1962"},
                          { value:"1963", label: "1963"},
                          { value:"1964", label: "1964"},
                          { value:"1965", label: "1965"},
                          { value:"1966", label: "1966"},
                          { value:"1967", label: "1967"},
                          { value:"1968", label: "1968"},
                          { value:"1969", label: "1969"},
                          { value:"1970", label: "1970"},
                          { value:"1971", label: "1971"},
                          { value:"1972", label: "1972"},
                          { value:"1973", label: "1973"},
                          { value:"1974", label: "1974"},
                          { value:"1975", label: "1975"},
                          { value:"1976", label: "1976"},
                          { value:"1977", label: "1977"},
                          { value:"1978", label: "1978"},
                          { value:"1979", label: "1979"},
                          { value:"1980", label: "1980"},
                          { value:"1981", label: "1981"},
                          { value:"1982", label: "1982"},
                          { value:"1983", label: "1983"},
                          { value:"1984", label: "1984"},
                          { value:"1985", label: "1985"},
                          { value:"1986", label: "1986"},
                          { value:"1987", label: "1987"},
                          { value:"1988", label: "1988"},
                          { value:"1989", label: "1989"},
                          { value:"1990", label: "1990"},
                          { value:"1991", label: "1991"},
                          { value:"1992", label: "1992"},
                          { value:"1993", label: "1993"},
                          { value:"1994", label: "1994"},
                          { value:"1995", label: "1995"},
                          { value:"1996", label: "1996"},
                          { value:"1997", label: "1997"},
                          { value:"1998", label: "1998"},
                          { value:"1999", label: "1999"},
                          { value:"200 ", label: "2000"},
                          { value:"2001", label: "2001"},
                          { value:"2002", label: "2002"},
                          { value:"2003", label: "2003"},
                          { value:"2004", label: "2004"},      
                          { value:"2005", label: "2005"},      
                          { value:"2006", label: "2006"},      
                          { value:"2007", label: "2007"},      
                          { value:"2008", label: "2008"},      
                          { value:"2009", label: "2009"},      
                          { value:"2010", label: "2010"},      
                          { value:"2011", label: "2011"},
                          { value:"2012", label: "2012"},
                          { value:"2013", label: "2013"},
                          { value:"2014", label: "2014"},      
                          { value:"2015", label: "2015"},      
                          { value:"2016", label: "2016"},      
                          { value:"2017", label: "2017"},      
                          { value:"2018", label: "2018"},      
                          { value:"2019", label: "2019"},      
                          { value:"2020", label: "2020"},      
                          { value:"2021", label: "2021"},      
                          { value:"2022", label: "2022"},      
                          { value:"2023", label: "2023"},
      ]

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
                    {/* <Select options={Years} styles={customStyles}/> */}
                    <select> 
                          <option value="">Ano Máximo</option>   
                          <option value="1960">1960</option>
                          <option value="1961">1961</option>
                          <option value="1962">1962</option>
                          <option value="1963">1963</option>
                          <option value="1964">1964</option>
                          <option value="1965">1965</option>
                          <option value="1966">1966</option>
                          <option value="1967">1967</option>
                          <option value="1968">1968</option>
                          <option value="1969">1969</option>
                          <option value="1970">1970</option>
                          <option value="1971">1971</option>
                          <option value="1972">1972</option>
                          <option value="1973">1973</option>
                          <option value="1974">1974</option>
                          <option value="1975">1975</option>
                          <option value="1976">1976</option>
                          <option value="1977">1977</option>
                          <option value="1978">1978</option>
                          <option value="1979">1979</option>
                          <option value="1980">1980</option>
                          <option value="1981">1981</option>
                          <option value="1982">1982</option>
                          <option value="1983">1983</option>
                          <option value="1984">1984</option>
                          <option value="1985">1985</option>
                          <option value="1986">1986</option>
                          <option value="1987">1987</option>
                          <option value="1988">1988</option>
                          <option value="1989">1989</option>
                          <option value="1990">1990</option>
                          <option value="1991">1991</option>
                          <option value="1992">1992</option>
                          <option value="1993">1993</option>
                          <option value="1994">1994</option>
                          <option value="1995">1995</option>
                          <option value="1996">1996</option>
                          <option value="997">1997</option>
                          <option value="1998">1998</option>
                          <option value="1999">1999</option>
                          <option value="200">2000</option>
                          <option value="2001">2001</option>
                          <option value="2002">2002</option>
                          <option value="2003">2003</option>
                          <option value="2004">2004</option>      
                          <option value="2005">2005</option>      
                          <option value="2006">2006</option>      
                          <option value="2007">2007</option>      
                          <option value="2008">2008</option>      
                          <option value="2009">2009</option>      
                          <option value="2010">2010</option>      
                          <option value="2011">2011</option>
                          <option value="2012">2012</option>
                          <option value="2013">2013</option>
                          <option value="2014">2014</option>      
                          <option value="2015">2015</option>      
                          <option value="2016">2016</option>      
                          <option value="2017">2017</option>      
                          <option value="2018">2018</option>      
                          <option value="2019">2019</option>      
                          <option value="2020">2020</option>      
                          <option value="2021">2021</option>      
                          <option value="2022">2022</option>      
                          <option value="2023">2023</option>      
                    </select>
                    <select> 
                            <option value="">Ano Mínimo</option>   
                            <option value="1960">1960</option>
                          <option value="1961">1961</option>
                          <option value="1962">1962</option>
                          <option value="1963">1963</option>
                          <option value="1964">1964</option>
                          <option value="1965">1965</option>
                          <option value="1966">1966</option>
                          <option value="1967">1967</option>
                          <option value="1968">1968</option>
                          <option value="1969">1969</option>
                          <option value="1970">1970</option>
                          <option value="1971">1971</option>
                          <option value="1972">1972</option>
                          <option value="1973">1973</option>
                          <option value="1974">1974</option>
                          <option value="1975">1975</option>
                          <option value="1976">1976</option>
                          <option value="1977">1977</option>
                          <option value="1978">1978</option>
                          <option value="1979">1979</option>
                          <option value="1980">1980</option>
                          <option value="1981">1981</option>
                          <option value="1982">1982</option>
                          <option value="1983">1983</option>
                          <option value="1984">1984</option>
                          <option value="1985">1985</option>
                          <option value="1986">1986</option>
                          <option value="1987">1987</option>
                          <option value="1988">1988</option>
                          <option value="1989">1989</option>
                          <option value="1990">1990</option>
                          <option value="1991">1991</option>
                          <option value="1992">1992</option>
                          <option value="1993">1993</option>
                          <option value="1994">1994</option>
                          <option value="1995">1995</option>
                          <option value="1996">1996</option>
                          <option value="997">1997</option>
                          <option value="1998">1998</option>
                          <option value="1999">1999</option>
                          <option value="200">2000</option>
                          <option value="2001">2001</option>
                          <option value="2002">2002</option>
                          <option value="2003">2003</option>
                          <option value="2004">2004</option>      
                          <option value="2005">2005</option>      
                          <option value="2006">2006</option>      
                          <option value="2007">2007</option>      
                          <option value="2008">2008</option>      
                          <option value="2009">2009</option>      
                          <option value="2010">2010</option>      
                          <option value="2011">2011</option>
                          <option value="2012">2012</option>
                          <option value="2013">2013</option>
                          <option value="2014">2014</option>      
                          <option value="2015">2015</option>      
                          <option value="2016">2016</option>      
                          <option value="2017">2017</option>      
                          <option value="2018">2018</option>      
                          <option value="2019">2019</option>      
                          <option value="2020">2020</option>      
                          <option value="2021">2021</option>      
                          <option value="2022">2022</option>      
                          <option value="2023">2023</option>     
                    </select>
                    <select> 
                            <option value="">Preço Máximo</option>   
                            <option value="1000">1.000,00</option>   
                            <option value="2">2.000,00</option>   
                            <option value="3">3.000,00</option>   
                            <option value="4">4.000,00</option>   
                            <option value="5">5.000,00</option>       
                            <option value="6">6.000,00</option>   
                            <option value="7">7.000,00</option>   
                            <option value="8">8.000,00</option>   
                            <option value="9">9.000,00</option>   
                            <option value="10">10.000,00</option>      
                            <option value="10">15.000,00</option>      
                            <option value="10">20.000,00</option>      
                            <option value="10">25.000,00</option>      
                            <option value="10">30.000,00</option>      
                            <option value="10">35.000,00</option>      
                            <option value="10">40.000,00</option>      
                            <option value="10">45.000,00</option>      
                            <option value="10">50.000,00</option>      
                            <option value="10">55.000,00</option>      
                            <option value="10">60.000,00</option>      
                            <option value="10">65.000,00</option>      
                            <option value="10">70.000,00</option>      
                            <option value="10">75.000,00</option>      
                            <option value="10">80.000,00</option>      
                            <option value="10">85.000,00</option>      
                            <option value="10">90.000,00</option>      
                            <option value="10">95.000,00</option>      
                            <option value="10">100.000,00</option>      
                            <option value="10">125.000,00</option>      
                            <option value="10">150.000,00</option>      
                            <option value="10">175.000,00</option>      
                            <option value="10">200.000,00</option>      
                            <option value="10">225.000,00</option>      
                            <option value="10">250.000,00</option>      
                            <option value="10">275.000,00</option>      
                            <option value="10">300.000,00</option>      
                            <option value="10">350.000,00</option>      
                            <option value="10">400.000,00</option>      
                            <option value="10">450.000,00</option>      
                            <option value="10">500.000,00</option>      
                            <option value="10">600.000,00</option>      
                            <option value="10">700.000,00</option>      
                            <option value="10">800.000,00</option>      
                            <option value="10">900.000,00</option>      
                            <option value="10">1.000.000,00</option>      
                    </select>
                    <select> 
                            <option value="">Preço Mínimo</option>   
                            <option value="1000">1.000,00</option>   
                            <option value="2">2.000,00</option>   
                            <option value="3">3.000,00</option>   
                            <option value="4">4.000,00</option>   
                            <option value="5">5.000,00</option>       
                            <option value="6">6.000,00</option>   
                            <option value="7">7.000,00</option>   
                            <option value="8">8.000,00</option>   
                            <option value="9">9.000,00</option>   
                            <option value="10">10.000,00</option>      
                            <option value="10">15.000,00</option>      
                            <option value="10">20.000,00</option>      
                            <option value="10">25.000,00</option>      
                            <option value="10">30.000,00</option>      
                            <option value="10">35.000,00</option>      
                            <option value="10">40.000,00</option>      
                            <option value="10">45.000,00</option>      
                            <option value="10">50.000,00</option>      
                            <option value="10">55.000,00</option>      
                            <option value="10">60.000,00</option>      
                            <option value="10">65.000,00</option>      
                            <option value="10">70.000,00</option>      
                            <option value="10">75.000,00</option>      
                            <option value="10">80.000,00</option>      
                            <option value="10">85.000,00</option>      
                            <option value="10">90.000,00</option>      
                            <option value="10">95.000,00</option>      
                            <option value="10">100.000,00</option>      
                            <option value="10">125.000,00</option>      
                            <option value="10">150.000,00</option>      
                            <option value="10">175.000,00</option>      
                            <option value="10">200.000,00</option>      
                            <option value="10">225.000,00</option>      
                            <option value="10">250.000,00</option>      
                            <option value="10">275.000,00</option>      
                            <option value="10">300.000,00</option>      
                            <option value="10">350.000,00</option>      
                            <option value="10">400.000,00</option>      
                            <option value="10">450.000,00</option>      
                            <option value="10">500.000,00</option>      
                            <option value="10">600.000,00</option>      
                            <option value="10">700.000,00</option>      
                            <option value="10">800.000,00</option>      
                            <option value="10">900.000,00</option>      
                            <option value="10">1.000.000,00</option>      
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
