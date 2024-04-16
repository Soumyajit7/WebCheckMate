import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/checkbox.css";
import Swal from "sweetalert2";

const interestOptions = [
  { id: "coding", value: "coding", label: "Coding" },
  { id: "music", value: "music", label: "Music" },
  { id: "sports", value: "sports", label: "Sports" },
  { id: "art", value: "art", label: "Art" },
  { id: "travel", value: "travel", label: "Travel" },
];

const Checkbox = () => {
  const [selectedInterestOptions, setSelectedInterestOptions] = useState(null);
  const [selectedColor, setColor] = useState("");

  const handleInterestsChange = (options) => {
    setSelectedInterestOptions(options);
  };

  //  radio button to choose color
  const handleClickColor = async () => {
    const inputOptions = {
      "#ff0000": "Red",
      "#00ff00": "Green",
      "#0000ff": "Blue",
      "#ffff00": "Yellow",
      "#ff00ff": "Magenta",
      "#00ffff": "Cyan",
      "#000000": "Black",
      "#808080": "Gray",
      "#800000": "Maroon",
      "#008000": "DarkGreen",
      "#800080": "Purple",
      "#008080": "Teal",
      "#000080": "Navy",
    };
  
    let htmlContent = '<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">';
    for (const [color, name] of Object.entries(inputOptions)) {
      htmlContent += `<label style="flex: 1 0 21%; margin: 5px; padding: 10px; color: ${color}; border: 1px solid ${color}; border-radius: 5px;">
                        <input type="radio" name="color" value="${color}" />
                        ${name}
                      </label>`;
    }
    htmlContent += '</div>';
  
    const { value: color } = await Swal.fire({
      title: "Select color",
      html: htmlContent,
      focusConfirm: false,
      preConfirm: () => {
        return new Promise((resolve) => {
          resolve(document.querySelector('input[name="color"]:checked').value);
        });
      },
    });
  
    if (color) {
      setColor(color);
      Swal.fire({
        html: `<div style="display: flex; align-items: center; justify-content: center;">
                  <span>You selected: ${color}</span>
                  <div style="width: 20px; height: 20px; background-color: ${color}; margin-left: 10px;"></div>
               </div>`,
      });
    }
  };
  

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Checkbox Check</h3>
      </div>
      <fieldset>
        <legend>Choose your interests</legend>
        {interestOptions.map((option) => (
          <div key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              name="interest"
              value={option.value}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </fieldset>
      <button className="button" onClick={handleClickColor}>
        Select your favourite color
      </button>
      <div
        style={{ backgroundColor: "white", padding: "10px", margin: "1rem" }}
      >
        <div
          style={{
            width: "100%",
            height: "20px",
            backgroundColor: selectedColor,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Checkbox;
