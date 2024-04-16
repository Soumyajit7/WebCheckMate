import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/mousehover.css";
import Swal from "sweetalert2";
import "@fortawesome/fontawesome-free/css/all.css";
import { FaHandPointDown } from "react-icons/fa";
import { FaArrowPointer } from "react-icons/fa6";

const MouseHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Mouse Hover Check</h3>
      </div>
      <div className="mousehover_container">
        <div className="sickhover_container">
          <p className="hover-effect">Sick Hover</p>
        </div>

        <div className="card" style={{ background: "", text: "white" }}>
          <div className="multi-button">
            <button className="fas fa-heart"></button>
            <button className="fas fa-comment"></button>
            <button className="fas fa-share-alt"></button>
            <button className="fas fa-trash"></button>
          </div>
          <div className="container">Hover Me</div>
        </div>

        <div class="super-box">
          <div
            className="container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div class="box">
              <div class="icon_bg"></div>
            </div>
            <div className="icon">
              {isHovered ? <FaHandPointDown /> : <FaArrowPointer />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MouseHover;
