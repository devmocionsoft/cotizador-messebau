import useRadioGroup from "../hooks/useRadioGroup";

export default function RadioList({ layers }) {
  return (
    <div className="radio_list">
      {layers
        ? Object.keys(layers).map((label) => {
            let list = layers[label];
            // label === "Sillas" &&
            //   (list = [layers[0].children, layers[1].children]);

            return (
              <div key={label} className="item_container">
                <h4>{label}</h4>
                <RadioGroup list={list} label={label} />
              </div>
            );
          })
        : null}
    </div>
  );
}

function RadioGroup({ list, label }) {
  const { selected, onChangeValue } = useRadioGroup(list);
  return (
    <div className="radio_container" onChange={onChangeValue}>
      {list.map((item, key) => {
        const labels = item.name;
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
        <input type="radio" value="ninguno" name={label} />
        Ninguno
      </label>
    </div>
  );
}
