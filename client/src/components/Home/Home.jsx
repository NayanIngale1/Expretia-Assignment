import React, { useEffect, useState } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import JobCard from "../JobCard/JobCard";
import { getProducts } from "../../Redux/JobReducer/actions";

const Home = () => {
  const { jobs } = useSelector((state) => state.jobs);

  const [data, setData] = useState(jobs.jobs || []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(`http://localhost:8080/jobs/all`));
  }, []);

  const filterHandle = (e) => {
    if (e.target.value == "all") {
      dispatch(getProducts(`http://localhost:8080/jobs/all`));
    } else {
      dispatch(
        getProducts(`http://localhost:8080/jobs/category/${e.target.value}`)
      );
    }
  };

  useEffect(() => {
    setData(jobs.jobs);
  }, [jobs.jobs]);

  return (
    <div className="Hoome__wrapper">
      <h1 className="main__heading">Welcome To GET-IT-Jobs</h1>
      <div style={{ marginBottom: "1rem", fontSize: "18px" }}>
        Filter By :{" "}
        <select onChange={(e) => filterHandle(e)}>
          <option value="all">Category</option>
          <option value="fullstack" onChange={(e) => filterHandle(e)}>
            FullStack Development
          </option>
          <option value="frontend" onChange={(e) => filterHandle(e)}>
            Frontend Developer
          </option>
          <option value="backend" onChange={(e) => filterHandle(e)}>
            Backend Developer
          </option>
          <option
            value="software-development"
            onChange={(e) => filterHandle(e)}
          >
            Software Development
          </option>
        </select>
      </div>
      <div className="job__listing">
        {" "}
        {data.map((d) => (
          <JobCard data={d} key={d._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
