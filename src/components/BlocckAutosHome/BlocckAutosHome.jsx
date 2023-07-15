import { useEffect } from "react";
import "./blocckAutosHome.css";
import { useState } from "react";
import api from "../../services/api";
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";
import { PropertyUnicBlockLoader } from "../PropertyUnicBlockLoader/PropertyUnicBlockLoader";

export function BlocckAutosHome() {
    const perPage = 12;
    const [ currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([])
    const availability = "Disponível";
    
    useEffect(() => {
      async function loadProperty() {
          await api.get(`/autos/allcars/${availability}?emphasis=false&page=${currentPage}&limit=${perPage}`).then((res) => {
              setData(res.data);
              console.log(res.data);
          }).catch((error) => {
              console.log(error)
          })
      }
  
      loadProperty()
  }, []);

  if(data.length === 0) {
    return (
        <div className="BlocckAutosHomeLoader">
        <PropertyUnicBlockLoader />
        <PropertyUnicBlockLoader />
        <PropertyUnicBlockLoader />
        <PropertyUnicBlockLoader />
        </div>
    )
  }

  const filterData = data?.slice(0, 8);

  console.log(filterData)
    return (
        <div className="BlocckAutosHome">
            {filterData?.map((unic) => {
                return (
                    <PropertyUnicBlock id={unic.id} />
                )
            })}
        </div>
    )
}

