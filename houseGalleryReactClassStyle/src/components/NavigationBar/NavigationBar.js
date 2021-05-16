import {useState} from 'react';
import React, {Component} from "react";
import styles from './NavigationBar.module.css';

export class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.handleRightClick = this.handleRightClick.bind(this);
    }

    render() {
        return (
            <div className={styles.navigation}>
                <progress className={styles.progress} value="0" max="100"></progress>

                <button className={styles.buttons__left}>
                    {`<`}
                </button>

                <button className={styles.buttons__right} onClick={this.handleRightClick}>
                    {`>`}
                </button>
            </div>
        );
    }

    handleRightClick(e) {
        alert('to do');
    }
}
