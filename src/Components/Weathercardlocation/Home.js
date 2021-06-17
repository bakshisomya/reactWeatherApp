import React from "react";
import { withRouter } from "react-router";
import Weathercardlocation from "./Weathercardlocation";

function Home(props) {
  const changeRoute = (id)=>{
    props.history.push(`/${id}`)
  }

  let loading = (
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
  return (
    <div>
      {JSON.stringify(props.data) === "[]" ? (
        <div className="container mt-5" style={{ height: "92vh" }}>
          {loading}
        </div>
      ) : (
        <>
            <Weathercardlocation func={changeRoute} getData={props.getData} data={props.data} />
        </>
      )}
    </div>
  );
}

export default withRouter(Home);
