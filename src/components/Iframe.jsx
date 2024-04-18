import React from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import Frame, { FrameContextConsumer } from "react-frame-component";
import Swal from "sweetalert2";

const Iframe = () => {
  // method for click ClickMe button
  const handleClickMe = () => {
    Swal.fire({
      icon: "success",
      text: "You have successfully clicked the button inside iframe",
    });
  };

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>iframe Check</h3>
      </div>
      <div className="iframe_container">
        <iframe
          title="hello iframe"
          srcDoc="<p style='color: white;'>Hello from Iframe</p>"
        ></iframe>
        <br />
        <Frame>
          <FrameContextConsumer>
            {
              // Callback is invoked with iframe's window and document instances
              ({ document, window }) => {
                // Create a style element and append to iframe's head
                let styleElement = document.createElement("style");
                document.head.appendChild(styleElement);
                styleElement.textContent = `
                  .iframe_box {
                    height: 85vh;
                    border: 0px solid red;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  .button {
                    font-size: 1rem;
                    padding: 5px;
                    background-color: rgb(10, 104, 199);
                    border: 0px solid red;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 5px;
                    cursor: pointer;
                  }
                `;
                return (
                  <div className="iframe_box">
                    <button className="button" onClick={handleClickMe}>
                      Click Me
                    </button>
                  </div>
                );
              }
            }
          </FrameContextConsumer>
        </Frame>
        <br />
        <Frame style={{ width: "600px", height: "300px" }}>
          <iframe
            src="https://www.youtube.com/embed/Brrmj9z7QLw"
            width="580px"
            height="280px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ border: "none" }}
            title="YouTube Video"
          ></iframe>
        </Frame>
      </div>
    </div>
  );
};

export default Iframe;
