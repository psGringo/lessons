import {useState} from 'react';
import React from "react";
import styles from './NavigationBar.module.css';

export const NavigationBar = () => {

    const leftButtonValue = '<';
    const rightButtonValue = '>';

    const [myName, setMyName] = useState(0);

    const handleRightClick = (e) => {
        setMyName(myName + 1);
        console.log(myName);
    }

    return (
        <div className={styles.navigation}>
            <progress className={styles.progress} value="0" max="100"></progress>

            <button className={styles.buttons__left} >
                {leftButtonValue}
            </button>
            <button className={styles.buttons__right} onClick={handleRightClick} >
                {rightButtonValue}
            </button>
        </div>
    );
}
