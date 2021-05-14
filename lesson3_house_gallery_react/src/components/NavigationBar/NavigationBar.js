import React from "react";
import './NavigationBar.css';

export const NavigationBar = () => {

    const leftButtonValue = '<';
    const rightButtonValue = '>';

    return(
        <div className="navigation">
            <progress className="progress" value="0" max="100"></progress>
            <div className="buttons">
                <button className="buttons__left">
                    {leftButtonValue}
                </button>
                <button className="buttons__right">
                    {rightButtonValue}
                </button>
            </div>
        </div>
    );
}
