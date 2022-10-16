import "./budgetNew.css";
import Navbar2 from "../../components/Nav/Navbar";

export function BudgetNew() {
    return (
        <div className="BudgetNew">
                <Navbar2 />
                <h2>Novo Orçamento</h2>

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
    )
}