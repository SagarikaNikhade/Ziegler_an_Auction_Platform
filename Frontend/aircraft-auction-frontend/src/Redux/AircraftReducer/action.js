import { AIRCRAFT_FAILURE, AIRCRAFT_REQUEST, ADD_AIRCRAFT_SUCCESS,GET_AIRCRAFT_SUCCESS} from "./actionTypes";
import axios from "axios";

export const addAircraft = (data) => (dispatch) => {
    dispatch({ type: AIRCRAFT_REQUEST })
    axios
        .post("http://localhost:8080/aircraft/add", data)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: ADD_AIRCRAFT_SUCCESS})
        })
        .catch((err) => {
            dispatch({ type: AIRCRAFT_FAILURE })
        })
}

export const getaircraft = (paramobj) => (dispatch) =>{
    dispatch({ type: AIRCRAFT_REQUEST })
    axios
        .get("http://localhost:8080/aircraft/", paramobj)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: GET_AIRCRAFT_SUCCESS , payload:res.data})
        })
        .catch(() => {
            dispatch({ type: AIRCRAFT_FAILURE })
        })
}