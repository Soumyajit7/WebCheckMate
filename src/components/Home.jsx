import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <h1>WebCheckMate</h1>
      <div className="links_container">
        <Link
          to="/questions"
          target="_blank"
          className="links link_boxes question_link"
        >
          Questions
        </Link>
        <Link to="/popup" className="links link_boxes">
          Popup
        </Link>
        <Link to="/dropdown" className="links link_boxes">
          Dropdown
        </Link>
        <Link to="/checkbox-radiobutton" className="links link_boxes">
          Checkbox & Radio Button
        </Link>
        <Link to="/scroll" className="links link_boxes">
          Scroll
        </Link>
        <Link to="/mouse-hover" className="links link_boxes">
          Mouse Hover
        </Link>
        <Link to="/iframe" className="links link_boxes">
          Iframe
        </Link>
        <Link to="/dragNdrop" className="links link_boxes">
          Drag & Drop
        </Link>
        <Link to="/resizable" className="links link_boxes">
          Resizable
        </Link>
        <Link to="/slider" className="links link_boxes">
          Slider
        </Link>
        <Link to="/right-click" className="links link_boxes">
          Right Click
        </Link>
        <Link to="/keyboard-events" className="links link_boxes">
          Keyboard Events
        </Link>
        <Link to="/multiple-windows" className="links link_boxes">
          Multiple Windows
        </Link>
        <Link to="/implicite-explicite" className="links link_boxes">
          Implicite & Explicite Wait
        </Link>
        <Link to="/webtable" className="links link_boxes">
          Handle Web Table & Excel Sheet
        </Link>
        <Link to="/js-executor" className="links link_boxes">
          JS Executor
        </Link>
        <Link to="/ss" className="links link_boxes">
          Screenshot
        </Link>
      </div>
    </div>
  );
};

export default Home;
