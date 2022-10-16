import "./mostRated.css"
import { FaStar } from "react-icons/fa";
import Profile from "../../assets/images/profile.png";

export function MostRated() {
    return (
        <div className="MostRated">
            <h2>MELHORES AVALIADOS</h2>

            <div className="rateds">
                <div className="ratedUnic">
                    <div className="image">
                        <img src={Profile} alt="" />
                    </div>
                    <h4>Nome Usuário</h4>
                    <h5>Profissão</h5>
                    <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="ratedUnic">
                    <div className="image">
                        <img src={Profile} alt="" />
                    </div>
                    <h4>Nome Usuário</h4>
                    <h5>Profissão</h5>
                    <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="ratedUnic">
                    <div className="image">
                        <img src={Profile} alt="" />
                    </div>
                    <h4>Nome Usuário</h4>
                    <h5>Profissão</h5>
                    <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="ratedUnic">
                    <div className="image">
                        <img src={Profile} alt="" />
                    </div>
                    <h4>Nome Usuário</h4>
                    <h5>Profissão</h5>
                    <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="ratedUnic">
                    <div className="image">
                        <img src={Profile} alt="" />
                    </div>
                    <h4>Nome Usuário</h4>
                    <h5>Profissão</h5>
                    <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
        </div>
    )
}