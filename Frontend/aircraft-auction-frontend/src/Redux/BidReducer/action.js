import { PAYMENT_CONFIRMATION_SUCCESS, BID_FAILURE, BID_REQUEST, ADD_BID_SUCCESS,GET_BID_SUCCESS} from "./actionTypes";
import axios from "axios";

export const addbid = (data) => (dispatch) => {
    dispatch({ type: BID_REQUEST });
    axios
        .post("http://localhost:8080/bid/add", data)
        .then((res) => {
            console.log(res.data);
            dispatch({ type: ADD_BID_SUCCESS, payload: res.data });
            dispatch({ type: GET_BID_SUCCESS });

            dispatch({ type: PAYMENT_CONFIRMATION_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: BID_FAILURE });
        });
};