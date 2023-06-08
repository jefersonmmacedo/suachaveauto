import "./searchPropertyHomeCenter.css";
import { useState } from "react";
import {IoSearch, IoAddOutline, IoRemoveOutline, IoCarOutline, IoCarSportOutline, IoLocationOutline, IoCarSport} from "react-icons/io5";
import { useFetch } from "../../hooks/useFetch";
import { toast } from "react-toastify";
import { TbBone, TbSofa } from "react-icons/tb";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaBusAlt, FaMotorcycle, FaTruckMoving } from "react-icons/fa";
import { HiTruck } from "react-icons/hi";

export function SearchPropertyHomeCenter() {
    const [isCheckedPets, setIsCheckedPets] = useState(false);
    const [isCheckedFurnished, setIsCheckedFurnished] = useState(false);

    const [pets, setPets] = useState("não");
    const [furnished, setFurnished] = useState("não");
    const [code, setCode] = useState(false);
    const [status, setStatus] = useState("Carros");
    const [subType, setSubType] = useState("");
    const [type, setType] = useState("");
    const [bedroom, setBedroom] = useState("0");
    const [suite, setSuite] = useState("0");
    const [garage, setGarage] = useState("0");
    const [restroom, setRestroom] = useState("0");
    const [viewFilter, setViewFilter] = useState(true);
    const [filter, setFilter] = useState(false);

    const [AdressSelected, setAdressSelected] = useState("");

    const dataAdress = AdressSelected.split(" - ");
    console.log(dataAdress)

    const districtNew = dataAdress.length === 3 ? dataAdress[0] : ""
    const cityNew = dataAdress.length === 3 ? dataAdress[1] : dataAdress[0]
    const ufNew = dataAdress.length === 3 ? dataAdress[2] : dataAdress[1]


    const availability = "Disponível";
    const {data} = useFetch(`/property/all/${availability}`);

    var districtList = [];
    var cityList = [];

    data?.forEach((item) => {
        var duplicated  = districtList.findIndex(redItem => {
            return item.district === redItem.district;
        }) > -1;
    
        if(!duplicated) {
            districtList.push(item);
        }
    });
    data?.forEach((item) => {
        var duplicated  = cityList.findIndex(redItem => {
            return item.city === redItem.city;
        }) > -1;
    
        if(!duplicated) {
            cityList.push(item);
        }
    });


    if(districtList) {
        districtList.sort(function(a,b) {
            if(a.uf < b.uf ) {
                return -1
            } else {
                return true
            }
        })
        }
    if(cityList) {
        cityList.sort(function(a,b) {
            if(a.uf < b.uf ) {
                return -1
            } else {
                return true
            }
        })
        }

        function handleType(e) {
            setType(e.target.value)
            console.log(e.target.value)
        }
        function handleSubType(e) {
            setSubType(e.target.value)
            console.log(e.target.value)
        }

        function handleBedroom(e) {
            setBedroom(e.target.value)
            console.log(e.target.value)
        }
        function handleSuite(e) {
            setSuite(e.target.value)
            console.log(e.target.value)
        }
        function handleRestroom(e) {
            setRestroom(e.target.value)
            console.log(e.target.value)
        }
    
        function handleGarage(e) {
            setGarage(e.target.value)
            console.log(e.target.value)
        }

      function handleActiveCode(data, status, filter) {
        setCode(data)
        setStatus(status)
        setViewFilter(filter)
      }

      function handleSelectAddress(e) {
        setAdressSelected(e.target.value)
        console.log(e.target.value)    
      }


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
        if(status === ""){
            toast.error("Venda ou aluguel?");
            return
        }
        if(type === "" || subType === "") {
            toast.error("Selecione tipo de imóvel");
            return
        }
        if(cityNew === "" || ufNew === "") {
            toast.error("Selecione o local desejado");
            return
        }
        e.preventDefault();
       //window.open(`/imoveis/${status}?cityNew=${cityNew}&ufNew=${ufNew}&tipo=${type}&subtipo=${subType}&quartos=${bedroom}&suites=${suite}&banheiros=${restroom}&garagem=${garage}`,"_self")
       window.open(`/imoveis/${status}?uf=${ufNew}&city=${cityNew}&district=${districtNew}&tipo=${type}&subtipo=${subType}&quartos=${bedroom}&suites=${suite}&banheiros=${restroom}&garagem=${garage}&pets=${pets}&mobilha=${furnished}`,"_self")
    }


    const frase = status === "Carros" ? `Digite marca ou modelo do carro`
                : status === "Motos" ? `Digite marca ou modelo da moto`
                : status === "Utilitários" ? `Digite marca ou modelo do utilitário`
                : status === "Caminhão" ? `Digite marca ou modelo do caminhão`
                : status === "Ônibus" ? `Digite marca ou modelo do ônibus`
                : `Digite marca ou modelo do carro`

    return (
        <div className="SearchPropertyHomeCenter">
            <div className="selectButtonsHomeTop">
            <button className={status === "Carros" ? "btn" : "btn1"} onClick={() => handleActiveCode(false, "Carros", true)}> <IoCarSport /> Carros</button>
            <button className={status === "Motos" ? "btn2" : ""} onClick={() => handleActiveCode(false, "Motos", true)}> <FaMotorcycle /> Motos</button>
            <button className={status === "Utilitários" ? "btn2" : ""} onClick={() => handleActiveCode(false, "Utilitários", true)}> <HiTruck /> Utilitários </button>
            <button className={status === "Caminhão" ? "btn2" : ""} onClick={() => handleActiveCode(false, "Caminhão", true)}> <FaTruckMoving /> Caminhões </button>
            <button className={status === "Ônibus" ? "btn3" : "btn4"} onClick={() => handleActiveCode(false, "Ônibus", true)}> <FaBusAlt /> Ônibus </button>
                </div>   
  
            <div className="search">
                {code === false ?
                <>
                {/* <input type="primary" placeholder={`${status}:`} disabled /> */}
            {/* <select className="primary" value={type} onChange={handleType}>
                        <option value="">Tipo</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Rural">Rural</option>
                        <option value="Terrenos e Lotes">Terrenos e Lotes</option>
                    </select>
                    <select value={subType} onChange={handleSubType} className={subType === "" ? "" : "select"}>
                        {type === "Residencial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Casa">Casa</option>
                        <option value="Casa geminada">Casa geminada</option>
                        <option value="Sobrado">Sobrado</option>
                        <option value="Bangalô">Bangalô</option>
                        <option value="Edícula">Edícula</option>
                        <option value="Flat">Flat</option>
                        <option value="Casa de vila">Casa de vila</option>
                        <option value="Condomínio fechado">Condomínio fechado</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Apartamento duplex">Apartamento duplex</option>
                        <option value="Cobertura">Cobertura</option>
                        <option value="Cobertura duplex">Cobertura duplex</option>
                        <option value="Loft">Loft</option>
                        <option value="Kitnet">Kitnet</option>
                        <option value="Mansão">Mansão</option>
                        <option value="Stúdio">Stúdio</option>
                        </>
                        : type === "Comercial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Loja">Loja</option>
                        <option value="Conjunto comercial">Conjunto comercial</option>
                        <option value="Ponto comercial">Ponto comercial</option>
                        <option value="Sala Comercial">Sala Comercial</option>
                        <option value="Prédio">Prédio</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Stúdio">Stúdio</option>
                        </>
                        : type === "Industrial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Galpão">Galpão</option>
                        <option value="Área industrial">Área industrial</option>
                        </>
                        : type === "Rural" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Chácara">Chácara</option>
                        <option value="Fazenda">Fazenda</option>
                        <option value="Sítio">Sítio</option>
                        </>
                        : type === "Terrenos e Lotes" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Área">Área</option>
                        <option value="Terreno/Lote">Terreno/Lote</option>
                        </>
                        :  <option value="">Subtipo</option>
                        }
                    </select> */}


                    <input type="text" placeholder={frase} 
                    list="brow" value={AdressSelected} onChange={handleSelectAddress} />
                    <datalist id="brow" >
                    {districtList?.map((district) => {
                            return (
                                <>
                                <option autocomplete="off" key={district.id} value={`${district.district} - ${district.city} - ${district.uf}`}></option>
                                </>
                            )
                        })}
                    {cityList?.map((district) => {
                            return (
                                <>
                                <option autocomplete="off" key={district.id} value={`${district.city} - ${district.uf}`}></option>
                                </>
                            )
                        })}
                    </datalist>
                </>
                    :
                    <>
                    <input type="text" className="inputCode" placeholder="Digite o código" />
                    </>
                }
                    {viewFilter === true ?
                     filter ===  true ?
                     <button className="filter" onClick={handleFilter}><IoRemoveOutline/> filtros </button>
                     :
                     <button className="filter" onClick={handleFilter}><IoAddOutline/> filtros </button>
                    
                    :
                    ""}
                     {filter ===  true ? "" :
                     <button className="btnSearch" onClick={handleLinkSearchProperty}><IoSearch /></button>
                    }
                    <button className="mobile" onClick={handleLinkSearchProperty}><IoSearch /></button>
            </div>

            {filter === true ? 
            <div className="viewFilter">
                            <div className="search">
                                 <select value={bedroom} onChange={handleBedroom} className={bedroom === "" ? "" : "select"}>
                                    <option value="">Ano</option>
                                    <option value="1">1 Quarto</option>
                                    <option value="2">2 Quartos</option>
                                    <option value="3">3 Quartos</option>
                                    <option value="4">4 Quartos</option>
                                    <option value="5">5 Quartos</option>
                                    <option value="6">6 Quartos</option>
                                    <option value="7">7 Quartos</option>
                                    <option value="8">8 Quartos</option>
                                    <option value="9">9 Quartos</option>
                                    <option value="10">10 Quartos</option>
                                </select>
                                 <select value={suite} onChange={handleSuite} className={suite === "" ? "" : "select"}>
                                    <option value="">Preço</option>
                                    <option value="1">1 Suite</option>
                                    <option value="2">2 Suites</option>
                                    <option value="3">3 Suites</option>
                                    <option value="4">4 Suites</option>
                                    <option value="5">5 Suites</option>
                                    <option value="6">6 Suites</option>
                                    <option value="7">7 Suites</option>
                                    <option value="8">8 Suites</option>
                                    <option value="9">9 Suites</option>
                                    <option value="10">10 Suites</option>
                                </select>
            
                                <select value={restroom} onChange={handleRestroom} className={restroom === "" ? "" : "select"}>
                                    <option value="">Quilometragem</option>
                                    <option value="1">1 Banheiro</option>
                                    <option value="2">2 Banheiros</option>
                                    <option value="3">3 Banheiros</option>
                                    <option value="4">4 Banheiros</option>
                                    <option value="5">5 Banheiros</option>
                                    <option value="6">6 Banheiros</option>
                                    <option value="7">7 Banheiros</option>
                                    <option value="8">8 Banheiros</option>
                                    <option value="9">9 Banheiros</option>
                                    <option value="10">10 Banheiros</option>
                                </select>
            
                                <select value={garage} onChange={handleGarage} className={garage === "" ? "" : "select"}>
                                    <option value="">Combustível</option>
                                    <option value="1">1 Vaga</option>
                                    <option value="2">2 Vagas</option>
                                    <option value="3">3 Vagas</option>
                                    <option value="4">4 Vagas</option>
                                    <option value="5">5 Vagas</option>
                                    <option value="6">6 Vagas</option>
                                    <option value="7">7 Vagas</option>
                                    <option value="8">8 Vagas</option>
                                    <option value="9">9 Vagas</option>
                                    <option value="10">10 Vagas</option>
                                </select>
                                <select value={garage} onChange={handleGarage} className={garage === "" ? "" : "select"}>
                                    <option value="">Câmbio</option>
                                    <option value="1">1 Vaga</option>
                                    <option value="2">2 Vagas</option>
                                    <option value="3">3 Vagas</option>
                                    <option value="4">4 Vagas</option>
                                    <option value="5">5 Vagas</option>
                                    <option value="6">6 Vagas</option>
                                    <option value="7">7 Vagas</option>
                                    <option value="8">8 Vagas</option>
                                    <option value="9">9 Vagas</option>
                                    <option value="10">10 Vagas</option>
                                </select>
            

                                 <button className="btnSearch" onClick={handleLinkSearchProperty}><IoSearch /></button>
                        </div>
            </div>
            :
            ""}

            <div className="textLocation">
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
            </div>

            
      

        </div>
    )
}
