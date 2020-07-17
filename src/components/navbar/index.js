import React, {useState} from 'react'
import './index.css'
const Navbar = (props) => {
    const {logOut} = props
    return (
        <div className='navbar'>
            <h1>Flax-Dax</h1>
            <button className="logout-button" onClick={logOut}>logout</button>
        </div>
    )
}

export default Navbar
