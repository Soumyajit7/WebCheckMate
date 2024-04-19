import React, { useState } from "react";
import "../styles/dropdown.css";
import Select from "react-select";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Swal from "sweetalert2";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const fruitOptions = [
  {
    label: "Citrus Fruits",
    options: [
      { value: "orange", label: "Orange" },
      { value: "lemon", label: "Lemon" },
      { value: "grapefruit", label: "Grapefruit" },
      { value: "lime", label: "Lime" },
    ],
  },
  {
    label: "Berries",
    options: [
      { value: "strawberry", label: "Strawberry" },
      { value: "blueberry", label: "Blueberry" },
      { value: "raspberry", label: "Raspberry" },
      { value: "blackberry", label: "Blackberry" },
    ],
  },
  {
    label: "Tropical Fruits",
    options: [
      { value: "mango", label: "Mango" },
      { value: "pineapple", label: "Pineapple" },
      { value: "banana", label: "Banana" },
      { value: "coconut", label: "Coconut" },
    ],
  },
  {
    label: "Stone Fruits",
    options: [
      { value: "peach", label: "Peach" },
      { value: "plum", label: "Plum" },
      { value: "cherry", label: "Cherry" },
      { value: "apricot", label: "Apricot" },
    ],
  },
];

const genderOptions = [
  { value: "", label: "Select Gender" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
  { value: "preferNotToSay", label: "Prefer not to say" },
];

const Dropdown = () => {
  const [selectedGender, setSelectedGender] = useState(genderOptions[0].value);
  const [selectedFruitOptions, setSelectedFruitOptions] = useState(null);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleFruitChange = (options) => {
    setSelectedFruitOptions(options);
  };

  //   calculate age button
  const handleClickCalculateAge = async (e) => {
    e.preventDefault();
    console.log(date, time);
    const age = calculateAge(date, time);
    Swal.fire("Your Current Age is", age);
  };

  //   method to calculate age
  function calculateAge(birthDate, birthTime) {
    const birthDateTimeString = `${
      birthDate.toISOString().split("T")[0]
    }T${birthTime}`;
    const birthDateTime = new Date(birthDateTimeString);
    const now = new Date();

    let years, months, days, hours, minutes;
    minutes = Math.floor((now - birthDateTime) / (1000 * 60));
    hours = Math.floor(minutes / 60);
    days = Math.floor(hours / 24);
    months = Math.floor(days / 30.44); // Average number of days in a month
    years = Math.floor(days / 365.25); // Taking into account leap years

    minutes %= 60;
    hours %= 24;
    days %= 30.44;
    months %= 12;

    return `${years} years ${Math.floor(months)} months ${Math.floor(
      days
    )} days ${hours} hours ${minutes} minutes`;
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleClickDropdownCheck = (e) => {
    e.preventDefault();
    Swal.fire({
      html: `You have selected gender : ${selectedGender}<br/>Your favourite fruits : ${selectedFruitOptions
        .map((f) => f.label)
        .join(", ")}`,
    });
  };

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Dropdown Check</h3>
      </div>
      <div className="compo_container">
        <form>
          <div className="form_div">
            <p htmlFor="gender">Choose your gender</p>
            <select
              value={selectedGender}
              onChange={handleGenderChange}
              className="dropdown"
            >
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form_div">
            <p htmlFor="cars">Choose your favourite fruits (select multiple)</p>
            <Select
              isMulti
              name="fruit"
              options={fruitOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleFruitChange}
              value={selectedFruitOptions}
            />
          </div>
          <button className="button" onClick={handleClickDropdownCheck}>
            Check
          </button>
          <div className="form_div">
            <h3>Age Calculator</h3>
            <p className="p_tag">
              Enter your date of birth : {date.toLocaleDateString()}
            </p>
            <Calendar onChange={handleDateChange} value={date} />
            <p className="p_tag">Enter your time of birth : {time}</p>
            <input
              className="dropdown"
              type="time"
              value={time}
              onChange={handleTimeChange}
            />
            <br />
            <button className="button" onClick={handleClickCalculateAge}>
              Calculate Age
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dropdown;
