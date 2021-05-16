import styles from './GalleryTitle.module.css';
import React, {Component} from "react";

export class GalleryTitle extends Component {
    render() {
        return (
            <div className={styles.title}>Наши обьекты</div>
        );
    }
}