export const GET_JOBS = "GET_JOBS";

export const SET_JOBS = "SET_JOBS";
export const SET_JOBS_ERROR = "SET_JOBS_ERROR";

export const getJobs = ()=>{
    return {type:GET_JOBS}
}
export const setJobs = (payload)=>{
    return {type:SET_JOBS,payload:payload}
}
export const setJobsError = (err)=>{
    return {type:SET_JOBS,payload:err}
}





export const getProducts = (url) => (dispatch) => {
    dispatch(getJobs());
      
    fetch(url)
        .then((res) => res.json())
        .then((res) => dispatch(setJobs(res)))
        .catch((err) => dispatch(setJobsError(err)));
}