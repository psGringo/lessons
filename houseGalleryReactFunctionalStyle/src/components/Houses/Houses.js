import styles from './Houses.module.css'
import React from "react";
import {House} from "../House/House";

export const Houses = ({houses}) => <div className={styles.houses} id = "houses">

    {
        houses.map(({id, src, alt, title, price, location, isSold}) =>
        <House
            key = {id}
            src={src}
            alt = {alt}
            title={title}
            price={price}
            location={location}
            isSold={isSold}
        />
    )}

</div>