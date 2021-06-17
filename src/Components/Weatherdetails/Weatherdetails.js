import React from "react";
import { withRouter } from "react-router";

function Weatherdetails(props) {
  let {
    name,
    weatherIcon,
    temperature,
    desc,
    feelslike,
    clouds,
    humid,
    pressure,
    rain,
    snow,
  } = props.curdata;
  const time = new Date();
  return (
    <div
      style={{ width: "100%", height: "92vh" }}
      className="container mt-5 p-5"
    >
      <div className="container mt-3 p-5 text-light">
        <div>
          <span className="d-flex align-items-flex-start">
            <h1>{name}</h1>
          </span>
          <p style={{ color: "#808080" }}>
            Updated as of {time.getHours()}:{time.getMinutes()}:
            {time.getSeconds()}
          </p>
        </div>
        <div
          style={{ width: "50%" }}
          className="d-flex justify-content-between align-items-center"
        >
          <span className="d-flex align-items-center">
            {weatherIcon.map((icon, index) => {
              return (
                <img
                  key={index}
                  style={{ width: "100px", marginLeft: "-1.5rem" }}
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="weather icon"
                />
              );
            })}
            &nbsp;&nbsp;&nbsp;
            <h1>{temperature}&deg;C</h1>
          </span>
          <span>
            <p className="fs-5 mt-3 text-capitalize">
              {desc.map((d) => d + ". ")}
            </p>
            <p className="fs-6 mt-3">Feels like : {feelslike}&deg;C</p>
          </span>
        </div>
        <div
          style={{ width: "100%" }}
          className="mt-5 d-flex justify-content-between align-items-center"
        >
          <span
            style={{ width: "10%" }}
            className="d-flex justify-content-between align-items-center"
          >
            <i className="ri-cloud-fill fs-4"></i>
            <small>
              <p className="mb-1 fst-light text-muted">Clouds</p>
              <strong>{clouds}%</strong>
            </small>
          </span>
          <span
            style={{ width: "10%" }}
            className="d-flex justify-content-between align-items-center"
          >
            <i className="ri-drop-fill fs-4"></i>
            <small>
              <p className="mb-1 fst-light text-muted">Humidity</p>
              <strong>{humid}%</strong>
            </small>
          </span>
          <span
            style={{ width: "10%" }}
            className="d-flex justify-content-between align-items-center"
          >
            <i className="ri-compass-4-line fs-4"></i>
            <small>
              <p className="mb-1 fst-light text-muted">Pressure</p>
              <strong>{pressure}hPa</strong>
            </small>
          </span>
          <span
            style={{ width: "10%" }}
            className="d-flex justify-content-between align-items-center"
          >
            <i className="ri-rainy-fill fs-4"></i>
            <small>
              <p className="mb-1 fst-light text-muted">Rain</p>
              <strong>{rain === null ? "No rain" : rain + "mm"}</strong>
            </small>
          </span>
          <span
            style={{ width: "10%" }}
            className="d-flex justify-content-between align-items-center"
          >
            <i className="ri-snowy-fill fs-4"></i>
            <small>
              <p className="mb-1 fst-light text-muted">Snow</p>
              <strong>{snow === null ? "No rain" : snow + "mm"}</strong>
            </small>
          </span>
        </div>
        <button
          onClick={() => props.history.goBack()}
          style={{ marginTop: "5rem" }}
          className="btn text-light bg-info"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default withRouter(Weatherdetails);
