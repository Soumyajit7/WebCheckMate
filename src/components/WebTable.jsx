import React from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/webtable.css";

const WebTable = () => {
  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>Handle WebTable Check</h3>
      </div>
      <div className="webtable_container">
        <table className="responsive-table">
          <thead>
            <tr>
              <th scope="col">EEID</th>
              <th scope="col">Full Name</th>
              <th scope="col">Job Title</th>
              <th scope="col">Department</th>
              <th scope="col">Business Unit</th>
              <th scope="col">Gender</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.EEID}>
                <td>{employee.EEID}</td>
                <td>{employee.FullName}</td>
                <td>{employee.JobTitle}</td>
                <td>{employee.Department}</td>
                <td>{employee.BusinessUnit}</td>
                <td>{employee.Gender}</td>
                <td>{employee.Country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WebTable;

const employees = [
  {
    EEID: "E1",
    FullName: "Emily Davis",
    JobTitle: "Sr. Manager",
    Department: "IT",
    BusinessUnit: "Research & Development",
    Gender: "Female",
    Country: "United States",
  },
  {
    EEID: "E2",
    FullName: "Theodore Dinh",
    JobTitle: "Technical Architect",
    Department: "IT",
    BusinessUnit: "Manufacturing",
    Gender: "Male",
    Country: "China",
  },
  {
    EEID: "E3",
    FullName: "Luna Sanders",
    JobTitle: "Director",
    Department: "Finance",
    BusinessUnit: "Speciality Products",
    Gender: "Female",
    Country: "United States",
  },
  {
    EEID: "E4",
    FullName: "Penelope Jordan",
    JobTitle: "Computer Systems Manager",
    Department: "IT",
    BusinessUnit: "Manufacturing",
    Gender: "Female",
    Country: "United States",
  },
  {
    EEID: "E5",
    FullName: "Austin Vo",
    JobTitle: "Sr. Analyst",
    Department: "Finance",
    BusinessUnit: "Manufacturing",
    Gender: "Male",
    Country: "United States",
  },
  {
    EEID: "E6",
    FullName: "Joshua Gupta",
    JobTitle: "Account Representative",
    Department: "Sales",
    BusinessUnit: "Corporate",
    Gender: "Male",
    Country: "China",
  },
  {
    EEID: "E7",
    FullName: "Ruby Barnes",
    JobTitle: "Manager",
    Department: "IT",
    BusinessUnit: "Corporate",
    Gender: "Female",
    Country: "United States",
  },
  {
    EEID: "E8",
    FullName: "Luke Martin",
    JobTitle: "Analyst",
    Department: "Finance",
    BusinessUnit: "Manufacturing",
    Gender: "Male",
    Country: "United States",
  },
  {
    EEID: "E9",
    FullName: "Easton Bailey",
    JobTitle: "Manager",
    Department: "Accounting",
    BusinessUnit: "Manufacturing",
    Gender: "Male",
    Country: "United States",
  },
  {
    EEID: "E10",
    FullName: "Madeline Walker",
    JobTitle: "Sr. Analyst",
    Department: "Finance",
    BusinessUnit: "Speciality Products",
    Gender: "Female",
    Country: "United States",
  },
];
