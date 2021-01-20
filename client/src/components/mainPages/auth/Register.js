import React, {useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import './login.css';

function Register() {

    const [user, setUser] = useState({
        name: '',
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
            
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            window.location.href = '/'

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <div className="login">
            <form onSubmit={onSubmit} >

                <h1>Register</h1>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={user.name} onChange={onInputChange} autoFocus="on" required />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={user.email} onChange={onInputChange} required />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={user.password} onChange={onInputChange} autoComplete="on" required />
            
                <div className="buttons">
                    <button type="submit" className="btn">Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register
