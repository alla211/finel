import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <p>
                Copyright &copy;
                {(new Date().getFullYear())} 
                ||
                Made by Sarkis Melkonyan and Alla Khudoyan
            </p>
        </div>
    )
}
