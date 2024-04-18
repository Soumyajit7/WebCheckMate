import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <h1>WebCheckMate</h1>
      <div className="links_container">
        <Link to="/popup" className="links">
          Popup
        </Link>
        <Link to="/dropdown" className="links">
          Dropdown
        </Link>
        <Link to="/checkbox-radiobutton" className="links">
          Checkbox & Radio Button
        </Link>
        <Link to="/scroll" className="links">
          Scroll
        </Link>
        <Link to="/mouse-hover" className="links">
          Mouse Hover
        </Link>
        <Link to="/iframe" className="links">
          Iframe
        </Link>
        <Link to="/dragNdrop" className="links">
          Drag & Drop
        </Link>
        <Link to="/resizable" className="links">
          Resizable
        </Link>
        <Link to="/slider" className="links">
          Slider
        </Link>
        <Link to="/right-click" className="links">
          Right Click
        </Link>
        <Link to="/keyboard-events" className="links">
          Keyboard Events
        </Link>
      </div>
    </div>
  );
};

export default Home;
