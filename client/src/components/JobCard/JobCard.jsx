import React from "react";

import "./JobCard.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { applyForJob } from "../../utils/applyForJob";

const JobCard = ({ data }) => {
  const { user, isLoggedIn } = useSelector((state) => state.user);

  const navigate = useNavigate();

  return (
    <div className="jobcard__wrapper">
      <p>{data.category}</p>
      <h2>{data.title}</h2>
      <p> {data.company}</p>
      <p>Min-Salary : {data.min_salary}</p>
      <p>Min-Salary : {data.max_salary}</p>
      <p>Location : {data.location}</p>
      <div className="card__Btn">
        <Link
          to={`/jobdetails/${data._id}`}
          className="btn__element view__details__btn"
        >
          DETAILS
        </Link>
        <button
          className={
            user?.applied_jobs?.includes(data._id)
              ? "disable"
              : "btn__element apply__btn"
          }
          disabled={user?.applied_jobs?.includes(data._id)}
          onClick={() => applyForJob(user, isLoggedIn, navigate, data._id)}
        >
          APPLY
        </button>
      </div>
    </div>
  );
};

export default JobCard;
