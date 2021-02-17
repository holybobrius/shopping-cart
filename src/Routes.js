import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from "./App"
import ShopList from "./ShopList"
import Cart from "./Cart"

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/shop" component={ShopList}/>
                <Route exact path="/cart" component={Cart}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes