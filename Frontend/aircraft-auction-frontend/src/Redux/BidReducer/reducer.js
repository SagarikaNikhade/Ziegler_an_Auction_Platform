import { BID_FAILURE, BID_REQUEST, ADD_BID_SUCCESS, GET_BID_SUCCESS } from "./actionTypes"

const initialState = {
  isLoading: false,
  isError: false,
  currentBid: 0,
  highestBidder: null,
  bids: [],
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BID_REQUEST:
      return { ...state, isLoading: true };
    case ADD_BID_SUCCESS:
      return {
        ...state,
        currentBid: payload.amount,
        highestBidder: payload.bidderName,
      };
    case GET_BID_SUCCESS:
      return { ...state, isLoading: false, bids: payload };
    case PAYMENT_CONFIRMATION_SUCCESS:
      return {
        ...state,
        paymentConfirmed: true,
      };
    case BID_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
