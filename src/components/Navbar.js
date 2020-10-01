import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import {
  faHome,
  faShoppingBasket,
  faPoundSign,
} from '@fortawesome/free-solid-svg-icons';
import { auth } from '../firebase/firebaseConfig';

const Navbar = () => {
  const history = useHistory();
  const logOut = () => {
    auth
      .signOut()
      .then((res) => {
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <aside className="navbar">
      <Link className="navbar-link" to="/">
        <FontAwesomeIcon
          className="icon"
          icon={faHome}
          size="sm"
          color="white"
        />
        Home
      </Link>
      <Link className="navbar-link" to="/sales">
        <FontAwesomeIcon
          className="icon"
          icon={faPoundSign}
          size="sm"
          color="white"
        />
        Sales
      </Link>
      <Link className="navbar-link" to="/stock">
        <FontAwesomeIcon
          className="icon"
          icon={faShoppingBasket}
          size="sm"
          color="white"
        />
        Stock
      </Link>
      <button type="button" onClick={logOut} className="logoutButton">
        Log out
      </button>
    </aside>
  );
};

export default Navbar;
