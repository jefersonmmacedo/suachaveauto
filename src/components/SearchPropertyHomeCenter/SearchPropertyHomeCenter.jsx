import "./searchPropertyHomeCenter.css";
import { useState } from "react";
import {IoSearch, IoCarOutline, IoCarSportOutline, IoLocationOutline, IoCarSport, IoClose, IoCloseOutline} from "react-icons/io5";
import Modal from 'react-modal';
import { toast } from "react-toastify";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { useEffect } from "react";
import api from "../../services/api";
import buscaCep from "../../services/api-buscaCep";

export function SearchPropertyHomeCenter() {
    const Local = localStorage.getItem("suachaveauto");
    const user = JSON.parse(Local);

    const LocalCity = localStorage.getItem("suachaveauto-address");
    const userCity = JSON.parse(LocalCity);


    const [isOpenModal, setIsOpenModal] = useState(false);

    const [code, setCode] = useState(false);
    const [financing, setFinancing] = useState("");
    const [type, setType] = useState("Carros");
    const [brandVehicle, setBrandVehicle] = useState("");
    const [modelVehicle, setModelVehicle] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState(user === null && userCity === null ? "" : user === null && userCity !== null ? userCity.city : user.city);
    const [uf, setUf] = useState(user === null && userCity === null ? "" : user === null && userCity !== null ? userCity.uf : user.uf); 
    const [data, setData] = useState([]);

    const [cep, setCep] = useState("");
    const [newCity, setNewCity] = useState("");
    const [newUf, setNewUf] = useState("");

    const [search, setSearch] = useState("");
    const searchLower = search.toLowerCase();


    useEffect(() => {
        async function loadProperty() {
            await api.get(`/autos/fullData`).then((res) => {
                setData(res.data);
                console.log(res.data);
            }).catch((error) => {
                console.log(error)
            })
        }

        loadProperty()
    }, [])


    var brandModel = [];
    var brand = [];


    data?.forEach((item) => {
        var duplicated  = brand.findIndex(redItem => {
            return item.brand === redItem.brand;
        }) > -1;
    
        if(!duplicated) {
            brand.push(item);
        }
    });
    data?.forEach((item) => {
        var duplicated  = brandModel.findIndex(redItem => {
            return item.brand === redItem.brand && item.model === redItem.model;
        }) > -1;
    
        if(!duplicated) {
            brandModel.push(item);
        }
    });
    if(brand) {
        brand.sort(function(a,b) {
            if(a.brand < b.brand ) {
                return -1
            } else {
                return true
            }
        })
        }
    if(brandModel) {
        brandModel.sort(function(a,b) {
            if(a.brand < b.brand ) {
                return -1
            } else {
                return true
            }
        })
        }
   
        const searchFilter = brandModel?.filter((cars) => cars.brand.toLowerCase().includes(searchLower)
                                                            || cars.model.toLowerCase().includes(searchLower));
        const searchFilterBrand = brand?.filter((cars) => cars.brand.toLowerCase().includes(searchLower)
                                                        || cars.model.toLowerCase().includes(searchLower));

                            

      function handleClearAdress() {
        setSearch("")
        setBrandVehicle("")
        setModelVehicle("")
      }
    
    function handleSelectAddress(brand, model) {
        if(model !== undefined) {
            setBrandVehicle(brand)
            setModelVehicle(model)
        } else {
            setBrandVehicle(brand)
            setModelVehicle("")
        }  
      }

      function handleLinkSearchProperty(e) {
          e.preventDefault();
          
          if(brandVehicle === "" && modelVehicle === "" && state !== "" && city !== "" && uf !== "") {
            window.open(`/autos?condicao=${state}&cidade=${city}&uf=${uf}`,"_self")
        }
        if(brandVehicle === "" && modelVehicle === "" && state === "" && city !== "" && uf !== "") {
            window.open(`/autos?cidade=${city}&uf=${uf}`,"_self")
        }
  

        if(brandVehicle !== "" && modelVehicle !== "" && state !== "" && city === "" && uf === "") {
            window.open(`/autos?marca=${brandVehicle}&modelo=${modelVehicle}&condicao=${state}`,"_self")
        }
        if(brandVehicle !== "" && modelVehicle !== "" && state !== "" && city !== "" && uf !== "") {
            window.open(`/autos?marca=${brandVehicle}&modelo=${modelVehicle}&condicao=${state}&cidade=${city}&uf=${uf}`,"_self")
        }
        if(brandVehicle !== "" && modelVehicle !== "" && state !== "" && city !== "" && uf === "") {
            window.open(`/autos?marca=${brandVehicle}&modelo=${modelVehicle}&condicao=${state}&cidade=${city}`,"_self")
        }


        if(brandVehicle !== "" && modelVehicle !== "" && state === "" && city === "" && uf === "") {
            window.open(`/autos?marca=${brandVehicle}&modelo=${modelVehicle}`,"_self")
        }
        if(brandVehicle !== "" && modelVehicle !== "" && state === "" && city !== "" && uf !== "") {
            window.open(`/autos?marca=${brandVehicle}&modelo=${modelVehicle}&cidade=${city}&uf=${uf}`,"_self")
        }
        if(brandVehicle !== "" && modelVehicle !== "" && state === "" && city !== "" && uf === "") {
            window.open(`/autos?marca=${brandVehicle}&modelo=${modelVehicle}&cidade=${city}`,"_self")
        }



        if(brandVehicle !== "" && modelVehicle === "" && state !== "" && city === "" && uf === "") {
            window.open(`/autos?marca=${brandVehicle}&condicao=${state}`,"_self")
        }
        if(brandVehicle !== "" && modelVehicle === "" && state !== "" && city !== "" && uf !== "") {
            window.open(`/autos?marca=${brandVehicle}&condicao=${state}&cidade=${city}&uf=${uf}`,"_self")
        }
        if(brandVehicle !== "" && modelVehicle === "" && state !== "" && city !== "" && uf === "") {
            window.open(`/autos?marca=${brandVehicle}&condicao=${state}&cidade=${city}`,"_self")
        }



        if(brandVehicle !== "" && modelVehicle === "" && state === "" && city === "" && uf === "") {
            window.open(`/autos?marca=${brandVehicle}`,"_self")
        }
        if(brandVehicle !== "" && modelVehicle === "" && state === "" && city !== "" && uf !== "") {
            window.open(`/autos?marca=${brandVehicle}&cidade=${city}&uf=${uf}`,"_self")
        }
        if(brandVehicle !== "" && modelVehicle === "" && state === "" && city !== "" && uf === "") {
            window.open(`/autos?marca=${brandVehicle}&cidade=${city}`,"_self")
        }

    }

    function handleStatusAuto(data) {
        setState(data)
    }
    function handleFinancingAuto(data) {
        if(financing === "") {
            setFinancing(data)
        } else {
            setFinancing("")
        }
    }

    function handleCloseModal(e) {
        e.preventDefault();
        setIsOpenModal(false);
      }

      function handleOpenModal(e) {
        e.preventDefault();
          setIsOpenModal(true)
        }

        async function removeCity() {
            localStorage.removeItem("suachaveauto-address");
            window.location.reload(false);
        }

       async function handleCep() {
            await buscaCep.get(`/${cep}/json/`).then((res) => {
                console.log(res.data);
                setNewCity(res.data.localidade);
                setNewUf(res.data.uf);
            }).catch((err) => {
                console.log(err)
            });
        }

        function handleNewCity(e) {
            e.preventDefault();
            const data = {
                city: newCity,
                uf: newUf
            }

            localStorage.setItem("suachaveauto-address", JSON.stringify(data));

            window.open("/", "_self")
        }




    Modal.setAppElement('#root');

    return (
        <div className="SearchPropertyHomeCenter">
 
            <div className="search">
                {code === false ?
                <>
                <input type="text" placeholder="Digite marca ou modelo" value={ brandVehicle !== "" && modelVehicle !== "" ?`${brandVehicle} - ${modelVehicle}` 
                                                            :brandVehicle !== "" ? `${brandVehicle}`
                                                            : search} onChange={e => setSearch(e.target.value)} />
                    {search === "" ? "" :
                    <button onClick={handleClearAdress} className="btnClear"><IoClose /></button>
                    }


                </>
                    :
                    <>
                    <input type="text" className="inputCode" placeholder="Digite o código" />
                    </>
                }

                {search === "" || searchFilter.length === 0  ? "" :
                                <div className="search3">
                                    <div className="listAdress">
                                        <h6>Marca</h6>
                                        {searchFilterBrand.map((autos) => {
                                            return (
                                                <h6 key={autos.id} className="itemListAdress" onClick={() => handleSelectAddress(autos.brand)}>{autos.brand}</h6>
                                            )
                                        })}     
                                         <h6>Marca - Modelo</h6> 
                                        {searchFilter.map((autos) => {
                                            return (
                                                <h6 key={autos.id} className="itemListAdress" onClick={() => handleSelectAddress(autos.brand, autos.model)}>{autos.brand} - {autos.model}</h6>
                                            )
                                        })}      
                                    </div>
                                </div>
                                }


                 
                     <button className="btnSearch" onClick={handleLinkSearchProperty}><IoSearch /></button>
                  
                    <button className="mobile" onClick={handleLinkSearchProperty}><IoSearch /></button>
            </div>

            {search === "" || searchFilter.length === 0  ? "" :
                                <div className="search2">
                                     <div className="listAdress">
                                        <h6>Marca</h6>
                                        {searchFilterBrand.map((autos) => {
                                            return (
                                                <h6 key={autos.id} className="itemListAdress" onClick={() => handleSelectAddress(autos.brand)}>{autos.brand}</h6>
                                            )
                                        })}     
                                         <h6>Marca - Modelo</h6> 
                                        {searchFilter.map((autos) => {
                                            return (
                                                <h6 key={autos.id} className="itemListAdress" onClick={() => handleSelectAddress(autos.brand, autos.model)}>{autos.brand} - {autos.model}</h6>
                                            )
                                        })}      
                                    </div>
                                </div>
                                }


            <div className="textLocation">
                <div className="blockInfo">
                <div className="checkDiv">
                    <button className={state === "" ? "ButtonSelect" : "ButtonState"} onClick={() => handleStatusAuto("")}></button>
                    <h5><IoCarSportOutline />Todos</h5>
                </div>
                <div className="checkDiv">
                    <button className={state === "O km" ? "ButtonSelect" : "ButtonState"} onClick={() => handleStatusAuto("O km")}></button>
                    <h5><IoCarSportOutline />O km</h5>
                </div>
                <div className="checkDiv">
                    <button className={state === "Seminovo" ? "ButtonSelect" : "ButtonState"} onClick={() => handleStatusAuto("Seminovo")}></button>
                    <h5><IoCarOutline />Seminovo</h5>
                </div>
                <div className="checkDiv">
                    <button className={state === "Usado" ? "ButtonSelect" : "ButtonState"} onClick={() => handleStatusAuto("Usado")}></button>
                    <h5><IoCarOutline />Usados</h5>
                </div>
                </div>
                {/* <div className="blockInfo">
                <div className="checkDiv">
                <button className={financing === "Aceita financimento" ? "ButtonSelect" : "ButtonState"} onClick={() => handleFinancingAuto("Aceita financimento")}></button>
                    <h5><AiOutlineDollarCircle />Aceita financimento</h5>
                </div>
                </div> */}
                <div className="blockInfo">
                <div className="checkDiv">
                    {city === "" && uf === "" ? "" :
                    <h5><IoLocationOutline />{city} - {uf}</h5>
                    }
                </div>
                {city === "" && uf === "" ?
                   ""
                    :
                    <button onClick={removeCity}>X</button>
                    }
                {city === "" && uf === "" ?
                    <button onClick={handleOpenModal}>Escolha sua cidade</button>
                    :
                    <button onClick={handleOpenModal}>Alterar</button>
                    }
                </div>
            </div>



            <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModal}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal-City">
            <div className="itensModal-City">
                     
                    <h3>Digite o CEP para buscar a cidade!</h3>

                  <div className="cep">
                    <input type="text" value={cep} onChange={e => setCep(e.target.value)}/>
                    <button onClick={handleCep}>Buscar</button>
                  </div>
                  <div className="address">
                  <input type="text" value={newCity} onChange={e => setNewCity(e.target.value)}/>
                  <input type="text" value={newUf} onChange={e => setNewUf(e.target.value)}/>
                  </div>


                    <div className="buttons">
                    <button className="button2" onClick={handleNewCity}>Alterar </button>
                    <button className="button1" onClick={handleCloseModal}>Cancelar</button>
                </div>

            </div>
            </div>
            </Modal>

        </div>
    )
}
