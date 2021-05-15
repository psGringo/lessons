import styles from './Gallery.module.css';
import React from "react";
import {GalleryTitle} from "../GalleryTitle/GalleryTitle";
import {GalleryDescription} from "../GalleryDescription/GalleryDescription";
import {NavigationBar} from "../NavigationBar/NavigationBar";
import {Houses} from "../Houses/Houses";

export const Gallery = ({houses}) => {

    return (
        <div className = {styles.gallery}>
            <GalleryTitle />
            <GalleryDescription />
            <NavigationBar />
            <Houses houses = {houses} />
        </div>
    );
}