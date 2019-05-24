import React, { useState } from 'react'

export default function Search() {
    const [value, setValue] = useState('');
    const [type, setType] = useState("name");
    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        searchItem(value, type);
        setValue('');
    };

    const searchSelectChange = event => {
        setType(event.target.value)
    };

    const searchItem = async (val, t) => {
        const response = await fetch(`http://localhost:8000/${t}/${val}`)
        const res = await response.json();
        window.location.href = `http://localhost:3000/searchresult/${res._id}`;
    };

    return (
        <div>
            <form className="searchform" onSubmit = {handleSubmit}>
                <select onChange={searchSelectChange}>
                    <p>Search by</p>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                </select>
                <div className="searchinput">
                    <input type="text" placeholder="Enter currency name" value={value} onChange={handleChange} />
                    <input type="submit" className="searchsubmit"/>
                </div>
            </form>
        </div>
    )
}