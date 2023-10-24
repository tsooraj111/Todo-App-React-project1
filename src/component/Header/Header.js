import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/Todo-App-React-project1">Home</Link>
      <Link to="/Todo-App-React-project1/about">About</Link>
    </header>
  )
}
