import './Gallery.css';
import house1 from '../../assets/house1.jpg'
import React from "react";
import {GalleryTitle} from "../GalleryTitle/GalleryTitle";
import {GalleryDescription} from "../GalleryDescription/GalleryDescription";
import {NavigationBar} from "../NavigationBar/NavigationBar";
import {Houses} from "../Houses/Houses";

export const Gallery = () => {

    return (
        <div className="gallery">
            <GalleryTitle />
            <GalleryDescription />
            <NavigationBar />
            <Houses />



            {/*Houses*/}

                {/*/!*other houses*!/*/}
                {/*<div className="house">*/}
                {/*    <img className="house_image" src='images/house2.jpg'/>*/}
                {/*    <p className="house__title">5i large design apartment with terrace</p>*/}
                {/*    <p className="house__price">350 000€</p>*/}
                {/*    <p className="house__location">Madrid II</p>*/}
                {/*</div>*/}

                {/*<div className="house">*/}
                {/*    <img className="house_image" src='images/house3.jpg'/>*/}
                {/*    <p className="house__title">Magnificent duplex in a private villa</p>*/}
                {/*    <p className="house__price">280 000€</p>*/}
                {/*    <p className="house__location">Barcelona IV</p>*/}
                {/*</div>*/}

                {/*<div className="house" id="house4">*/}
                {/*    <img className="house_image" src='images/house4.jpg'/>*/}
                {/*    <p className="house__title">3-room apartment with a beautiful terrace</p>*/}
                {/*    <p className="house__price">380 000€</p>*/}
                {/*    <p className="house__location">Madrid II</p>*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>
    );
}