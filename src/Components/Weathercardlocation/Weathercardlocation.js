import React from "react";
import '../Weathercard/Weathercard.css'


function Weathercardlocation(props) {
  const card = props.data.map((item) => {
    return (
      <div key={item.id} className="card mt-5 mb-5 bg-info weatherCardchild" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="card-title text-decoration-underline text-light">{item.name}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-text  text-light">
              <span className="fs-1 ">{item.temperature}</span>&deg;C
            </p>
            <div className="d-flex flex-column align-items-end">
              <h6 className="card-subtitle mt-3 mb-3 text-light text-capitalize">{item.desc+'.'}
              </h6>
             {item.weatherIcon.map((icon, index) =>{
               return (
                 <img key={index} style={{width:'50px'}} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
               )
             })}
            </div>
          </div>
          <button onClick={()=>{
            props.getData(item.id)
            props.func(item.id)
          }} className="btn text-light" style={{backgroundColor: '#ffffff4d'}}>See full forecast</button>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="container mt-5 p-5 d-flex justify-content-evenly align-items-center flex-wrap">
            {card}
      </div>
    </>
  );
}

export default Weathercardlocation;
