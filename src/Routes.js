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
import Navbar from "./components/Navbar"

const Routes = () => {

    const [cartItems, setCartItems] = useState(0);
    const [cart, setCart] = useState();

    const getCartItems = (itemsInCart) => {
        setCartItems(itemsInCart)
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
                        <ShopList {...props} test={true} getCartItems={getCartItems} />
                    )}
                    />
                    <Route exact path="/cart" render={(props) => (
                        <Cart {...props} getCart={getCart} cart={cart} />
                    )}
                    />
                </Switch>
        </Router>
    )
}

export default Routes