import styles from './Houses.module.css'
import React, {Component} from "react";
import {House} from "../House/House";


export class Houses extends Component {
    constructor(props) {
        super(props);
        this.housesRefs = [];
    }

    getHousesRefs = () => {
        return this.housesRefs;
    }


    render() {
        const {houses} = this.props;

        return (
            <div className={styles.houses}>
                {
                    houses.map(({id, src, alt, title, price, location, isSold}) => {
                            const ref = React.createRef();
                            this.housesRefs.push(ref);

                            return (<House
                                id={id}
                                key={id}
                                ref={ref}
                                src={src}
                                alt={alt}
                                title={title}
                                price={price}
                                location={location}
                                isSold={isSold}
                            />);
                        }
                    )
                }
            </div>
        )
    }
}