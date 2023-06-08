﻿import "./topHeadHomeV3.css"
import { SearchPropertyHomeCenter } from "../SearchPropertyHomeCenter/SearchPropertyHomeCenter";

export function TopHeadHomeV3() {
    return (
        <div className="TopHeadHomeV3">
            <div className="blockTop">
            <div className="SearchText">
                <div className="TextTopSearch">
                <h1>Temos a <span>chave</span> do seu novo <span>auto!</span></h1>
                {/* <h4>Mais de 5000 autos disponíveis para você!</h4> */}
                <h4></h4>
                </div>

                <SearchPropertyHomeCenter />
            </div>

            </div>
        </div>
    )
}