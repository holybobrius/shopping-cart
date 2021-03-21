import React from "react"

const CartItem = (props) => {
    return(
        <p>{props.name} ${props.price} x{props.quantity}</p>
    )
}

export default CartItem