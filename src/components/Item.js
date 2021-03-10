import React, { useState } from "react";
import monsterBlack from "../images/monster-black.jpg"

const Item = (props) => {
    const itemData = {
        name: props.name,
        price: props.price,
    }
    return(
        <div className="item" data-price={props.price}>
            <img src={props.img} alt="Monster Black"></img>
            <div className="item-info">
                <h3>{itemData.name}</h3>
                
            </div>
            <form onSubmit={props.onSubmit} name={props.name} data-price={props.price}>
                <p name="price">Price: ${itemData.price}</p>
                <input name="quantity" className="numbers-input" type="number" placeholder="1"></input>
                <input type="submit" className="add-button" value="+" ></input>
            </form>
        </div>
    )
}

export default Item