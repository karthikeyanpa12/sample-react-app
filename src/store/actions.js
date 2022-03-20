import { getData } from "./api";

export const add = () => {
  return {
    type: "add",
    payload: "",
  };
};

export const sub = () => ({
  type: "sub",
  payload: "",
});

export const getDataList =  () => {
  return async (dispatch) => {
    const data = await getData();
    dispatch({ type: "GET_DATA", payload: data?.data });
  };
};
