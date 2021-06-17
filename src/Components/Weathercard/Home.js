import React, { useState, useEffect } from "react";
import axios from "axios";
import Weathercard from "./Weathercard";
import Nav from "./Nav";

function Home() {
  const [temp, settemp] = useState({ weather: {}, loading: true });
  const [val, setval] = useState({ search: "" });

  const getSearch = (search) => {
    setval({ search });
  };
  useEffect(() => {
    const fetchdata = (search) => {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          let { name, main, sys} =
            response.data;
          let srise = new Date(
            response.data.sys.sunrise * 1000
          ).toLocaleTimeString("en-US");
          let sset = new Date(
            response.data.sys.sunset * 1000
          ).toLocaleTimeString("en-US");
          let temperature = Math.floor(response.data.main.temp - 273.15);
          let humid = response.data.main.humidity;
          let obj = { name, main, sys};
          obj["sunrise"] = srise;
          obj["sunset"] = sset;
          obj["temp"] = temperature;
          obj["desc"] = response.data.weather.map(i=> i.description)
          obj["weatherId"] = response.data.weather.map(i=> i.id)
          obj["weatherIcon"] = response.data.weather.map(i=> i.icon)
          obj["humid"] = humid;
          settemp({ weather: obj, loading: false });
        })
        .catch((err) => {
          settemp({ weather: { status: "City Not Found" }, loading: false });
        });
    };
    if (val.search !== "") fetchdata(val.search);
  }, [val.search]);
  let loading = (
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
  if (temp.loading === false) {
    loading = <Weathercard weather={temp.weather} />;
  }
  return (
    <div style={{ width: "100%", height: "100vh"}}>
      <Nav func={getSearch} />
      {JSON.stringify(temp.weather) === '{}' ? (
        <div style={{ fontWeight: "thin", color: "#ffffff", display: "flex",justifyContent: "center"}}>
          Search city to find the weather
        </div>
      ) : (
        <div style={{ width: "100%", height: "70%" }}>{loading}</div>
      )}
    </div>
  );
}

export default Home;
