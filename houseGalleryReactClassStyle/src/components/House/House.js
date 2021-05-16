import React, {Component, useState} from "react";
import cc from 'classcat';
import styles from './House.module.css';

export class House extends Component {

    constructor(props) {
        super(props);
        this.handleImgClick = this.handleImgClick.bind(this);
    }

    handleImgClick = (e) => {
        const house = document.getElementById('1');
        if (house) house.style.marginLeft = '200px';
    }

    setMyName(myName, f) {
        this.setState({myName}, () => {
            f()
        });
    }

    render() {

        const {
            id,
            src,
            alt,
            title,
            price,
            location,
            isSold
        } = this.props;

        const styleTitle = cc({
            [styles.title]: true,
            [styles.isSold]: isSold
        });


        return (
            <div className={styles.house} id={id}>
                <img className={styles.image} src={src} alt={alt} onClick={this.handleImgClick}/>
                <p className={styleTitle}>{title}</p>
                <p className={styles.price}>{price}</p>
                <p className={styles.location}>{location}</p>
            </div>
        );

    }
}



