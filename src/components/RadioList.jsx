import { useState } from "react";
import useRadioGroup from "../hooks/useRadioGroup";

const options = ["1", "2", "3", "4", "5", "6"];
export default function RadioList({ layers }) {
  const [selected, setSelected] = useState(options[0]);
  if (!layers) return null;
  return (
    <div className="radio_cont">
      <HorizontalRadioGroup option={selected} setter={setSelected} />
      <div className="radio_list">
        {layers.map((layer) =>
          layer.items.length > 0 ? (
            <div key={layer.name} className="item_container">
              <h4>{layer.name}</h4>
              <RadioGroup
                list={layer.items}
                label={layer.name}
                option={selected}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

function RadioGroup({ list, label, option }) {
  const { selected, onChangeValue } = useRadioGroup(list, option, label);
  return (
    <div className="radio_container" onChange={onChangeValue}>
      <label>
        <input
          type="checkbox"
          value="ninguno"
          name={label}
          checked={selected === "ninguno"}
          onChange={() => {}}
        />
        Ninguno
      </label>
      {list.map((item, key) => {
        const labels = item.name;
        const show = item.options.includes(option);
        if (!show) return null;
        const validation = selected === labels;
        return (
          <label
            className="form-control"
            key={key}
            style={{ display: "inline-flex" }}
          >
            <input
              type="checkbox"
              value={item.name}
              onChange={() => {}}
              checked={validation}
              name={label}
            />
            {labels}
          </label>
        );
      })}
    </div>
  );
}

function HorizontalRadioGroup({ option, setter }) {
  const onChangeValue = (event) => setter(event.target.value);
  return (
    <div>
      <h4 style={{ margin: 0, color: "white" }}>Distribución</h4>
      <div
        style={{ display: "flex", marginBottom: 10, color: "white" }}
        onChange={onChangeValue}
      >
        {options.map((item) => (
          <div
            key={item}
            onClick={() => setter(item)}
            className={`radio_box ${option === item && "radio_selected"}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
