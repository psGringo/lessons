import styles from './GalleryDescription.module.css';
import React, {Component} from "react";

export class GalleryDescription extends Component {
    render() {
        return (
            <div className={styles.description}>На данной странице вы можете ознакомиться со всеми объектами
                недвижимости
                нашей компании
            </div>
        );
    }
}

