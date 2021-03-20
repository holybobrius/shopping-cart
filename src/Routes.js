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
    const [cart, setCart] = useState();

    const getCartItems = (itemsInCart) => {
        setCartItems(itemsInCart)
    }


    const setCurrentCart = (currentCart) => {
        setCart(currentCart)
    }
 
    const getCart = (cart) => {
        setCart(cart);
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
                    <Route exact path="/" component={App}/>
                    <Route exact path="/shop" render={(props) => (
                        <ShopList {...props} test={true} setCurrentCart={setCurrentCart} getCartItems={getCartItems} getCart={getCart}/>
                    )}
                    />
                    <Route exact path="/cart" render={(props) => (
                        <Cart {...props}  cart={cart} />
                    )}
                    />
                </Switch>
        </Router>
    )
}

export default Routes