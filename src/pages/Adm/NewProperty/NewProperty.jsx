import NavbarAdm from "../../../components/Adm/Nav/Navbar"
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar"
import "./newProperty.css"

export function NewProperty() {
    return (
        <div className="NewProperty">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Novo imóvel</h3>
                <form action="">
                    <input type="text" placeholder="Título"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Descrição"></textarea>
                    <div className="data">
                    <input type="text" placeholder="Rua"/>
                    <input type="text" placeholder="Bairro"/>
                    <input type="text" placeholder="Cidade"/>
                    <input type="text" placeholder="Estado"/>
                    </div>
                    <div className="data">
                    <select name="" id="">
                        <option value="">Tipo</option>
                        <option value="">Residencial</option>
                        <option value="">Comercial</option>
                    </select>
                    <select name="" id="">
                        <option value="">Subtipo</option>
                        <option value="">Casa</option>
                        <option value="">Apartamento</option>
                    </select>
                    </div>
                    <div className="data">
                    <select name="" id="">
                        <option value="">Status</option>
                        <option value="">Alugel</option>
                        <option value="">Venda</option>
                        <option value="">Temporada</option>
                    </select>
                    <input type="text" placeholder="Preço"/>
                    <input type="text" placeholder="Texto após preço"/>
                    </div>
                    <div className="data">
                    <select name="" id="">
                        <option value="">Quartos</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                    </select>
                    <select name="" id="">
                        <option value="">Suítes</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                    </select>
                    <select name="" id="">
                        <option value="">Banheiros</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                    </select>
                    <select name="" id="">
                        <option value="">Garagem</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                    </select>
                    </div>
                </form>
            </div>
        </div>
    )
}