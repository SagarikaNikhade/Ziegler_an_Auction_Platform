import { FAILURE, LOGIN_SUCCESS, REGISTER_SUCCESS, REQUEST,} from "./actionTypes"
import axios from "axios";

export const registerUser = (data) => (dispatch) =>{
    dispatch({type:REQUEST})
    axios.post(`http://localhost:8080/users/register`,data)
    .then((res)=>{
        dispatch({type:REGISTER_SUCCESS})
        console.log(res)
    })
    .catch((err)=>{
        dispatch({type:FAILURE})
    })
}

// login
export const loginUser = (userData) => (dispatch) =>{
    dispatch({type:REQUEST})
    return axios.post(`http://localhost:8080/users/login`,userData)
    .then((res)=>{
        console.log(res.data)
        const { token } = res.data;
        localStorage.setItem('token', token);
        dispatch({type:LOGIN_SUCCESS,payload:res.data}) 
    })
    .catch((err)=>{
        dispatch({type:FAILURE})
    })
}