export const SET_LOADING = "SET_LOADING";

export const SET_USER = "SET_USER";
export const SET_UPDATE_USER = "SET_UPDATE_USER";

export const REMOVE_USER = "REMOVE_USER";

export const SET_USER_ERROR = "SET_USER_ERROR";



export const setLoginLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload: payload
  };
};

export const setUser = (data) => {
    return {
        type: SET_USER,
        payload:data
    }
}
export const setUpdateUser = (data) => {
    return {
        type: SET_UPDATE_USER,
        payload:data
    }
}
export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const setUserError = (err) => {
    return {
        type: SET_USER_ERROR,
        payload:err
    }
}
