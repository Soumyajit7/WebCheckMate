import React from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/impliciteexplicite.css";
import Swal from "sweetalert2";

const ImpliciteExplicite = () => {
  // method for implicite wait
  const handleClickImpliciteWait = () => {
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> seconds.",
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Math.floor(Swal.getTimerLeft() / 1000)}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire({
          icon: "success",
          title: "Implicite Wait has been completed",
        });
      }
    });
  };

  // method for explicite wait
  const handleClickExpliciteWait = () => {
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: getRandomNumber(3000, 20000),
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Math.floor(Swal.getTimerLeft() / 1000)}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire({
          icon: "success",
          title: "Explicite Wait has been completed",
        });
      }
    });
  };

  //   method for get random number
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Implicite & Explicite Wait Check</h3>
      </div>
      <div className="implicite_explicite_container">
        <div className="wait_box">
          <h4>Implicite Wait </h4>
          <span>
            An implicit wait is a global setting that applies to all elements in
            a Selenium script. It waits a specified time before throwing an
            exception if the element is not found. We can set the wait once per
            session and can’t change it later. The default value is 0.
          </span>
          <button
            className="button wait_btn"
            onClick={handleClickImpliciteWait}
          >
            Click to start implicite wait for only 5 seconds
          </button>
        </div>
        <div className="wait_box">
          <h4>Explicite Wait </h4>
          <span>
            An explicit wait is a more flexible wait that allows us to wait for
            a specific condition to be met before continuing test execution. We
            can define the condition, such as the presence or absence of an
            element, using ExpectedConditions class. An exception is thrown if
            the condition is not met within the specified time.
          </span>
          <button
            className="button wait_btn"
            onClick={handleClickExpliciteWait}
          >
            Click to start explicite wait for any random seconds between (3-20)
            Seconds
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImpliciteExplicite;
