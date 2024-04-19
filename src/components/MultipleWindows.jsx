import React from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/multiple-windows.css";
import { FaRegWindowClose } from "react-icons/fa";

const MultipleWindows = () => {
  let { windowid } = useParams();

  //   method to close current window tab
  const handleClickCloseWindow = () => {
    window.close();
  };

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Multiple Windows Check</h3>
      </div>
      <div className="multiple_windows_container">
        <div className="window_header">
          <p>
            {windowid ? "Child" : "Parent"} Window {windowid}
          </p>
          {windowid ? (
            <FaRegWindowClose
              className="window_close"
              onClick={handleClickCloseWindow}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="window">
          <Link
            className="links"
            to={`/multiple-windows/${windowid ? parseInt(windowid) + 1 : 1}`}
            target="_blank"
          >
            Click Here Open New Window
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MultipleWindows;
