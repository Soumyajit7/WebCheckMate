import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/slider.css";
import Swal from "sweetalert2";

const Slider = () => {
  const [value, setValue] = useState(null);

  const handleClickSlider = async (event) => {
    const { value: age } = await Swal.fire({
      title: "How old are you?",
      icon: "question",
      input: "range",
      inputLabel: "Your age",
      inputAttributes: {
        min: "0",
        max: "120",
        step: "1",
      },
      inputValue: 5,
    });

    if (age) {
      setValue(age);
    }
  };

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Slider Check</h3>
      </div>
      <div className="slider_container">
        <button className="button" onClick={handleClickSlider}>
          How old are you?
        </button>
        <div className="slider_data_container">
          {value ? <p>I am {value} years old.</p> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Slider;
