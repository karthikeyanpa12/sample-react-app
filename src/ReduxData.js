import { useSelector } from "react-redux";

export default function ReduxData() {
  const counter = useSelector((state) => state.counter);

  return <div>Counter {counter}</div>;
}
