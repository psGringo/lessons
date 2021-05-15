import React from "react";
import cc from 'classcat';
import styles from './House.module.css';

export const House = ({
                          src,
                          alt,
                          title,
                          price,
                          location,
                          isSold
                      }) => {

    const styleTitle = cc({
        [styles.title]: true,
        [styles.isSold]: isSold
    });

    return (
        <div className={styles.house}>
            <img className={styles.image} src={src} alt = {alt}/>
            <p className={styleTitle}>{title}</p>
            <p className={styles.price}>{price}</p>
            <p className={styles.location}>{location}</p>
        </div>
    )
}


