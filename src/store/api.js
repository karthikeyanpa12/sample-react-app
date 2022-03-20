import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

export const getData = () => {
  return axios.get(url);
};
