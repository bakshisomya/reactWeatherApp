import React, { useState } from "react";
import "../Weathercard/Weathercard.css";

function Nav(props) {
  const [searchlocation, setsearchlocation] = useState("");
  const onChangeHandle = (e) => {
    setsearchlocation(e.target.value);
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (
      searchlocation === "" ||
      isNaN(searchlocation) ||
      searchlocation.length !== 6
    ) {
      window.alert("Invalid Search!\n(zip codes are 6 digit codes)");
      setsearchlocation("");
    } else {
      props.locationfunc(searchlocation.trim());
      setsearchlocation("");
    }
  };
  return (
    <div style={{ width: "100%", height: "20%" }} className="mt-5 p-5">
      <div className="d-flex justify-content-center align-items-center">
        <form className="form" onSubmit={onSubmitHandle}>
          <input
            onChange={onChangeHandle}
            className="form-control me-2"
            style={{ width: "70%" }}
            type="search"
            value={searchlocation}
            placeholder="Enter zip code to find weather..."
          />

          <button className="btn btn-outline-info" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Nav;
