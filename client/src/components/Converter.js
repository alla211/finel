import React, { useState, useEffect } from "react";

export default function Converter() {
    const [data, setData] = useState([])
    const [price, setPrice] = useState(7.855);
    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState(0);

    const amountChange = event => {
        setAmount(event.target.value);
    }

    const selectChange = event => {
        setPrice(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setResult(price * amount)
    }

    useEffect(() => {
        try {
            const fetchUsers = async () => {
                const response = await fetch("http://localhost:8000/");
                const res = await response.json();
                setData(res)
            }
            fetchUsers()
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <div className="converter">
            <h1>Converter</h1>
            <form onSubmit={handleSubmit}>
                <select onChange={selectChange}>
                    {data.map(cur => (
                        <option value={cur.price}>{cur.symbol}</option>
                    ))}
                </select>
                <input type="text" placeholder="Enter amount" value={amount} onChange={amountChange} />
                <input type="submit" value="=>"/>
            </form>
            <p>${result} USD</p>
        </div>
    )
}
