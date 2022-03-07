import { memo } from "react";

const SampleRender = () => {
  console.log("SampleRender");
  return "SampleRender";
};

export default memo(SampleRender);
