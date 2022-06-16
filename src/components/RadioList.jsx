import { useEffect, useState } from "react";
import * as THREE from "three";

export default function RadioList({ list }) {
  const [selected, setSelected] = useState(list[0].name);

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
        <Item key={key} item={item} selected={selected} />
      ))}
      <label>
        <input type="radio" value="ninguno" name="option" />
        Ninguno
      </label>
    </div>
  );
}

const Item = ({ item, selected }) => {
  const validation = selected === item.name;

  return (
    <>
      <label>
        <input
          type="radio"
          value={item.name}
          onChange={() => {}}
          checked={validation}
          name="option"
        />
        {item.name}
      </label>
    </>
  );
};
