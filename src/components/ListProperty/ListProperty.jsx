import "./listProperty.css";
import {FaBed, FaShower, FaCar} from 'react-icons/fa';
import {IoCrop, IoHeart, IoCalendarOutline, IoLocationOutline} from 'react-icons/io5';
import ImageHouse from "../../assets/images/house.jpg";
import ImageHouse1 from "../../assets/images/house1.jpg";
import ImageHouse2 from "../../assets/images/house2.jpg";
import ImageHouse3 from "../../assets/images/house3.jpg";
import ImageHouse4 from "../../assets/images/house4.jpg";
import ImageHouse5 from "../../assets/images/house5.jpg";
import ImageHouse6 from "../../assets/images/house6.jpg";
import ImageHouse7 from "../../assets/images/house7.jpg";
import ImageHouse8 from "../../assets/images/house8.jpg";
import km from "../../assets/images/icons/km.png";  
import marcha2 from "../../assets/images/icons/marcha2.png"; 
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";

export function ListProperty() {
    return (
        <div className="ListProperty">
            <div className="itens">
            
            <PropertyUnicBlock image={ImageHouse}/>
            <PropertyUnicBlock image={ImageHouse1}/>
            <PropertyUnicBlock image={ImageHouse2}/>
            <PropertyUnicBlock image={ImageHouse3}/>
            <PropertyUnicBlock image={ImageHouse4}/>
            <PropertyUnicBlock image={ImageHouse5}/>
            <PropertyUnicBlock image={ImageHouse6}/>
            <PropertyUnicBlock image={ImageHouse7}/>
            <PropertyUnicBlock image={ImageHouse8}/>
            <PropertyUnicBlock image={ImageHouse3}/>
            <PropertyUnicBlock image={ImageHouse4}/>
            <PropertyUnicBlock image={ImageHouse5}/>
            
            </div>         
        </div>
    )
}