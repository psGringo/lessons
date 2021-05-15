import styles from './GalleryDescription.module.css';
import React from "react";

export const GalleryDescription = () => {
    return(
        <div className={styles.description}>На данной странице вы можете ознакомиться со всеми объектами
            недвижимости
            нашей компании
        </div>
    );
}

