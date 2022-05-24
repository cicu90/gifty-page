import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  useAuth,
  logout,
  signInWithEmail,
  signUp,
} from "../../Firebase/Firebase";
//component
import Logo from "../Logo/Logo";
import "./Header.scss";

//page
import User from "../../Views/User/user";

const Header = ({ isLogged = false }) => {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);
    try {
      await signInWithEmail(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Wait for it!");
    }
    setLoading(false);
  }

  async function handleSignup() {
    setLoading(true);
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      logout();
    } catch {
      alert("Error");
    }
    setLoading(false);
  }
  return (
    <div className="bg-Header">
      <Logo size="1em" />
      <div className="Link-Header">
        {!currentUser && (
          <>
            {!isLogged && (
              <div>
                <button disabled={loading} onClick={handleLogin}>
                  <Link to="/login">Login</Link>
                </button>
                <button disabled={loading} onClick={handleSignup}>
                  <Link to="/SignUp">Sign Up</Link>
                </button>
              </div>
            )}
          </>
        )}
        {currentUser && (
          <>
            <button disabled={loading || !currentUser} onClick={handleLogout}>
              <Link to="/logout">Logout</Link>
            </button>
            <User />
            <div className="profile">Currently logged in as: {currentUser?.email} </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
