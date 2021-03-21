import React, { useState } from "react"
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom';
import App from "./App"
import ShopList from "./ShopList"
import Cart from "./Cart"

const Routes = () => {

    const [cartItems, setCartItems] = useState(0);
    let cart = []
    const [cartState, setCartState] = useState();
    const [count, setCount] = useState(0)

    const getCartItems = (itemsInCart) => {
        setCartItems(itemsInCart)
    }

    const addToCart = (item) => {
        cart.push(item);
        console.log("global cart: ")
        console.log(cart)
        setCartState(cart)
    }

    const changeQuantity = (el, quantity) => {
        cart[cart.indexOf(el)].quantity+= quantity
        console.log("global cart: ")
        console.log(cart)
        setCartState(cart)
    }
      

    return(
        <Router>
            <div className="navbar-div">
                <ul className="navbar">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-item-link">
                            <label>Home</label>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/shop" className="navbar-item-link">
                            <label>Catalog</label>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/cart" className="navbar-item-link">
                            <label>Cart: {cartItems}</label>
                        </Link>
                    </li>
                </ul>
            </div>
                <Switch>
                    <Route exact path="/" render={(props) => (
                        <App {...props}/>
                    )}/>
                    <Route exact path="/shop" render={(props) => (
                        <ShopList {...props} test={true} getCartItems={getCartItems} cart={cart} getCart={addToCart} changeQuantity={changeQuantity}/>
                    )}
                    />
                    <Route exact path="/cart" render={(props) => (
                        <Cart {...props}  cart={cartState} />
                    )}
                    />
                </Switch>
        </Router>
    )
}

export default Routes