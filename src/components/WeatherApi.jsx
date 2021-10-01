import React from "react";
import { useSelector } from "react-redux";

const WeatherApi = () => {
  const { weather } = useSelector((state) => state);
  const { data } = weather;
  const fahrenheit =
    data && ((data?.main?.temp * 1.8 - 459.67).toFixed(2) || "0");
  const celsius = data && ((data?.main?.temp - 273.15).toFixed(2) || "0");
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-2 offset-md-1 text-center">
          <p className="text-light">{data?.weather[0]?.description}</p>
          <p>
            <img
              src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
              alt={data?.weather[0]?.description}
            />
          </p>
          <p className="text-light">{`${data?.name} - ${data?.sys?.country}`}</p>
        </div>
        <div className="col-12 col-md-2 text-center">
          <p className="text-light">temp</p>
          <div className="title">
            <p className="mb-2 text-light">{data?.main?.temp}K</p>
            <p className="mb-2 text-light">
              {fahrenheit}
              <sup className="text-light">&#8457;</sup>
            </p>
            <p className="text-light">
              {celsius}
              <sup className="text-light">&#8451;</sup>
            </p>
          </div>
        </div>
        <div className="col-12 col-md-2 text-center">
          <div>
            <p className="text-light">humidity</p>
            <p className="text-light">{data?.main?.humidity}</p>
          </div>
        </div>
        <div className="col-12 col-md-2 text-center">
          <div>
            <p className="text-light">pressure</p>
            <p className="text-light">{data?.main?.pressure}</p>
          </div>
        </div>
        <div className="col-12 col-md-2 text-center">
          <div>
            <p className="text-light">wind</p>
            <p className="text-light">{data?.wind?.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApi;
