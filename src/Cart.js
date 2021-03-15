import React from "react"

const Cart = (props) => {
    const handleClick = () =>{
        console.log(props.cart)
    }
    return(
        <div>
            <h1>Cart</h1>
            <button onClick={handleClick}>Cocks</button>
        </div>
    )
}

export default Cart