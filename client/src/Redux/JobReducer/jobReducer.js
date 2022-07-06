import {
GET_JOBS , SET_JOBS, SET_JOBS_ERROR
} from "./actions.js";


const initial = {
  loading: false,
  error: false,
    jobs: []
};

export const jobReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case GET_JOBS:
      return { ...state, loading:true };
    case SET_JOBS_ERROR:
      return { ...state, loading: false, error: payload };
    case SET_JOBS:
      return { ...state, jobs: payload};
    default:
      return state;
  }
};
