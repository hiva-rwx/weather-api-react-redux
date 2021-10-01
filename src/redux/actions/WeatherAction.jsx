import axios from "axios";
import { GET_WEATHER, SET_ERROR, SET_LOADING } from "../type";
import { REACT_APP_API_KEY } from "./../Key_Api";

export const WeatherAction = (city) => {
  return async (dispatch, getState) => {
    try {
      await axios({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}`,
      })
        .then((res) => {
          dispatch({ type: GET_WEATHER, payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: SET_ERROR, payload: "This city is not exist !!!" });
        });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: "error" });
    }
  };
};


export const setError = (msg) => {
  return {
    type: SET_ERROR,
    payload: msg,
  };
};
