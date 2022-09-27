import React from "react";
import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <ul>
        <li>Home</li>
        <li>Our Offers</li>
        <li>About Us</li>
        <li>
          <img src="/collabActlogo.png" alt="" />
        </li>
        <li>FAQ</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>
          <button>Log In</button>
          <button>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}
