import { SET_ROUTE_ERROR, SET_TRACK_ERROR } from "../constants";

const initialState = {
  getRoutsError: null,
  getTrackError: null,
};

const errors = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ROUTE_ERROR:
      return { ...state, getRoutsError: payload };
    case SET_TRACK_ERROR:
      return { ...state, getTrackError: payload };
    default:
      return state;
  }
};

export default errors;
