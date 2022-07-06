import React, { useState, useEffect } from "react";

import "./JobDetails.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const JobDetails = () => {
  const [data, setData] = useState({});
  const { user } = useSelector((state) => state.user);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://get-it-job.herokuapp.com/jobs/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

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
      >
        APPLY
      </button>
    </div>
  );
};

export default JobDetails;
