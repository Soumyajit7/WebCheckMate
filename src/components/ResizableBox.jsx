import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/resizable.css";

const ResizableBox = () => {
  const [dimensions, setDimensions] = useState({ width: 200, height: 200 });

  useEffect(() => {
    const resizers = document.querySelectorAll(".resizer");
    const minimum_size = 20;
    let original_width = 0;
    let original_height = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;

    const resize = (e) => {
      const width = original_width + (e.pageX - original_mouse_x);
      const height = original_height + (e.pageY - original_mouse_y);
      if (width > minimum_size) {
        setDimensions({ width, height });
      }
    };

    const stopResize = () => {
      window.removeEventListener("mousemove", resize);
    };

    resizers.forEach((resizer) => {
      resizer.addEventListener("mousedown", (e) => {
        e.preventDefault();
        original_width = dimensions.width;
        original_height = dimensions.height;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResize, { once: true });
      });
    });
  }, [dimensions]);

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Resizable Check</h3>
      </div>
      <div className="resizable_container">
        <div
          className="resizable"
          style={{ width: dimensions.width, height: dimensions.height }}
        >
          <div className="resizers">
            <div className="resizer top-left"></div>
            <div className="resizer top-right"></div>
            <div className="resizer bottom-left"></div>
            <div className="resizer bottom-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResizableBox;
