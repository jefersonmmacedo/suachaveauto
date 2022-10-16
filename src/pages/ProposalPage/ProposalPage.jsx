import "./proposalPage.css";
import { IoCaretForwardOutline, IoCloseOutline } from "react-icons/io5";
import Navbar2 from "../../components/Nav/Navbar";
import Profile from "../../assets/images/profile.png";
import Anuncie from "../../assets/images/anuncie.jpg";
import { useState } from "react";
import { toast } from 'react-toastify';
import Modal from 'react-modal';

export function ProposalPage() {
    const [isOpenModal, setIsOpenModa] = useState(false);

    function handleNewProposal() {
        setIsOpenModa(true)
    }

    function handleOpenModal() {
        setIsOpenModa(true)
      }
    
      function handleCloseModal() {
        setIsOpenModa(false)
      }

    Modal.setAppElement('#root');
    return (
        <div className="ProposalPage">
            <Navbar2 />
              <div className="proposalView">
                    <div className="block1">
                    <h3><IoCaretForwardOutline />CONSTRUÇÃO DE MURO</h3>
                    <h5>Construção de muro em volta de terreno, tamanho 12x30, Construção de muro em volta de terreno, tamanho 12x30,Construção de muro em volta de terreno, tamanho 12x30,Construção de muro em volta de terreno, tamanho 12x30,Construção de muro em volta de terreno, tamanho 12x30,Construção de muro em volta de terreno, tamanho 12x30,Construção de muro em volta de terreno, tamanho 12x30,</h5>
                    <div className="professionals">
                        <p>Profissão</p>
                        <p>Profissão</p>
                    </div>
                    <p>Válida até: 31/12/2022</p>
                    </div>

                    <div className="block2">
                                <p>Status:</p>
                    <div className="status">
                                <h4>Aberto</h4>
                            </div>
                    </div>
                    <div className="block3">
                        <p>Enviado por:</p>
                        <div className="infos">
                    <div className="image">
                    <img src={Profile} alt="" />
                    </div>
                        <p>Nome Usuário</p>
                        </div>
                    <button onClick={handleNewProposal}>Enviar Orçamento</button>
                    <br />
                        <p>10 orçamentos enviados</p>
                    </div>
                </div>
                    <a className="linkProposal" href="/propostas">Voltar as propostas</a>
                    <img src={Anuncie} alt="" className="img"/>


                                {/* Modal Posts  */}
            <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModal}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal">
                <h3>Novo Orçamento</h3>
            <div className="itensModal">
                <form action="">
                    <input type="text" placeholder="Valor"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Descreva o serviço"></textarea>
                    <div className="text">
                    <p>Tempo de conclusão</p>
                    </div>
                    <div className="data">
                        <div className="dataUnic">
                        <select>
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
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        </select>
                        </div>
                        <div className="dataUnic">
                        <select>
                        <option value="Dias">Dias</option>
                        <option value="Semanas">Semanas</option>
                        <option value="Meses">Meses</option>
                        <option value="Anos">Anos</option>
                    </select>
                        </div>
                    </div>
                    <div className="data">
                        <div className="dataUnic">
                    <p>Data de Inicio</p>
                    <input type="date" name="" id="" />
                        </div>
                        <div className="dataUnic">
                        <p>Data de Termino</p>
                    <input type="date" name="" id="" />
                        </div>
                    </div>
                    <select>
                        <option value="">Trabalha fins de semana?</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                    <button>Enviar Orçamento</button>
                </form>
            </div>
            </div>
            </Modal>
            {/* FIM Modal Posts  */}
        </div>
    )
}