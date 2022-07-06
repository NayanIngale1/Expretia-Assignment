import React,{useState} from 'react'
import "./EditProfile.css"
import{useSelector,useDispatch} from 'react-redux'
import { setUpdateUser } from "../../Redux/UserReducer/actions";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { user } = useSelector(state => state.user);
  const [data,setData] = useState(user)


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (e) => {
    
    if (e.target.name == "relocate") {
      setData({ ...data, relocate: e.target.checked });
    } else {
      setData({...data,[e.target.name] : e.target.value})
    }
  }


  const handleupdateProfile = () => {
     fetch(`http://localhost:8080/user/update/${user._id}`, {
       method: "PATCH",
       body: JSON.stringify(data),
       headers: {
         "Content-Type": "application/json",
       },
     })
       .then((res) => res.json())
       .then((res) => {
         console.log("res:", res);
         if (res.message == undefined) {
           dispatch(setUpdateUser(res));
           navigate("/");
         } else {
           alert(res.message);
         }
       });
  }
  return (
    <div className="editprofile__wrapper">
      <label>
        Name:
        <input
          className="input__element register__input"
          placeholder="Enter name"
          name="name"
          value={data?.name}
          onChange={(e) => {
            handleEdit(e);
          }}
        />
      </label>
      <label>
        Email:
        <input
          className="input__element register__input"
          placeholder="Enter email"
          name="email"
          value={data?.email}
          onChange={(e) => {
            handleEdit(e);
          }}
        />
      </label>
      <label>
        Gender :
        <input
          className="input__element register__input"
          placeholder="Enter gender"
          name="gender"
          value={data?.gender}
          onChange={(e) => {
            handleEdit(e);
          }}
        />
      </label>
      <label>
        Highest qualification :
        <input
          className="input__element register__input"
          placeholder="Enter highest qualification"
          name="highest_qualification"
          value={data?.highest_qualification}
          onChange={(e) => {
            handleEdit(e);
          }}
        />
      </label>
      <label>
        Specialization :
        <input
          className="input__element register__input"
          placeholder="Enter specialization"
          name="specialization"
          value={data?.specialization}
          onChange={(e) => {
            handleEdit(e);
          }}
        />
      </label>
      <label>
        Experience (in Year) :
        <input
          className="input__element register__input"
          placeholder="Enter experience in year"
          name="experience"
          value={data?.experience}
          onChange={(e) => {
            handleEdit(e);
          }}
        />
      </label>
      <label>
        Resume Link :
        <input
          className="input__element register__input"
          placeholder="Put your resume link"
          name="resume"
          value={data?.resume}
          onChange={(e) => {
            handleEdit(e);
          }}
        />
      </label>
      <label>
        Ready to relocate :
        <input
          className="input__element register__input"
          name="relocate"
          type="checkbox"
          checked={data?.relocate}
          onChange={(e) => {
            handleEdit(e);
          }}
        />{" "}
        Yes.
      </label>
      <button className="btn__element" onClick={() => handleupdateProfile()}>
     UPDATE PROFILE
      </button>
    </div>
  );
}

export default EditProfile
