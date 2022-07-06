import React, { useState, useEffect } from "react";
import { setUpdateUser } from "../../Redux/UserReducer/actions";
import "./JobDetails.css";
import { useParams,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const JobDetails = () => {
  const [data, setData] = useState({});
  const { user,isLoggedIn } = useSelector((state) => state.user);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://get-it-job.herokuapp.com/jobs/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  
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
    <div className="JobDetails__wrapper">
      <p>Category : {data.category}</p>
      <h1>{data.title}</h1>
      <h2> {data.company}</h2>
      <p>
        Min-Salary : <b>{data.min_salary}</b>
      </p>
      <p>
        Min-Salary : <b>{data.max_salary}</b>
      </p>
      <p>Location : {data.location}</p>
      <h3>Required Skill Sets : {data.skill_set}</h3>
      <p>
        {" "}
        <b>Description</b> : {data.description}
      </p>
      <button
        className={
          user?.applied_jobs?.includes(data._id)
            ? "disable"
            : "btn__element apply__btn"
        }
        disabled={user?.applied_jobs?.includes(data._id)}
        onClick={()=>{applyForJob()}}
      >
        APPLY
      </button>
    </div>
  );
};

export default JobDetails;