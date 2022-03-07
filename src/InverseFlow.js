import { useState } from "react";

const Parent = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <InputComponent onChange={(e) => setValue(e.target.value)} />
      <Child value={value} ></Child>
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
