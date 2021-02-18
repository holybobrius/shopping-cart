import React from "react"

const Navbar = () => {
    return (
        <div className="navbar-div">
            <ul className="navbar">
                <li className="navbar-item">
                    <a className="navbar-item-link" href="/">
                        <label>Home</label>
                    </a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-item-link" href="/shop">
                        <label>Catalog</label>
                    </a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-item-link" href="/cart">
                        <label>Cart</label>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar