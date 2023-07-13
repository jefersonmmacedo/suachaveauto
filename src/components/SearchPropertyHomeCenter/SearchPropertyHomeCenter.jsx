import "./searchPropertyHomeCenter.css";
import { useState } from "react";
import {IoSearch, IoAddOutline, IoRemoveOutline, IoCarOutline, IoCarSportOutline, IoLocationOutline, IoCarSport, IoClose} from "react-icons/io5";
import { useFetch } from "../../hooks/useFetch";
import { toast } from "react-toastify";
import { TbBone, TbSofa } from "react-icons/tb";
import { MdElectricCar } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaBusAlt, FaMotorcycle, FaTruckMoving } from "react-icons/fa";
import { HiTruck } from "react-icons/hi";
import { useEffect } from "react";
import api from "../../services/api";

export function SearchPropertyHomeCenter() {
    const [isCheckedPets, setIsCheckedPets] = useState(false);
    const [isCheckedFurnished, setIsCheckedFurnished] = useState(false);

    const [pets, setPets] = useState("não");
    const [furnished, setFurnished] = useState("não");
    const [code, setCode] = useState(false);
    const [status, setStatus] = useState("Carros");
    const [subType, setSubType] = useState("");
    const [type, setType] = useState("");
    const [brandVehicle, setBrandVehicle] = useState("");
    const [modelVehicle, setModelVehicle] = useState("");
    const [garage, setGarage] = useState("0");
    const [restroom, setRestroom] = useState("0");
    const [viewFilter, setViewFilter] = useState(true);
    const [filter, setFilter] = useState(false);
    const [data, setData] = useState([]);

    const [search, setSearch] = useState("");
    const searchLower = search.toLowerCase();

    const availability = "Disponível";

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
                                                            || cars.model.toLowerCase().includes(searchLower))
        const searchFilterBrand = brand?.filter((cars) => cars.brand.toLowerCase().includes(searchLower)
                                                        || cars.model.toLowerCase().includes(searchLower))


      function handleActiveCode(data, status, filter) {
        setCode(data)
        setStatus(status)
        setViewFilter(filter)
      }

      function handleClearAdress() {
        // setAdressSelected("")
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
      console.log(brandVehicle);
      console.log(modelVehicle);
      function handleFilter(e) {
        e.preventDefault()
        setFilter(!filter)
      }

      function handleSelectPets(e) {
        e.preventDefault();
        setIsCheckedPets(!isCheckedPets);
        if(pets === "não") {
            setPets("sim");
        } else {
            setPets("não");
        }
        console.log(pets)
      };

      function handleSelectFurnished(e) {
        e.preventDefault();
        setIsCheckedFurnished(!isCheckedFurnished);
        if(furnished === "não") {
            setFurnished("sim");
        } else {
            setFurnished("não");
        }
        console.log(furnished)
      };
    
      function handleLinkSearchProperty(e) {
          e.preventDefault();
        if(brandVehicle === "") {
            toast.error("Sua busca não pode ser vazia!");
            return
        }

        if(brandVehicle !== "" && modelVehicle !== "" ) {
            window.open(`/autos?marca=${brandVehicle}&modelo=${modelVehicle}`,"_self")
        }
        if(brandVehicle !== "" && modelVehicle === "" ) {
            window.open(`/autos?marca=${brandVehicle}`,"_self")
        }

    }


    const frase = `Digite marca ou modelo`

    return (
        <div className="SearchPropertyHomeCenter">
 
            <div className="search">
                {code === false ?
                <>
                <input type="text" placeholder={frase} value={ brandVehicle !== "" && modelVehicle !== "" ?`${brandVehicle} - ${modelVehicle}` 
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
                                                <h6 key={autos.id} className="itemListAdress" onClick={() => handleSelectAddress(`${autos.brand} - ${autos.model}`)}>{autos.brand} - {autos.model}</h6>
                                            )
                                        })}     
                                         <h6>Marca - Modelo</h6> 
                                        {searchFilter.map((autos) => {
                                            return (
                                                <h6 key={autos.id} className="itemListAdress" onClick={() => handleSelectAddress(`${autos.brand} - ${autos.model}`)}>{autos.brand} - {autos.model}</h6>
                                            )
                                        })}      
                                    </div>
                                </div>
                                }


                     {filter ===  true ? "" :
                     <button className="btnSearch" onClick={handleLinkSearchProperty}><IoSearch /></button>
                    }
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


            {/* <div className="textLocation">
                <div className="blockInfo">
                <div className="checkDiv">
                    <input type="checkbox" value={pets} onChange={handleSelectPets} checked={isCheckedPets}/>
                    <h5><IoCarSportOutline />Okm</h5>
                </div>
                <div className="checkDiv">
                    <input type="checkbox" value={pets} onChange={handleSelectPets} checked={isCheckedPets}/>
                    <h5><IoCarOutline />Usados</h5>
                </div>
                <div className="checkDiv">
                    <input type="checkbox" value={furnished} onChange={handleSelectFurnished} checked={isCheckedFurnished}/>
                    <h5><AiOutlineDollarCircle />Aceita financimento</h5>
                </div>
                </div>
                <div className="blockInfo">
                <div className="checkDiv">
                    <h5><IoLocationOutline />Rio Bonito - RJ</h5>
                </div>
                <button>Alterar</button>
                </div>
            </div> */}

        </div>
    )
}
