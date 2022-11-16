import "./properties.css";
import Navbar2 from "../../components/Nav/Navbar";
import { ListProperty } from "../../components/ListProperty/ListProperty";
import { SearchPropertyListing } from "../../components/SearchPropertyListing/SearchPropertyListing";
import { Footer } from "../../components/Footer/Footer";
import { SearchProperty } from "../../components/SearchProperty/SearchProperty";
import { IoCloseOutline, IoSearch } from "react-icons/io5";
import { FiArrowUpCircle } from "react-icons/fi";
import { useState } from "react";
import Modal from 'react-modal';

export function Properties(){
    const [isOpenModalSearch, setIsOpenModaSearch] = useState(false);
    function handleTop(e) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    function handleOpenModalSearch(e) {
        e.preventDefault();
          setIsOpenModaSearch(true)
        }
      
        function handleCloseModalSearch(e) {
          e.preventDefault();
          setIsOpenModaSearch(false);
        }

        Modal.setAppElement('#root');
    

    return (
        <div className="Properties">
        <Navbar2 />
        <div className="listPage">
            <div className="SearchView">
            <SearchPropertyListing />
            </div>
            <div className="ButtomView">
            <button onClick={handleOpenModalSearch}><IoSearch/>Buscar Imóveis</button>
            </div>
            <ListProperty />
            <button className="topScroll" onClick={handleTop}><FiArrowUpCircle /></button>
        </div>
        <Footer />

        <Modal isOpen={isOpenModalSearch} onRequestClose={handleCloseModalSearch}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModalSearch}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal-home-Search">
            <div className="itensModalHome-Search">
                <SearchProperty />
            </div>
            </div>
            </Modal>
        </div>
    )
}
