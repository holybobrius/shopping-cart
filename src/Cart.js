import React, { useState, useEffect } from "react"
import CartItem from "./components/CartItem"

const Cart = (props) => {
    const [items, setItems] = useState()
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        console.log()
        if(props.cart !== undefined){
            setItems(props.cart.map(el =>
                    <CartItem name={el.name} price={el.price} quantity={el.quantity} key={props.cart.indexOf(el)}/>
                ))
            for(let i = 0; i <= props.cart.length - 1; i++) {
                setTotalPrice(totalPrice + props.cart[i].price * props.cart[i].quantity);
            }
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
                <h2>Total: ${totalPrice}</h2>
            </div>
            : <h2>Cart is empty!</h2>}
        </div>
    )
}

export default Cart