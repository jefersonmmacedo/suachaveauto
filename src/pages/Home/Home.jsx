import "./home.css";
import Navbar2 from "../../components/Nav/Navbar";
import Modal from 'react-modal';
import { useState } from "react";
import { SearchProperty } from "../../components/SearchProperty/SearchProperty";
import { Footer } from "../../components/Footer/Footer";
import { SliderHome } from "../../components/SliderHome/SliderHome";
import {  PropertyCarroussel } from "../../components/PropertyCarroussel/PropertyCarroussel";
import { IoCloseOutline, IoSearch } from "react-icons/io5";
import { useEffect } from "react";
import LogoImg from '../../assets/images/Logo2.png';
import propaganda from '../../assets/images/propaganda.png';
import buscaDistrito from '../../services/api-buscaDistrito';
import { toast } from 'react-toastify';
import { ToHire } from "../../components/ToHire/ToHire";
import { BrandCarroussel } from "../../components/BrandCarroussel/BrandCarroussel";
import { ModelCarroussel } from "../../components/ModelCarroussel/ModelCarroussel";
import { Fipe } from "../../components/Fipe/Fipe";
import { Finance } from "../../components/Finance/Finance";
import { NewSearchClient } from "../../components/NewSearchClient/NewSearchClient";
import { TopHeadHomeV3 } from "../../components/TopHeadHomeV3/TopHeadHomeV3";

export function Home() {
    const LocalCity = localStorage.getItem("suachaveautocity");
    const userCity = JSON.parse(LocalCity);
    const Local = localStorage.getItem("suachaveauto");
    const user = JSON.parse(Local);

    const [isOpenModal, setIsOpenModa] = useState(false);
    const [isOpenModalSearchProperty, setIsOpenModaSearchProperty] = useState(false);
    const [timer, setTimes] = useState(false);

    const [city, setCity] = useState("");
    const [districtAll, setDistrictAll] = useState([]);
    const [uf, setUf] = useState("");

    // useEffect(() => {
    //     function initialTime() {
    //         if(user !== null && user !== undefined && user !== "") {
    //             return
    //         }
    //         if(userCity !== null && userCity !== undefined && userCity !== "") {
    //             return
    //         }
    //         setTimeout(() => {
    //             setIsOpenModa(true)
    //           }, "10000")
        
    //     }
    //     initialTime()
    // }, [])

    function HandleNewClientBrowser() {
        if(uf === "" && city === "") {
            return;
        }
        const suachaveauto = {
            city: city,
            uf: uf,
          };
        const suachaveauto2 = {
            type: "company",
            city: city,
            uf: uf,
          };

        localStorage.setItem("suachaveautocity", JSON.stringify(suachaveauto));
        localStorage.setItem("suachaveauto", JSON.stringify(suachaveauto2));
    }
    function handleOpenModal(e) {
      e.preventDefault();
        setIsOpenModa(true)
      }
    
      function handleCloseModal(e) {
        e.preventDefault();
        setIsOpenModa(false);
      }


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

      function handleOpenModalSearchProperty(e) {
        e.preventDefault();
        console.log("Olá")
          setIsOpenModaSearchProperty(true)
        }
      
        function handleCloseModalSearchProperty(e) {
          e.preventDefault();
          setIsOpenModaSearchProperty(false);
        }
  



    Modal.setAppElement('#root');

    return (
        <div className="Home">
            <Navbar2 />
            <TopHeadHomeV3 />
            {/* <div className="searchView">
            <SearchProperty openModal={handleOpenModal}/>
            </div> */}
            <div className="searchViewButton">
            <button onClick={handleOpenModalSearchProperty}><IoSearch />Buscar Imóveis</button>
            </div>
              <div className="carrousselBrabd">
            <BrandCarroussel />
            </div>
            <div className="textFeature">
            <h3>Recomendados para você</h3>
            </div>
            <div className="carroussel">
            <PropertyCarroussel />
            </div>
            {/* <div className="textHome">
            <h3>Imóveis para alugar</h3>
          </div> */}

            <div className="textFeature2">
            <h3>Mais procurados</h3>
            </div>
            <div className="carroussel2">
            <ModelCarroussel />
            </div>
            {/* <div className="textHome">
            <h2>Imóveis à venda</h2>
            </div>
            <div className="carroussel">
            <PropertyCarroussel />
          </div> */}
            {/* <ExploreIconsProperties />
            <Cities /> */}
            {/* <DownloadApp /> */}

            <Finance />
            <NewSearchClient />
            <Footer />


            {/* <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModal}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal-home">
            <div className="itensModalHome">
                <img src={LogoImg} alt="" />
                <form action="">
                    <h3>Escolha seu estado e cidade</h3>
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

                    <button onClick={HandleNewClientBrowser}>Definir localização</button>
                </form>
                <div className="loginAccount">
                    <a href="/entrar">Ja possuo conta</a>
                    <a href="/cadastrar">Cadastrar</a>
                </div>
            </div>
            </div>
            </Modal>


            <Modal isOpen={isOpenModalSearchProperty} onRequestClose={handleCloseModalSearchProperty}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModalSearchProperty}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal-home-Search">
            <div className="itensModalHome-Search">
                <SearchProperty />
            </div>
            </div>
            </Modal> */}

        </div>
    )
}