import { useState } from "react";

const data = { a: 1, b: 2, c: 3 };

const Parent = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <InputComponent onChange={(e) => setValue(e.target.value)} />
      <Child value={data[value]} ></Child>
    </div>
  );
};

const InputComponent = ({ onChange }) => {
  return <input type="text" onChange={onChange} />;
};

const Child = ({ value }) => {
  return <div>{value}</div>;
};

export default Parent;
