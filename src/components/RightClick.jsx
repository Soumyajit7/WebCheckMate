import React from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/rightclick.css";
import Swal from "sweetalert2";

const RightClick = () => {
  const handleRightClick = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Right click is triggered",
    });
  };

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Right-Click Check</h3>
      </div>
      <div className="rightclick_container">
        <div onContextMenu={handleRightClick}>
          Right click on this text to see the alert.
        </div>
      </div>
    </div>
  );
};

export default RightClick;
