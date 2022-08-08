import { useState } from "react";
import useRadioGroup from "../hooks/useRadioGroup";

export default function RadioList({ layers }) {
  const [selected, setSelected] = useState("2");
  if (!layers) return null;
  return (
    <div className="radio_list">
      {layers.map((layer) => (
        <div key={layer.name} className="item_container">
          <h4>{layer.name}</h4>
          <RadioGroup list={layer.items} label={layer.name} option={selected} />
        </div>
      ))}
    </div>
  );
}

function RadioGroup({ list, label, option }) {
  const { selected, onChangeValue } = useRadioGroup(list, option);
  return (
    <div className="radio_container" onChange={onChangeValue}>
      {list.map((item, key) => {
        const labels = item.name;
        const show = item.options.includes(option)
        if (!show) return null
        const validation = selected === labels;
        return (
          <label key={key} style={{ display: "inline-flex" }}>
            <input
              type="radio"
              value={item.name}
              onChange={() => {}}
              checked={validation}
              name={label}
            />
            {labels}
          </label>
        );
      })}
      <label>
        <input type="radio" value="ninguno" name={label} checked={selected === "ninguno"} onChange={() => {}}/>
        Ninguno
      </label>
    </div>
  );
}
