﻿import "./propertyCarroussel.css";
import {FaBed, FaShower, FaCar} from 'react-icons/fa';
import {IoHeart, IoLocationOutline, IoCalendar, IoCalendarClearOutline} from 'react-icons/io5';
import ImageHouse from "../../assets/images/house.jpg";
import ImageHouse1 from "../../assets/images/house1.jpg";
import ImageHouse2 from "../../assets/images/house2.jpg";
import ImageHouse3 from "../../assets/images/house3.jpg";
import ImageHouse4 from "../../assets/images/house4.jpg";
import ImageHouse5 from "../../assets/images/house5.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import km from "../../assets/images/icons/km.png";  
import marcha2 from "../../assets/images/icons/marcha2.png";  
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";
import { useFetch } from "../../hooks/useFetch";
import { PropertyUnicBlockLoader } from "../PropertyUnicBlockLoader/PropertyUnicBlockLoader";

export function PropertyCarroussel({type}) {

    const {data} = useFetch(`/autos/typecar/${type}`);


    if(data) {
       console.log(data)
    }
    const buttonStyle = {
        display:'none'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}></button>,
        nextArrow: <button style={{ ...buttonStyle }}></button>
    }

    const responsiveSettings = [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 610,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 250,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

    if(data?.length === 0) {
        return (
            <div>
                <Slide slidesToScroll={3} slidesToShow={3} indicators={true} {...properties} responsive={responsiveSettings}>
                            <PropertyUnicBlockLoader />
                            <PropertyUnicBlockLoader />
                            <PropertyUnicBlockLoader />
                            <PropertyUnicBlockLoader />

                </Slide>
            </div>
        )
    }
    if(!data) {
        return (
            <div>
                <Slide slidesToScroll={3} slidesToShow={3} indicators={true} {...properties} responsive={responsiveSettings}>
                            <PropertyUnicBlockLoader />
                            <PropertyUnicBlockLoader />
                            <PropertyUnicBlockLoader />
                            <PropertyUnicBlockLoader />

                </Slide>
            </div>
        )
    }

    return (
        <div>
            <Slide slidesToScroll={3} slidesToShow={3} indicators={true} {...properties} responsive={responsiveSettings}>
                {data?.map((auto) => {
                    return (
                       <PropertyUnicBlock id={auto.id}/>
                    )
                })}
            </Slide>
        </div>
    )
}