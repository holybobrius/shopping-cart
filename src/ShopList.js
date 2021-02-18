import React from "react"
import Navbar from "./components/Navbar"
import Item from "./components/Item"
import "./styles/catalog.css"

const ShopList = () => {
    return(
        <div id="catalog-body">
            <Navbar />
            <h1 className="catalog-h1"><span className="teal-span">C</span>atalog</h1>
            <div className="items-container">
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
                <Item />
            </div>
        </div>
    )
}

export default ShopList