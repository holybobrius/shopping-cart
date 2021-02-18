import React from "react";
import monsterBlack from "../images/monster-black.jpg"

const Item = (props) => {
    return(
        <div className="item">
            <img src={monsterBlack}></img>
            <div className="item-info">
                <h3>Monster Black</h3>
                <p>Price: {props.price}</p>
            </div>
            <input className="numbers-input" type="number" placeholder="1"></input>
            <button className="add-button">+</button>
        </div>
    )
}

export default Item