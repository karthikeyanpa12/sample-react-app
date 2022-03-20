import React from "react";
import { useDispatch } from "react-redux";
import { add, sub, getDataList } from "./store/actions";
import ReduxData from "./ReduxData";

export default function SampleRedux() {
  const dispatch = useDispatch();
  const addition = () => dispatch(add());
  const subtraction = () => dispatch(sub());

  const getData = () => {
    dispatch(getDataList());
  };

  return (
    <div>
      <button onClick={addition}>+</button>
      <button onClick={subtraction}>-</button>
      <button onClick={getData}>Get Data List</button>
      <br />
      <ReduxData />
    </div>
  );
}
