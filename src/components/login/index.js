import React from 'react'
import './index.css'

const Login = (props) => {

    const {setLoggedIn} = props
    return (
        <div className='login'>
            <h1>login screen</h1>
            <div>
                Username
            <input></input>

            </div>
            <div>
                Password
            <input></input>

            </div >
            <button className='login-button' onClick={setLoggedIn}>login</button>
        </div>
    )
}

export default Login
