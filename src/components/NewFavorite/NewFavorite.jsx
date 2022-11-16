import "./newFavorite.css"
import { IoChatboxEllipses, IoCloseOutline, IoHeart } from "react-icons/io5";
import { useState } from "react";
import Modal from 'react-modal';

export function NewFavorite() {
    const [isOpenModal, setIsOpenModa] = useState(false);
    function handleOpenModal(e) {
        e.preventDefault();
          setIsOpenModa(true)
        }
      
        function handleCloseModal(e) {
          e.preventDefault();
          setIsOpenModa(false);
        }
  

    Modal.setAppElement('#root');

    return (
        <>
        <div className="NewFavorite" ><IoHeart onClick={handleOpenModal}/></div>

        <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModal}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal-Favorite">
            <div className="itensModalFavorite">
                    <IoHeart />

                    <h1>Opa! <br />
                    Temos um favorito.</h1>

                    <h4>Entre em sua conta ou cadastre-se para acessar seus favoritos e acompanhar os anuncios que mais gostar.</h4>

                    <a href="/entrar">Fazer login</a>

            </div>
            </div>
            </Modal>
        </>
    )
}
