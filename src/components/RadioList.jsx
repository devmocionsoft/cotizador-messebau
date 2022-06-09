import { useEffect, useState } from "react";

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
        <label key={key}>
          <input
            type="radio"
            value={item.name}
            onChange={() => {}}
            checked={selected === item.name}
            name="option"
          />
          {item.name}
        </label>
      ))}
    </div>
  );
}
