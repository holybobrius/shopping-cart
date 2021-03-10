import React, { useState } from "react";
import monsterBlack from "../images/monster-black.jpg"

const Item = (props) => {
    const itemData = {
        name: props.name,
        price: props.price,
    }
    return(
        <div className="item">
            <img src={props.img} alt="Monster Black"></img>
            <div className="item-info">
                <h3>{itemData.name}</h3>
                
            </div>
            <form onSubmit={props.onSubmit} name={props.name}>
                <p name="price">Price: ${itemData.price}</p>
                <input name="quantity" className="numbers-input" type="number" placeholder="1"></input>
                <input type="submit" className="add-button" value="+" ></input>
            </form>
        </div>
    )
}

export default Item