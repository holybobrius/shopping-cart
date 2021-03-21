import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Item from "./components/Item"
import "./styles/catalog.css"

import monsterBlack from "./images/monster-black.jpg"
import monsterZero from "./images/monster-zero.png"
import monsterAssault from "./images/monster-assault.jpg"
import monsterUltra from "./images/monster-ultra.jpg"
import monsterUltraRed from "./images/monster-ultrared.png"
import monsterUnleaded from "./images/monster-unleaded.png"
import redbull from "./images/redbull.jpg"
import burnOriginal from "./images/burn-original.png"
import adrenalineOriginal from "./images/adrenaline-rush-original.png"
import reign from "./images/reign.jpg"
import tiger from "./images/tiger.jpg"
import v from "./images/v.jpg"

const ShopList = (props) => {

    const items = [
        {
            id: 0,
            name: "Monster Black",
            img: monsterBlack,
            price: "1.99"
        },
        {
            id: 1,
            name: "Monster Zero",
            img: monsterZero,
            price: "1.79"
        },
        {
            id: 2,
            name: "Monster Assault",
            img: monsterAssault,
            price: "2.29"
        },
        {
            id: 3,
            name: "Monster Ultra",
            img: monsterUltra,
            price: "1.99"
        },
        {
            id: 4,
            name: "Monster Ultra Red",
            img: monsterUltraRed,
            price: "2.49"
        },
        {
            id: 5,
            name: "Monster Unleaded",
            img: monsterUnleaded,
            price: "2.79"
        },
        {
            id: 6,
            name: "RedBull",
            img: redbull,
            price: "1.89"
        },
        {
            id: 7,
            name: "Burn Original",
            img: burnOriginal,
            price: "1.99"
        },
        {
            id: 8,
            name: "Adrenaline Rush",
            img: adrenalineOriginal,
            price: "2.09"
        },
        {
            id: 9,
            name: "Reign",
            img: reign,
            price: "1.99"
        },
        {
            id: 10,
            name: "Tiger",
            img: tiger,
            price: "1.99"
        },
        {
            id: 11,
            name: "V",
            img: v,
            price: "1.79"
        },
    ]

    const [itemsCards, setItemsCards] = useState();
    const [cartItems, setCartItems] = useState(0);


    const cart = [];

    let tempValue = 0;

    const handleSubmit = (e) => {
        tempValue = Number(tempValue + Number(e.target.quantity.value));
        e.preventDefault();
        setCartItems(tempValue);
        props.getCartItems(tempValue);

        let doesInclude = false;

        props.cart.forEach((el) => {
            if (el.name === e.target.name) {
                props.changeQuantity(el, Number(e.target.quantity.value))
                doesInclude = true;
            }
        })

        if(!doesInclude) {
            const item = {
                name: e.target.name,
                quantity: Number(e.target.quantity.value),
                price: Number(e.target.dataset.price),
            }
            console.log(e.target.parentElement.dataset.price)
            props.getCart(item);
        }

        
        console.log("cart= " + cart);
    }

    useEffect(() => {
            console.log("произошел прикол")
            setItemsCards(items.map(item => 
                    <Item name={item.name} img={item.img} price={item.price} onSubmit={handleSubmit} key={item.id} />
            ))
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )

    
    return(
        <div id="catalog-body">
            <h1 className="catalog-h1"><span className="teal-span">C</span>atalog</h1>
            <div className="items-container">
                {itemsCards}
            </div>
        </div>
    )
}

export default ShopList