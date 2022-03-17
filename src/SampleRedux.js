import React from "react";
import { useDispatch } from "react-redux";
import { add, sub } from "./store/actions";
import ReduxData from "./ReduxData";

export default function SampleRedux() {
  const dispatch = useDispatch();
  const addition = () => dispatch(add());
  const subtraction = () => dispatch(sub());
  return (
    <div>
      <button onClick={addition}>+</button>
      <button onClick={subtraction}>-</button>
      <br />
      <ReduxData />
    </div>
  );
}
