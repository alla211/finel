import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import Search from "./Search";

export default function Navigation() {
    return (
        <div className="header">
            <h1 className="title"><a href="http://localhost:3000">Cryptocurrencies</a></h1>
            <nav>
                <NavLink className="navlink" activeClassName="isactive" exact to="/">Home</NavLink>
                <NavLink className="navlink" activeClassName="isactive" to="/converter">Converter</NavLink>
                <Search className="search"/>                
            </nav>
        </div>
    )
}