import { useState } from "react";
import Input from "../../components/input";

export default function PatternForm({ pattern }) {
  const initialState = Object.fromEntries(
    Object.entries(pattern)
      .filter(([key, value]) => !["filePath", "id", "name"].includes(key))
      .filter(([key, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [key, ""])
  );

  const [inputs, setInputs] = useState(initialState);

  const handleChange = (key, maxValue, event) => {
    let val = event.target.value;
    if (val !== "" && Number(val) > maxValue) {
      val = maxValue;
    }
    setInputs((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <form>
      {Object.entries(pattern).map(([key, value]) => {
        if (["filePath", "id", "name"].includes(key)) return null;
        if (value === undefined || value === null) return null;

        const label = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());

        return (
          <div key={key} className="mb-2">
            <label>
              <strong>{label}:</strong>
              <Input
                type="number"
                max={value}
                value={inputs[key]}
                placeholder={`Max ${value}`}
                className="ml-2 border rounded px-2 py-1"
                onChange={(e) => handleChange(key, value, e)}
              />
            </label>
          </div>
        );
      })}
    </form>
  );
}
