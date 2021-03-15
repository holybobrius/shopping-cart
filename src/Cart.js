import React, { useState, useEffect } from "react"
import CartItem from "./components/CartItem"

const Cart = (props) => {
    const [items, setItems] = useState()

    useEffect(() => {
        if(props.cart !== undefined){
            setItems(props.cart.map(el =>
                    <CartItem name={el.name} price={el.price} quantity={el.quantity}/>
                ))
        }
    }, [props.cart]
    )


    return(
        <div>
            <h1>Cart</h1>
            {props.cart !== undefined ? 
            <div className="cartContainer">
                <h2>Items in cart:</h2>
                {items}
            </div>
            : <h2>Cart is empty!</h2>}
        </div>
    )
}

export default Cart