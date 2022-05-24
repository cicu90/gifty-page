import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.sass';

const Header = () => {
  return(
    <div className="col align-items-center ">
    <div className="flex bgHeader justify-content-between">
    {/* <Logo size="1em"/> */}
</div>
<div className="col align-items-center center">
    {/* <Menu title={undefined} menuObject={undefined}/> */}
</div>
{/* {isLoggedIn &&  */}
<div className="col align-items-center register">
    <Link to="/signup">Register</Link>
</div>
{/* } */}
</div>
  )
}

export default Header;