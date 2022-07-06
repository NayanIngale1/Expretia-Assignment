import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../Redux/UserReducer/actions";


export default function () {


    const dispatch = useDispatch();
    const navigate= useNavigate()

    useEffect(() => { 
        dispatch(removeUser());
        navigate("/login");
    }, []);

    return (
        <>
        Logout...    
    </>
    )
}