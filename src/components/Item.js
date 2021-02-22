import React, { useState } from "react";
import monsterBlack from "../images/monster-black.jpg"

const Item = (props) => {
    const [quantity, setQuantity] = useState();
    return(
        <div className="item">
            <img src={props.img} alt="Monster Black"></img>
            <div className="item-info">
                <h3>{props.name}</h3>
                <p>Price: ${props.price}</p>
            </div>
            <form onSubmit={props.onSubmit} name={props.name} price={props.price}>
                <input className="numbers-input" type="number" placeholder="1"></input>
                <input type="submit" className="add-button" value="+" ></input>
            </form>
        </div>
    )
}

export default Item