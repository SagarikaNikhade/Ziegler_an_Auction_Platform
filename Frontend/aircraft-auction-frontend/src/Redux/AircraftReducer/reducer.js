import { AIRCRAFT_FAILURE, AIRCRAFT_REQUEST, ADD_AIRCRAFT_SUCCESS, GET_AIRCRAFT_SUCCESS } from "./actionTypes"

const initialState = {
  isLoading: false,
  isError: false,
  aircrafts:[],
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AIRCRAFT_REQUEST:
      return { ...state, isLoading: true }
    case ADD_AIRCRAFT_SUCCESS:
      return { ...state, isLoading: false}
    case AIRCRAFT_FAILURE:
      return { ...state, isLoading: false, isError: true }
    case GET_AIRCRAFT_SUCCESS:
      return { ...state, isLoading: false, aircrafts:payload }
    default:
      return state;
  }
}