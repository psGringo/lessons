import './App.css';
import React from "react";
import {Gallery} from '../Gallery/Gallery';

import house1 from '../../assets/house1.jpg'
import house2 from "../../assets/house2.jpg";
import house3 from "../../assets/house3.jpg";
import house4 from "../../assets/house4.jpg";

function App() {

    const houses = [{
        id: 1,
        src: house1,
        alt: '1image',
        title: '5i large design apartment with terrace',
        price: '150 000€',
        location: 'Madrid II',
        isSold: true
    }, {
        id: 2,
        src: house2,
        alt: '2image',
        title: '5i large design apartment with terrace',
        price: '250 000€',
        location: 'Madrid II',
        isSold: false
    }, {
        id: 3,
        src: house3,
        alt: '3image',
        title: '5i large design apartment with terrace',
        price: '350 000€',
        location: 'Madrid II',
        isSold: false
    }, {
        id: 4,
        src: house4,
        alt: '4image',
        title: '5i large design apartment with terrace',
        price: '450 000€',
        location: 'Madrid II',
        isSold: false
    }]

    return (
        <Gallery houses={houses}/>
    );
}

export default App;
