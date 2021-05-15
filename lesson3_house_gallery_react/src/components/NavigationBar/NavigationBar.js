import React from "react";
import styles from './NavigationBar.module.css';

export const NavigationBar = () => {

    const leftButtonValue = '<';
    const rightButtonValue = '>';

    return (
        <div className={styles.navigation}>
            <progress className={styles.progress} value="0" max="100"></progress>

            <button className={styles.buttons__left}>
                {leftButtonValue}
            </button>
            <button className={styles.buttons__right}>
                {rightButtonValue}
            </button>

        </div>
    );
}
