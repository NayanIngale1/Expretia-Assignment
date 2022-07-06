import React from "react";

import "./JobCard.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUpdateUser } from "../../Redux/UserReducer/actions";



const JobCard = ({ data }) => {
  const { user, isLoggedIn } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

 const applyForJob = () => {
  if (!isLoggedIn) {
    navigate("/login");
  } else if (
    !user.highest_qualification ||
    !user.specialization ||
    !user.relocate ||
    !user.gender ||
    !user.experience ||
    !user.resume
  ) {
    navigate("/editprofile");
  } else {
    fetch(
      `https://get-it-job.herokuapp.com/user/${user._id}/applyjob/${data._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("res:", res);
        if (res.message == undefined) {
          dispatch(setUpdateUser(res));
          alert("Application submitted succefully..!");
        } else {
          alert(res.message);
        }
      });
  }
};


  
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
          onClick={() => applyForJob()}
        >
          APPLY
        </button>
      </div>
    </div>
  );
};

export default JobCard;