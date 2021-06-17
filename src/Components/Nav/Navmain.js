import React from "react";
import { NavLink } from "react-router-dom";

function Navmain() {
  return (
    <div>
      <div
        style={{ width: "100%"}}
        className="d-flex align-items-center text-light"
      >
        <p style={{letterSpacing:'.5px'}} className="logo"><span className="text-info">W</span>eather <span className="text-info">A</span>pp</p>
        <nav
          style={{
            position: "absolute",
            top: "0%",
            right: "0%",
            padding: "40px 40px",
            fontWeight: "bold",
            fontSize: "13px",
          }}
          className=" navbar navbar-expand-lg navbar-light"
        >
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                exact={true}
                style={{ color: "#808080"}}
                activeClassName="active"
                activeStyle={{ color: "white" }}
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Your Location
              </NavLink>
              <NavLink
              style={{ color: "#808080"}}
                activeStyle={{ color: "white" }}
                className="nav-link"
                to="/bycity"
              >
                Cities
              </NavLink>
              <NavLink
                style={{ color: "#808080"}}
                activeStyle={{ color: "white" }}
                className="nav-link"
                to="/byzip"
              >
                Zip Codes
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navmain;
