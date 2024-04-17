import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/popup.css";
import Swal from "sweetalert2";

const Popup = () => {
  const [testerName, setTesterName] = useState(null);
  const [testerUserName, setTesterUserName] = useState(null);
  const [testerDP, setTesterDP] = useState(null);
  const [testerBio, setTesterBio] = useState(null);
  const [testerLocation, setTesterLocation] = useState(null);
  const [testerCompany, setTesterCompany] = useState(null);

  // pop up button for tester name
  const handlePopup = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Enter your details",
      html: `
              <input id="swal-input1" class="swal2-input" placeholder="Firstname">
              <input id="swal-input2" class="swal2-input" placeholder="Lastname">
            `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          firstname: document.getElementById("swal-input1").value,
          lastname: document.getElementById("swal-input2").value,
        };
      },
    });
    if (formValues) {
      const fullName = `${formValues.firstname} ${formValues.lastname}`;
      Swal.fire(`Hello ${fullName}`);
    }
  };

  //   popup for check github account
  const handlePopupGithub = async () => {
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const githubUrl = `
              https://api.github.com/users/${login}
            `;
          const response = await fetch(githubUrl);
          if (!response.ok) {
            return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`
              Request failed: ${error}
            `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        setTesterName(result.value.name);
        setTesterUserName(result.value.login);
        setTesterDP(result.value.avatar_url);
        setTesterBio(result.value.bio);
        setTesterLocation(result.value.location);
        setTesterCompany(result.value.company);
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Popup Check</h3>
      </div>
      <div className="popup_container">
        <button className="button" onClick={handlePopup}>
          Click For Popup
        </button>
        <button className="button" onClick={handlePopupGithub}>
          Click For Github Account
        </button>
        <div className="user_details_container">
          {testerDP ? <img src={testerDP} className="image_dp" alt="dp" /> : ""}
          {testerName ? <p>Name : {testerName}</p> : ""}
          {testerUserName ? <p>Username : {testerUserName}</p> : ""}
          {testerBio ? <p>Bio : {testerBio}</p> : ""}
          {testerLocation ? <p>Location : {testerLocation}</p> : ""}
          {testerCompany ? <p>Company : {testerCompany}</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default Popup;
