// import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import HomeLocation from "./Components/Weathercardlocation/Home";
import Home from "./Components/Weathercard/Home";
import Navmain from "./Components/Nav/Navmain";
import Homezip from "./Components/Weathercardzip/Home";
import Details from "./Components/Weatherdetails/Weatherdetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [lat, setlat] = useState([]);
  const [long, setlong] = useState([]);
  const [data, setdata] = useState([]);
  const [curdata, setcurdata] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setlat(position.coords.latitude);
      setlong(position.coords.longitude);
    });
    const fetchdata = async () => {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${long}&cnt=50&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          let newarr = [...data];
          if (response.data !== null) {
            response.data.list.map((city) => {
              let { id, name, rain, snow, clouds } = city;
              let temperature = Math.floor(city.main.temp - 273.15);
              if (city.rain !== null) rain = city.rain["1h"];
              let humid = city.main.humidity;
              let feelslike = Math.floor(city.main.feels_like - 273.15);
              let pressure = city.main.pressure;
              if (city.snow !== null) snow = city.snow["1h"];
              if (city.clouds !== null) clouds = city.clouds.all;
              let desc = city.weather.map((i) => i.description);
              let weatherId = city.weather.map((i) => i.id);
              let weatherIcon = city.weather.map((i) => i.icon);
              let obj = {
                id,
                name,
                snow,
                rain,
                temperature,
                humid,
                desc,
                weatherId,
                weatherIcon,
                clouds,
                feelslike,
                pressure,
              };
              newarr.push(obj);
              return newarr;
            });
            setdata(newarr);
          }
        })
        .catch((err) => {
          // settemp({ weather: { status: "City Not Found" }, loading: false });
          console.log(err);
        });
    };
    if (data.length === 0) fetchdata();
    // if (val.search !== "") fetchdata(val.search);
    // return () => {
    //     setlat([])
    //     setlong([])
    //     setdata([])
    // }
  }, [lat, long, data]);

  const getData = (id) => {
    let d = data.find((item) => item.id === id);
    setcurdata(d);
  };

  return (
    <BrowserRouter>
      <div>
        <Navmain />
        <Switch>
          <Route path="/bycity" component={Home} />
          <Route path="/byzip" component={Homezip} />
          <Route path="/:id" render={() => <Details curdata={curdata} />} />
          <Route
            exact
            path="/"
            render={() => <HomeLocation getData={getData} data={data} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
