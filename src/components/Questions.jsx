import React from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/questions.css";
import Questions from "../assets/Questions";

const QuestionsComponent = () => {
  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Automation Testing Questions</h3>
      </div>
      <div className="questions_container">
        {Questions.map((question, index) => (
          <div className="questions" key={index}>
            <h4>{question.title}</h4>
            <ul>
              {question.questions_list.map((q, i) => (
                <li className="gap-10" key={i}>
                  <p>{q}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsComponent;
