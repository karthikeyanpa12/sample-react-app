import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  let params = useParams();
  return <div>detail {params?.id}</div>;
}

export default Details;
