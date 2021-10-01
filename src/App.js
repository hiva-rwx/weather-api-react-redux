import React, { Fragment } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";
import WeatherApi from "./components/WeatherApi";
const App = () => {
  const { weather } = useSelector((state) => state);
  const { loading, data } = weather;
  return (
    <Fragment>
      <Header />
      {data !== null &&
        (loading ? (
          <p className="text-danger text-center">Loading...</p>
        ) : (
          <WeatherApi />
        ))}
    </Fragment>
  );
};

export default App;
