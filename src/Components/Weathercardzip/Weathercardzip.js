import React from "react";
import moment from "moment";
import "../Weathercard/Weathercard.css";

function Weathercardzip(props) {
  let { humid, sunrise, sunset, desc, temp, name, clouds, wind } =
    props.weather;
  return (
    <>
      <div className="weatherCard">
        {props.weather.status ? (
          <div style={{ color: "#ffffff" }}>{props.weather.status}</div>
        ) : (
          <div className="card text-white bg-info mb-3 weatherCardchild">
            <div className="d-flex justify-content-between card-header">
              <strong>Weather Today</strong>
              <div className="d-flex align-items-center">
                <span style={{ fontWeight: "bold" }}>
                  Date: &nbsp;{moment().format("LL")} &nbsp;
                </span>
                (
                <small style={{ fontWeight: "thin !important" }}>
                  {moment().format("dddd")}
                </small>
                )
              </div>
            </div>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h4 className="card-title">{name && name}&nbsp;&nbsp;<span className="fs-6">({props.search})</span></h4>
                <h5 className="card-title d-flex">
                  <i className="ri-temp-hot-line"></i> {temp}&deg;C
                </h5>
                <h5 className="card-title d-flex text-capitalize">
                  <i className="ri-rainy-fill"></i>&nbsp;
                  {desc && desc.map((d) => d + ".")}
                </h5>
                <h5 className="card-title d-flex">
                  <i className="ri-cloud-fill"></i>&nbsp;{clouds.all}%
                </h5>
              </div>
              <div>
                <h6 className="card-text">Humidity: {humid}%</h6>
                <h6 className="card-text">Sunrise : {sunrise}</h6>
                <h6 className="card-text">Sunset : {sunset}</h6>
                <h6 className="card-text">Wind: {wind.speed} m/s</h6>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Weathercardzip;
