import React from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/ss.css";
import Swal from "sweetalert2";

// Import your images
import trees from "../assets/trees.png";
import nyanCat from "../assets/nyan-cat.gif";

const ScreenShot = () => {
  const handleClickAnimation = () => {
    Swal.fire({
      title: "Take the screenshot now.",
      timer: 3000,
      showConfirmButton: false,
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: `#fff url(${trees})`,
      backdrop: `
              rgba(0,0,123,0.4)
              url("${nyanCat}")
              left top
              no-repeat
            `,
    });
  };

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Screenshot Check</h3>
      </div>
      <div className="ss_container">
        <button className="button" onClick={handleClickAnimation}>
          Click to See Decoration
        </button>
      </div>
    </div>
  );
};

export default ScreenShot;
