import { useState } from "react";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import "./filterPropertiesList.css"
import { useEffect } from "react";
import api from "../../services/api";

export function FilterPropertiesList({marca, modelo}) {
    const [filter, setFilter] = useState(false);
    const [data, setData] = useState([]);
    const [brandVehicle, setBrandVehicle] = useState(marca === null || marca === undefined ? "" : marca);
    const [modelVehicle, setModelVehicle] = useState(modelo === null || modelo === undefined ? "" : modelo);

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

        function handleSelectAddress(brand, model) {
            if(model !== undefined) {
                setBrandVehicle(brand)
                setModelVehicle(model)
            } else {
                setBrandVehicle(brand)
                setModelVehicle("")
            }    
          }
    
    function handleFiltro(e) {
        e.preventDefault();

        setFilter(!filter)
        console.log(!filter)
    }

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
    function handleLinkAll(e) {
        e.preventDefault();
        window.open(`/autos`,"_self")
  }



    function handleClearItens(e) {
        e.preventDefault();
        setSearch("")
        setBrandVehicle("")
        setModelVehicle("")
    }
    function handleClearAdress() {
        // setAdressSelected("")
        setSearch("")
        setBrandVehicle("")
            setModelVehicle("")
      }
    


    return (
        <div className="FilterPropertiesList">
  <button onClick={handleFiltro}>Filtro +</button>
        <div className={filter === true ? "searchItens" : "searchItensNone"}>
        <div className="buttons">
        <button onClick={handleFiltro}>X</button>
        </div>
        <div className="searchOptions">
            <div className="dataSearchOptions">
                   
            
             <div className="dataSelects2">
                <div className="search">
                <input type="text" placeholder="Busque por marca ou modelo" value={ brandVehicle !== "" && modelVehicle !== "" ?`${brandVehicle} - ${modelVehicle}` 
                                                            :brandVehicle !== "" ? `${brandVehicle}`
                                                            : search} onChange={e => setSearch(e.target.value)} />
                    {search === "" ? "" :
                    <button onClick={handleClearAdress} className="btnClear"><IoClose /></button>
                    }
                </div>

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
            </div>
             
             {/* <div className="dataSelects">
             <h4>Tipo:</h4>
            <select value={type} onChange={handleType} className={type === "" ? "" : "select"}>
                <option value="">Tipo</option>
                <option value="Residencial">Residencial</option>
                <option value="Comercial">Comercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Rural">Rural</option>
                <option value="Terrenos e Lotes">Terrenos e Lotes</option>
            </select>
            </div>
             
         
            
            <div className="dataSelects">
                <h4>Portas: </h4>
            <select value={doors} onChange={handleDoors} className={doors === "0" ? "" : "select"}>
                <option value="0">Portas</option>
                <option value="1">1 ou + Portas</option>
                <option value="2">2 ou + Portas</option>
                <option value="3">3 ou + Portas</option>
                <option value="4">4 ou + Portas</option>
                <option value="5">5 ou + Portas</option>
                <option value="6">6 ou + Portas</option>
                <option value="7">7 ou + Portas</option>
                <option value="8">8 ou + Portas</option>
                <option value="9">9 ou + Portas</option>
                <option value="10">10 ou + Portas</option>
            </select>
            </div>

            <div className="dataSelects">
            <h4>Suítes: </h4>
            <select value={suite} onChange={handleSuite} className={suite === "0" ? "" : "select"}>
                <option value="0">Suítes</option>
                <option value="1">1 ou + Suítes</option>
                <option value="2">2 ou + Suítes</option>
                <option value="3">3 ou + Suítes</option>
                <option value="4">4 ou + Suítes</option>
                <option value="5">5 ou + Suítes</option>
                <option value="6">6 ou + Suítes</option>
                <option value="7">7 ou + Suítes</option>
                <option value="8">8 ou + Suítes</option>
                <option value="9">9 ou + Suítes</option>
                <option value="10">10 ou + Suítes</option>
            </select>
            </div>
            
            <div className="dataSelects">
            <h4>Banheiros: </h4>
            <select value={restroom} onChange={handleRestroom} className={restroom === "0" ? "" : "select"}>
                <option value="0">Banheiros</option>
                <option value="1">1 ou + Banheiros</option>
                <option value="2">2 ou + Banheiros</option>
                <option value="3">3 ou + Banheiros</option>
                <option value="4">4 ou + Banheiros</option>
                <option value="5">5 ou + Banheiros</option>
                <option value="6">6 ou + Banheiros</option>
                <option value="7">7 ou + Banheiros</option>
                <option value="8">8 ou + Banheiros</option>
                <option value="9">9 ou + Banheiros</option>
                <option value="10">10 ou + Banheiros</option>
            </select>
            </div> */}

    
            {/* <div className="dataSelectsButtons">
             <button className={pets === "sim" ? "" : "btn"} onClick={handleNewPets}><TbBone />Aceita Pets</button>
             <button className={furnished === "sim" ? "" : "btn"} onClick={handleNewFurnished}><TbSofa />Mobilhado</button>
             </div> */}

            <div className="dataSelectsButtonsAction">
                <button  onClick={handleLinkSearchProperty}><IoSearchOutline /> Buscar</button>
                <button  onClick={handleLinkAll}><IoSearchOutline /> Todos os veículos</button>
                <button className="btn" onClick={handleClearItens}><IoClose /> Limpar</button>
        </div>
            </div>
        </div>
    </div>
        </div>
    )
}