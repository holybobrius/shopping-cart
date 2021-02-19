import React from "react";
import monsterBlack from "../images/monster-black.jpg"

const Item = (props) => {
    return(
        <div className="item">
            <img src={monsterBlack} alt="Monster Black"></img>
            <div className="item-info">
                <h3>монстр)))</h3>
                <p>Price: {props.price}</p>
            </div>
            <form onSubmit={props.onSubmit}>
                <input className="numbers-input" type="number" placeholder="1"></input>
                <input type="submit" className="add-button" value="+" ></input>
            </form>
        </div>
    )
}

export default Item