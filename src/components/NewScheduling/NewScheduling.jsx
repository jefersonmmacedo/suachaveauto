import "./newScheduling.css"
import { IoCalendar, IoCloseOutline, IoLocationOutline, IoBusinessOutline } from "react-icons/io5";
import Modal from 'react-modal';
import { useState } from "react";
import ImageHouse1 from "../../assets/images/house.jpg";

export function NewScheduling() {
    const [isOpenModal, setIsOpenModa] = useState(false);
    const [isOpenModalLogin, setIsOpenModaLogin] = useState(false);

    function handleOpenModal(e) {
      e.preventDefault();
        setIsOpenModa(true)
      }
    
      function handleCloseModal(e) {
        e.preventDefault();
        setIsOpenModa(false);
      }
    function handleOpenModalLogin(e) {
      e.preventDefault();
        setIsOpenModaLogin(true)
      }
    
      function handleCloseModalLogin(e) {
        e.preventDefault();
        setIsOpenModaLogin(false);
      }

    Modal.setAppElement('#root');
    return (
        <>
        <button className="buttonScheduling" onClick={handleOpenModalLogin}><IoCalendar/> Agendar visita</button>

        <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModal}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal">
            <div className="itensModal">
                <div className="dataProperty">
                    <div className="image">
                    <img src={ImageHouse1} alt="" />
                    </div>
                    <div className="textProperty">
                    <h3>Apartamento luxuoso</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <div className="pricing">
                        <h6>Aluguel</h6>
                        <h3>R$ 2.000,00 / Mês</h3>
                    </div>
                    </div>
                </div>
                <form action="">
                    <div className="text">
                        <p>Mês</p>
                    </div>
                <select>
                    <option>Escolha o mês</option>
                    <option value="01">Janeiro</option>
                    <option value="02">Fevereiro</option>
                    <option value="03">Março</option>
                    <option value="04">Abril</option>
                    <option value="05">Maio</option>
                    <option value="06">Junho</option>
                    <option value="07">Julho</option>
                    <option value="08">Agosto</option>
                    <option value="09">Setembro</option>
                    <option value="10">Outubro</option>
                    <option value="11">Novembro</option>
                    <option value="12">Dezembro</option>
                </select>
                <div className="text">
                        <p>Dia</p>
                    </div>
                    <div className="buttonsDays">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                            <button>10</button>
                            <button>11</button>
                            <button>12</button>
                            <button>13</button>
                            <button>14</button>
                            <button>15</button>
                            <button>16</button>
                            <button>17</button>
                            <button>18</button>
                            <button>19</button>
                            <button>20</button>
                            <button>21</button>
                            <button>22</button>
                            <button>23</button>
                            <button>24</button>
                            <button>25</button>
                            <button>26</button>
                            <button>27</button>
                            <button>28</button>
                            <button>29</button>
                            <button>30</button>
                            <button>31</button>
                    </div>
                    <div className="text">
                        <p>Ano</p>
                    </div>
                <select>
                    <option>Escolha o ano</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
                <div className="data">
                    <div className="infosData">
                    <div className="text">
                        <p>Turno</p>
                    </div>
                    <select>
                    <option value="Escolha">Escolha</option>
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                </select>
                    </div>
                    <div className="infosData">
                    <div className="text">
                        <p>Escolha um horário</p>
                    </div>
                    <select>
                    <option value="Escolha">Escolha</option>
                    <option value="08h - 09h">08h - 09h</option>
                    <option value="09h - 10h">09h - 10h</option>
                    <option value="10h - 11h">10h - 11h</option>
                    <option value="11h - 12h">11h - 12h</option>
                    <option value="13h - 14h">13h - 14h</option>
                    <option value="14h - 15h">14h - 15h</option>
                    <option value="15h - 16h">15h - 16h</option>
                    <option value="16h - 17h">16h - 17h</option>
                </select>
                    </div>

                </div>
                <div className="data">
                    <div className="infosData">
                    <div className="text">
                        <p>Quantidade de pessoas</p>
                    </div>
                    <select>
                    <option value="Escolha">Escolha</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                    </div>
                    <div className="infosData">
                    <div className="text">
                        <p>Possúi carro?</p>
                    </div>
                    <select>
                    <option value="Escolha">Escolha</option>
                    <option value="Não">Não</option>
                    <option value="Sim">Sim</option>
                </select>
                    </div>

                </div>

                <div className="text">
                        <p>Deseja ver imóveis similares que a imobiliária possua?</p>
                    </div>
                <select>
                    <option>Escolha</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
                <div className="text">
                        <p>Endereço de encontro</p>
                    </div>
                <div className="address">
                    <p><IoBusinessOutline />Imobiliária Sua Chave</p>
                    <p><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</p>
                </div>
                <button className="btnSubmit">Enviar solicitação de agendamento</button>
                </form>
            </div>
            </div>
            </Modal>

            
        <Modal isOpen={isOpenModalLogin} onRequestClose={handleCloseModalLogin}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModalLogin}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal-Favorite">
            <div className="itensModalFavorite">
                    <IoCalendar />

                    <h1>Legal! <br />
                    Venha nos visitar.</h1>

                    <h4>Entre em sua conta ou cadastre-se para para poder agendar visitas, conhecer os anúncios e ver cada detalhe.</h4>

                    <a href="/entrar">Fazer login</a>

            </div>
            </div>
            </Modal>
        </>
    )
}
