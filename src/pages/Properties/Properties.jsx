import "./properties.css";
import Navbar2 from "../../components/Nav/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { FiArrowUpCircle } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import notFoundImage from "../../assets/images/svg/404-2.svg";
import loader from "../../assets/images/gif/loader.gif";
import { PropertyUnicBlockLoader } from "../../components/PropertyUnicBlockLoader/PropertyUnicBlockLoader";
import { useFetch } from "../../hooks/useFetch";
import { PropertyUnicBlock } from "../../components/PropertyUnicBlock/PropertyUnicBlock";
import { FilterPropertiesList } from "../../components/FilterPropertiesList/FilterPropertiesList";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { DownloadApp2 } from "../../components/DownloadApp2/DownloadApp2";


export function Properties(){
    const query = useQuery();

    const availability = "Disponível";
    const brand = query.get("marca") === null ? "" : query.get("marca")
    const model = query.get("modelo") === null ? "" : query.get("modelo")
    const city = query.get("cidade") === null ? "" : query.get("cidade")
    const uf = query.get("uf") === null ? "" : query.get("uf")
    const state = query.get("condicao") === null ? "" : query.get("condicao")
    const financing = query.get("financiamento") === null ? "" : query.get("financiamento")

    console.log(brand);
    console.log(model);

    const [propertyNotFound, setPropertyNotFound] = useState(false);


    const [properties, setProperties] = useState([]);
    const [enphasisProperties, setEnphasisProperties] = useState([]);
    const [ currentPage, setCurrentPage] = useState(0);
    const perPage = 12;
    const perPageEmphasis = 150;


    // useEffect(() => {
    //     async function loadproperties() {
    //         await api.get(
    //          brand !== "" && model !== "" && state !== "" && city !== "" && uf !== ""?
    //          `/autos/allBrandModelcarsStateAdress/${availability}?emphasis=true&page=${currentPage}&limit=${perPage}&brand=${brand}&model=${dataModel[0]}`
    //          : brand !== "" && model !== "" && state !== "" && city === "" && uf === ""?
    //          `/autos/allBrandModelcarsState/${availability}?emphasis=true&page=${currentPage}&limit=${perPage}&brand=${brand}&model=${dataModel[0]}`
    //          : brand !== "" && model !== "" && state === "" && city !== "" && uf !== ""?
    //          `/autos/allBrandModelcarsAdress/${availability}?emphasis=true&page=${currentPage}&limit=${perPage}&brand=${brand}&model=${dataModel[0]}`
    //          : brand !== "" && model !== "" && state === "" && city === "" && uf === ""?
    //          `/autos/allBrandModelcars/${availability}?emphasis=true&page=${currentPage}&limit=${perPage}&brand=${brand}&model=${dataModel[0]}`

    //          : brand !== "" && model === "" && state !== "" && city !== "" && uf !== "" ?
    //          `/autos/allBrandcarsStateAdress/${availability}?emphasis=true&page=${currentPage}&limit=${perPage}&brand=${brand}`
    //          : brand !== "" && model === "" && state !== "" && city === "" && uf === "" ?
    //          `/autos/allBrandcarsState/${availability}?emphasis=true&page=${currentPage}&limit=${perPage}&brand=${brand}`
    //          : brand !== "" && model === "" && state === "" && city !== "" && uf !== "" ?
    //          `/autos/allBrandcarsAdress/${availability}?emphasis=true&page=${currentPage}&limit=${perPage}&brand=${brand}`
    //          : brand !== "" && model === "" && state === "" && city === "" && uf === "" ?
    //          `/autos/allBrandcars/${availability}?emphasis=true&page=${currentPage}&limit=${perPage}&brand=${brand}`
    //          : brand === "" && model === "" && state === "" && city === "" && uf === "" ?
    //          `/autos/allcars/${availability}?emphasis=true&page=${currentPage}&limit=${perPage}`
    //             :"").then((res) => {
    //             setEnphasisProperties(res.data)
    //         }).catch((error) => {
    //             console.error(error);
    //         });
    //     }

    //     loadproperties()
    // },[])

    const dataModel = model.split(" ");

    const {data} = useFetch(
        brand === "" && model === "" && state !== "" && city !== "" && uf !== ""?
        `/autos/allStateAddress/${availability}?emphasis=false&page=${currentPage}&limit=${perPage}&state=${state}&city=${city}&uf=${uf}`
        : brand === "" && model === "" && state === "" && city !== "" && uf !== ""?
        `/autos/allAddress/${availability}?emphasis=false&page=${currentPage}&limit=${perPage}&city=${city}&uf=${uf}`
        : brand !== "" && model !== "" && state !== "" && city !== "" && uf !== ""?
        `/autos/allBrandModelcarsStateAdress/${availability}?emphasis=false&page=${currentPage}&limit=${perPage}&brand=${brand}&model=${dataModel[0]}&state=${state}&city=${city}&uf=${uf}`
        : brand !== "" && model !== "" && state !== "" && city === "" && uf === ""?
        `/autos/allBrandModelcarsState/${availability}?emphasis=false&page=${currentPage}&limit=${perPage}&brand=${brand}&model=${dataModel[0]}&state=${state}`
        : brand !== "" && model !== "" && state === "" && city !== "" && uf !== ""?
        `/autos/allBrandModelcarsAdress/${availability}?emphasis=false&page=${currentPage}&limit=${perPage}&brand=${brand}&model=${dataModel[0]}&city=${city}&uf=${uf}`
        : brand !== "" && model !== "" && state === "" && city === "" && uf === ""?
        `/autos/allBrandModelcars/${availability}?emphasis=false&page=${currentPage}&limit=${perPage}&brand=${brand}&model=${dataModel[0]}`

        : brand !== "" && model === "" && state !== "" && city !== "" && uf !== "" ?
        `/autos/allBrandcarsStateAdress/${availability}?emphasis=false&page=${currentPage}&limit=${perPage}&brand=${brand}&state=${state}&city=${city}&uf=${uf}`
        : brand !== "" && model === "" && state !== "" && city === "" && uf === "" ?
        `/autos/allBrandcarsState/${availability}?emphasis=false&page=${currentPage}&limit=${perPage}&brand=${brand}&state=${state}`
        : brand !== "" && model === "" && state === "" && city !== "" && uf !== "" ?
        `/autos/allBrandcarsAdress/${availability}?emphasis=false&page=${currentPage}&limit=${perPage}&brand=${brand}&city=${city}&uf=${uf}`
        : brand !== "" && model === "" && state === "" && city === "" && uf === "" ?
        `/autos/allBrandcars/${availability}?emphasis=false&page=${currentPage}&limit=${perPage}&brand=${brand}`
        : brand === "" && model === "" && state === "" && city === "" && uf === "" ?
        `/autos/allcars/${availability}?emphasis=false&page=${currentPage}&limit=${perPage}`
        :"");



        
        const filterCars = data?.filter((car) => car.model.includes(model));
        console.log(filterCars)


    if(data) {
        console.log(data)
    }

    setTimeout(() => {
        if(data?.length === 0) {
            console.log("Nada aqui!")
            setPropertyNotFound(true)
        }
    }, "3000")


        useEffect(() => {
            if(data) {
                 setProperties(oldProperties => [...oldProperties, ...data])
            }
      }, [data]);
  
    
      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
            console.log('Sentinela appears!', currentPage + 1)
            setCurrentPage((currentValue) => currentValue + 1);
          }
        })
        intersectionObserver.observe(document.querySelector('#sentinela'));
        return () => intersectionObserver.disconnect();
      }, []);
  
      if(!properties) {
        return (
            <div className="loader">
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            </div>
        )
    }

    function handleTop(e) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    function handleRedirectAutos(e) {
        window.open("/autos", "_self")
    }



    return (
        <div className="Properties">
        <Navbar2 />
        <div className="listPage">
        {/* <DownloadApp2 /> */}
        <div className="ListProperty">
        <div className="topList">
        <div className="textItens">
            {
            <h3>Anúncios <b>{brand}{model === "" ? "" : ` - ${model}`}{city === "" ? "" : `, ${city}`} {uf === "" ? "" : `- ${uf}`} </b>  disponíveis</h3>
            }
            </div>
        <FilterPropertiesList marca={brand} modelo={model} />
        {/* <FilterPropertiesList status={status} typeProperty={type} subTypeProperty={subType} district={district} city={city} uf={uf} quarto={bedroom} banheiro={restroom} suítes={suite} garagem={garage} petsProperty={pets} furnishedProperty={furnished}/> */}
        
        </div>

        {properties?.length > 0 ?
         <div className="itens">
            {enphasisProperties?.map((property) => {
                    return (
                        <PropertyUnicBlock id={property.id} key={property.id} style="Emphasis"/>
                    )
                })}
            {properties?.map((property) => {
                    return (
                        <PropertyUnicBlock id={property.id} key={property.id}/>
                    )
                })}

           
                          
            </div> 
            :
                <div className="MainAbout">
                    {propertyNotFound === false ? "" :
                    <>
                    <img src={notFoundImage} alt="" />
                    <h3>Nenhum auto localizado</h3>
                    </>
                    }
                </div>
        }



                    {data?.length < 12 || data?.length === 0 ? "":
                <div className="sentinela" id="sentinela"> 
                         <div className="itens">          
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                        </div>  
                        <img src={loader} alt="Gif LOader more posts" width={20}/>
                </div>   
                }

              
        </div>
            <button className="topScroll" onClick={handleTop}><FiArrowUpCircle /></button>
        </div>
        <Footer />
        </div>
    )
}




