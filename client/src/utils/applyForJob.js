import { setUpdateUser } from "../Redux/UserReducer/actions";

export const applyForJob = (user, isLoggedIn, navigate, jobId) => {
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
      `https://get-it-job.herokuapp.com/user/${user._id}/applyjob/${jobId}`,
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
