import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export default function Currency(props) {
    const [cur, setCur] = useState([])
    const fetchUsers = async (term) => {
        const response = await fetch(`http://localhost:8000/${term}`); 
        const res = await response.json();
        setCur(res)
     }
    fetchUsers(props.match.params.id)
    return (
        <div className="currency">
            <img className="curlogo" src={cur.logo}/>        
            <h1>{cur.name} </h1><h2>- ${cur.price} USD</h2>
            <p>
                <img width="30" src="http://www.logospng.com/images/101/website-logos-101491.png"/>
                <a href={cur.website}>Currency website</a>
            </p>
            <p>{cur.description}</p>
        </div>
    )
}