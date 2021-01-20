import React, {useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import './login.css';

function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const onInputChange = (e) => {
        const {value, name} = e.target;

        setUser({...user, [name]: value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)

            window.location.href = '/'

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <div className="login">
            <form className="login-form" onSubmit={onSubmit} >

                <h1>Login</h1>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={user.email} onChange={onInputChange} autoFocus="on" required />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={user.password} onChange={onInputChange} autoComplete="on" required />
            
                <div className="buttons">
                    <button type="submit" className="btn">Sign in</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
