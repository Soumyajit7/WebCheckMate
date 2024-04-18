import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/keyboard-events.css";
import Swal from "sweetalert2";

const KeyboardEvent = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      Swal.fire({
        icon: "success",
        title: `You pressed the "${event.key}" key`,
      });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Keyboard Events Check</h3>
      </div>
      <div className="keyboard_container">
        <div>Press any key to see the alert.</div>
      </div>
    </div>
  );
};

export default KeyboardEvent;
