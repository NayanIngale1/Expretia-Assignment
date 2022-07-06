import React,{useState,useEffect} from "react";

import "./JobDetails.css"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";


const JobDetails = () => {

    const [data, setData] = useState({});
    const { user } = useSelector((state) => state.user);

    const { id } = useParams()

    useEffect(() => { 
         fetch(`http://localhost:8080/jobs/${id}`)
           .then((res) => res.json())
           .then((res) => setData(res));
    },[])
    
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
}

export default JobDetails



//   "_id": "62c419fa368cd00627e34fed",
//             "title": "MERN Stack Developer",
//             "category": "fullstack",
//             "min_salary": 300000,
//             "max_salary": 700000,
//             "location": "Hyderabad/Secunderabad",
//             "company": "keyworks Solutions LLP",
//             "description": "The candidate should have experience working as a Front-end Web Developer with excellent hands-on experience in MERN stack technologies - MongoDB, Express(.js), React(.js), Node(.js).",
//             "skill_set": "MongoDB, Python, ReactJS, AngularJS, Flask, Django, HTML, CSS, Bootstrap",