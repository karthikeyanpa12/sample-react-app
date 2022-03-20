import { useSelector } from "react-redux";

export default function ReduxData() {
  const counter = useSelector((state) => state.counter);

  const apiData = useSelector((state) => state.apiData);

  return (
    <div>
      Counter {counter}
      <div>
        {apiData?.map((data) => {
          return (
            <div
              key={data?.id}
              style={{ padding: 4, border: "1px dotted black" }}
            >
              {data?.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
