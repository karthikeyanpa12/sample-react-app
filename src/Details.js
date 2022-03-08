import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

function Details() {
  let params = useParams();
  const location = useLocation();
  return (
    <div>
      <Link to="/">Back</Link>
      <div>detail: {params?.id}</div>
      <div>location: {location.pathname}</div>
    </div>
  );
}

export default Details;
