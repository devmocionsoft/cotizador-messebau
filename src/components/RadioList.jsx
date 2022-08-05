import { useEffect, useState } from "react";

export default function RadioList({ list, label }) {
  const [selected, setSelected] = useState("ninguno");

  useEffect(() => {
    list.forEach((item) => {
      if (item.name === selected) {
        item.visible = true;
      } else {
        item.visible = false;
      }
    });
  }, [selected, list]);

  const onChangeValue = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="radio_container" onChange={onChangeValue}>
      {list.map((item, key) => (
        <Item key={key} {...{ item, selected, label }} />
      ))}
      <label>
        <input type="radio" value="ninguno" name={label} />
        Ninguno
      </label>
    </div>
  );
}

const Item = ({ item, selected, label }) => {
  const validation = selected === item.name;
  const labels = item.name;
  return (
    <>
      <label style={{ display: "inline-flex" }}>
        <input
          type="radio"
          value={item.name}
          onChange={() => {}}
          checked={validation}
          name={label}
        />
        {labels}
      </label>
    </>
  );
};
