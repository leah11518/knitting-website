import { useState } from "react";

export const PatternSteps = () => {
  const [count, setCount] = useState({
    yoke: 0,
    body: 0,
    ribbing: 0,
    arm1: 0,
    ribbingarm1: 0,
    arm2: 0,
    ribbingarm2: 0,
  });
  let string = "string";
  const integer = 2;
  const array = ["string", "kfdf"];
  const dictionary = {
    yoke: [27, "repeats"],
    body: [47, "cm"],
    ribbing: [7, "cm"],
    arm1: [38, "cm"],
    ribbingarm1: [7, "cm"],
    arm2: [38, "cm"],
    ribbingarm2: [7, "cm"],
  };
  return (
    <div className="card">
      {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      {Object.entries(dictionary).map(([key, value]) => {
        const countCap = value[0];
        const unit = value[1];
        return (
          <div className="flex items-center gap-1">
            <p>{key}</p>
            <button>{unit}</button>
          </div>
        );
      })}
    </div>
  );
};
