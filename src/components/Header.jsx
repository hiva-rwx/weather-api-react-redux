import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { WeatherAction } from "../redux/actions/WeatherAction";
import { SET_ERROR, SET_LOADING } from "../redux/type";

const Header = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const { weather } = useSelector((state) => state);
  const { data, error } = weather;

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (data !== null) setCity("");

      if (city.trim() === "") {
        return dispatch({ type: SET_ERROR, payload: "please enter city !!!" });
      }

      dispatch({ type: SET_LOADING });
      dispatch(WeatherAction(city));
    },
    [city, data, dispatch]
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-center bg-light py-4 flex-column">
            <form onSubmit={(e) => handleSubmit(e)} className="from d-flex">
              <input
                className="form-control"
                placeholder="city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                &#128269;
              </button>
            </form>
          </div>
          {error && <p className="text-danger text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
