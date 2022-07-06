import React, { useState, useEffect } from "react";

import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../Redux/JobReducer/actions";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const getSearchResult = () => {
    dispatch(getProducts(`http://localhost:8080/jobs/all?keyword=${search}`));
  };

  useEffect(() => {
    let id;
    clearTimeout(id);
    id = setTimeout(() => {
      dispatch(getProducts(`http://localhost:8080/jobs/all?keyword=${search}`));
    }, 800);
  }, [search]);

  return (
    <div className="navbar__wrapper">
      <div className="navbar__logo">
        <Link to="/">Get-IT-Job</Link>
      </div>

      {isLoggedIn && <Link to="/editprofile" className="navbar__list_item">Edit Profile</Link>}
      <div className="navbar__serach">
        <input
          className="navbar__input"
          value={search}
          placeholder="Enter job title"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="navbar__serch__btn" onClick={getSearchResult}>
          Search
        </button>
      </div>
      <div className="navbar__login">
        {!isLoggedIn ? (
          <Link to="/login">LOGIN</Link>
        ) : (
          <Link to="/logout">LOGOUT</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
