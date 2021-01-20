import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {GlobalState} from '../../GlobalState';
import axios from 'axios';
import "./header.css";

function Header() {

  const state = useContext(GlobalState);

  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin

  const logoutUser = async () => {
    try {
      
      await axios.get('/user/logout')

      localStorage.removeItem('firstLogin')

      window.location.href = '/'

    } catch (error) {
      alert(error.response.data.msg)
    }
  }

  const loggedRouter = () => {
    return (
      <>
        <li className="li-nav"><Link className="nav-link" to="/" onClick={logoutUser}>Logout</Link></li>
      </>
    )
  }

  const adminRouter = () => {
    return (
      <>
        <li className="li-nav"><Link className="nav-link" to="/create_product">Create Product</Link></li>
      </>
    )
  }

  return (
    <nav>
      <ul className="ul-nav">
        <li className="li-nav-title">
          <Link to="/" className="nav-link-title">
            <h1 className="logo">{ isLogged ? 'Admin' : 'Twetch'}</h1>
          </Link>
        </li>
      </ul>

      <ul className="ul-nav">
        <li className="li-nav">
          <Link to="/" className="nav-link">
            {isLogged ? 'Shop' : 'Product'}
          </Link>
        </li>

        <li className="li-nav">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>

        <li className="li-nav">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>

        {isAdmin && adminRouter()}

        {
          isLogged ? loggedRouter() : <li className="li-nav">
                                        <Link to="/login" className="nav-link">
                                          SignIn
                                        </Link>
                                      </li>
        }

      </ul>
    </nav>
  );
}

export default Header;
