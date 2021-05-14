import house1 from "../../assets/house1.jpg";
import './Houses.css'
import React from "react";

export const Houses = ({houses}) => <div className="houses">
    <div className="house">
        <img className="house_image" src={house1}/>
        <p className="house__title">Large 4-room apartment with a beautiful terrace</p>
        <p className="house__price">320 000€</p>
        <p className="house__location">Barcelona IX</p>
    </div>
</div>