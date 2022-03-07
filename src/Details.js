import React from "react";
import { useParams, Link } from "react-router-dom";

function Details() {
  let params = useParams();
  return (
    <div>
      <Link to="/">Back</Link>
      detail {params?.id}
    </div>
  );
}

export default Details;
