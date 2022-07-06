import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import JobDetails from "./components/JobDetails/JobDetails";
import Logout from "./components/Logout/Logout";
import EditProfile from "./components/EditProfile/EditProfile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/jobdetails/:id" element={<JobDetails />} />
      </Routes>
    </div>
  );
}

export default App;