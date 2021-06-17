import React,{ useState, useEffect} from 'react'
import Nav from './Nav'
import axios from "axios";
import Weathercardzip from './Weathercardzip'

function Home() {
    const [zipdata, setzipdata] = useState({weather:{},loading:true})
    const [zipsearch, setzipsearch] = useState({search : ''})

    const getSearch = (search)=>{
        setzipsearch({search})
    }

    useEffect(() => {
        const fetchdata = (search) => {
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?zip=${search},in&appid=${process.env.REACT_APP_API_KEY}`
              )
              .then((response) => {
                let { name, weather, main, sys, wind ,clouds} =
                  response.data;
                let srise = new Date(
                  response.data.sys.sunrise * 1000
                ).toLocaleTimeString("en-US");
                let sset = new Date(
                  response.data.sys.sunset * 1000
                ).toLocaleTimeString("en-US");
                let temperature = Math.floor(response.data.main.temp - 273.15);
                let humid = response.data.main.humidity;
                let desc = response.data.weather.map((i) => i.description);
                let obj = { name, weather, main, sys, wind,clouds };
                obj["sunrise"] = srise;
                obj["sunset"] = sset;
                obj["temp"] = temperature;
                obj["desc"] = desc;
                obj["humid"] = humid;
                setzipdata({ weather: obj, loading: false });
              })
              .catch((err) => {
                setzipdata({ weather: { status: "City Not Found" }, loading: false });
                console.log(err)
              });
          };
          if (zipsearch.search !== "") fetchdata(zipsearch.search);
    }, [zipsearch])
    let loading = (
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
    if (zipdata.loading === false) {
      loading = <Weathercardzip  search={zipsearch.search && zipsearch.search} weather={zipdata.weather} />;
    }
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <Nav locationfunc={getSearch}/>
            {JSON.stringify(zipdata.weather) === '{}' ? (
        <div style={{ fontWeight: "thin", color: "#ffffff", display: "flex",justifyContent: "center"}}>
          Search Indian cities using zip code to find the weather
        </div>
      ) : (
        <div style={{ width: "100%", height: "70%" }}>{loading}</div>
      )}
        </div>
    )
}

export default Home
