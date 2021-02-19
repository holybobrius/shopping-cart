import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Item from "./components/Item"
import "./styles/catalog.css"

const ShopList = () => {
    const [cartItems, setCartItems] = useState(0);
    const itemsInCart = [];

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        const item = {
            [name]: value
        }
        itemsInCart.push(item);
        setCartItems(itemsInCart.length);
        console.log(itemsInCart);
    }

    return(
        <div id="catalog-body">
            <Navbar cartItems={cartItems}/>
            <h1 className="catalog-h1"><span className="teal-span">C</span>atalog</h1>
            <div className="items-container">
                <Item onSubmit={handleSubmit}/>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default ShopList