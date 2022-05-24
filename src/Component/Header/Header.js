import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './Header.scss';

const Header = ({isLogged = false}) => {

  return(
    <div className='bg-Header'>
      <Logo size="1em"/>
      <div className="Link-Header">
        {isLogged
        ? <Link to="/logout">Logout</Link>
        : <Link to="/login">Login</Link>}
      </div>
    </div>
  )
}

export default Header;