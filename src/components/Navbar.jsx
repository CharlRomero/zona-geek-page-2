import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import jwtDecode from "jwt-decode";

import logo from "../assets/logo.png";
import { Button } from "./Button";

export const Navbar = () => {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    let userObject = jwtDecode(response.credential);
    setUser(userObject);
    document.getElementById("signIn").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signIn").hidden = false;
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signIn"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <nav className="Navbar">
      <section className="Navbar-links">
        <img src={logo} alt="zonageek" className="Navbar-logo" />
        <Link className="Navbar-link" to="/phone">
          Phones
        </Link>
      </section>
      <section className="Navbar-login">
        <div id="signIn"></div>
        {user && (
          <div className="Navbar-user">
            <img src={user.picture} alt={user.name} className="Navbar-img" />
            <h3 className="Navbar-h">{user.name}</h3>
          </div>
        )}
        {Object.keys(user).length != 0 && (
          <Button
            className="Button"
            onClick={(e) => handleSignOut(e)}
            title="SignOut"
          />
        )}
      </section>
    </nav>
  );
};
