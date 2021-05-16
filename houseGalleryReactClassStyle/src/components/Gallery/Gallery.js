import styles from './Gallery.module.css';
import React, {Component} from "react";
import {GalleryTitle} from "../GalleryTitle/GalleryTitle";
import {GalleryDescription} from "../GalleryDescription/GalleryDescription";
import {NavigationBar} from "../NavigationBar/NavigationBar";
import {Houses} from "../Houses/Houses";
import {CustomTextInput} from "../CustomTextInput/CustomTextInput"

export class Gallery extends Component {

    constructor(props) {
        super(props);
        this.housesRef = React.createRef();
    }


    render() {
        const {houses} = this.props;
        return (
            <div className={styles.gallery}>
                {/*<CustomTextInput />*/}
                <GalleryTitle/>
                <GalleryDescription/>
                <NavigationBar/>
                <Houses houses={houses} ref = {this.housesRef}/>
            </div>
        );
    }
}