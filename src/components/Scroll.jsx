import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/scroll.css";
import Swal from "sweetalert2";

const Scroll = () => {
  const hiddenTextRef1 = useRef(null);
  const hiddenTextRef2 = useRef(null);
  const hiddenTextRef3 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.nextSibling.style.display = "block";
          }
        });
      },
      { threshold: 1 }
    );

    [hiddenTextRef1, hiddenTextRef2, hiddenTextRef3].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleCheckScroll = async (i) => {
    Swal.fire({
      icon: "success",
      title: `This is some text that will be hidden until you scroll ${i}.`,
      showConfirmButton: false,
      timer: 2500,
    });
  };

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Scroll Check</h3>
      </div>
      <div className="scrollable-content">
        <div className="scroll_div">
          <p ref={hiddenTextRef1} className="scroll-text">
            Scroll-1
          </p>
          <button
            className="button"
            style={{ display: "none" }}
            onClick={() => handleCheckScroll(1)}
          >
            Check
          </button>
        </div>
        <div className="scroll_div">
          <p ref={hiddenTextRef2} className="scroll-text">
            Scroll-2
          </p>
          <button
            className="button"
            style={{ display: "none" }}
            onClick={() => handleCheckScroll(2)}
          >
            Check
          </button>
        </div>
        <div className="scroll_div">
          <p ref={hiddenTextRef3} className="scroll-text">
            Scroll-3
          </p>
          <button
            className="button"
            style={{ display: "none" }}
            onClick={() => handleCheckScroll(3)}
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
