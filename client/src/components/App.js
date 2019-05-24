import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Loader from "./Loader"

export default function App() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            setIsLoading(true);
            const fetchUsers = async () => {
                const response = await fetch("http://localhost:8000/"); 
                const res = await response.json();
                setData(res)
                setIsLoading(false);
            }
            fetchUsers()
        } catch (error) {
            setError(error)
            setIsLoading(false);
        }
    }, []);

    if (isLoading) return <Loader />;
    if (error) return <div className='error'>{error}</div>;
    return (
        <div className="home">
            <h1>Top 10 cryptocurrencies</h1>
            <div>{data.map(cur => (
                <div key={cur._id} className="homeitem">
                    <h2># {cur.id}</h2>
                    <Link to={cur._id}>{cur.name}</Link>
                    <img src={cur.logo} alt="avatar"/>
                </div>
            ))}</div>
        </div>
    );
}