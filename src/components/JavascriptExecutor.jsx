import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/jsexecutor.css";

const JavascriptExecutor = () => {
  const ref = useRef(null);

  useEffect(() => {
    let shadowRoot = ref.current.shadowRoot;
    if (!shadowRoot) {
      shadowRoot = ref.current.attachShadow({ mode: "open" });
    }
    shadowRoot.innerHTML = `
      <style>
        .shadow-content {
          color: #0077b3;
          background-color: white;
          padding: 10px;
          border-radius: 10px;
        }
      </style>
      <div class="shadow-content">
        <h1>Hello from the shadow DOM!</h1>
      </div>
    `;
  }, []);

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>JS Executor Check</h3>
      </div>
      <div className="js_executor_container">
        <div ref={ref} />
      </div>
    </div>
  );
};

export default JavascriptExecutor;
