import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function SearchResult(props) {
    const [data, setData] = useState([])
    const searchItem = async (id) => {
        const response = await fetch(`http://localhost:8000/${id}`)
        const res = await response.json();
        setData(res);
    };
    searchItem(props.match.params.id)
    return (
        <div>
            <h1 className="searchres">Search result:</h1>
            <div className="currency">
                <img className="curlogo" src={data.logo} />
                <h1>{data.name} </h1><h2>- ${data.price} USD</h2>
                <p>
                    <img width="30" src="http://www.logospng.com/images/101/website-logos-101491.png" />
                    <a href={data.website}>Currency website</a>
                </p>
                <p>{data.description}</p>
            </div>
        </div>
    )
}
