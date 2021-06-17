import React from "react";
import moment from "moment";
import "./Weathercard.css";

function Weathercard(props) {
  let {humid,sunrise,sunset,desc,weatherIcon,temp,name} = props.weather
  return (
    <>
      <div className="weatherCard">
        {props.weather.status ? (
          <div style={{ color: "#ffffff" }}>{props.weather.status}</div>
        ) : (
          <div className="card text-light bg-info mb-3 weatherCardchild">
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
              <div style={{width:'50%'}}>
              <h4 className="card-title">
                  {name && name}
                </h4>
                <h3 className="card-title d-flex align-items-center">{temp}&deg;C{weatherIcon.map((icon,index)=>{
                  return (
                    <img
                    key={index}
                    style={{ width: "38px",marginLeft: ".2rem"}}
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="weather icon"
                  />
                  )
                })}</h3>
                <h5 className="card-title text-capitalize">{desc.map(d=>d+'. ')}</h5>
              </div>
              <div>
                <h6 className="card-text">Humidity: {humid}%</h6>
                <h6 className="card-text">Sunrise : {sunrise}</h6>
                <h6 className="card-text">Sunset : {sunset}</h6>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Weathercard;
