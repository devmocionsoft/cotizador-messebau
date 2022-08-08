import { useEffect, useState } from "react";

export default function useRadioGroup(list, option) {
  const [selected, setSelected] = useState("ninguno");

  useEffect(() => {
    let v = true;
    setSelected("ninguno")
    list.forEach((item) => {
      if (item.options.includes(option) && v) {
        setSelected(item.name);
        v = false;
      }
    });
  }, [option]);

  useEffect(() => {
    list.forEach((item) => {
      if (item.name === selected) {
        item.visible = true;
      } else {
        item.visible = false;
      }
    });
  }, [selected, list]);

  const onChangeValue = (event) => setSelected(event.target.value);
  return { selected, onChangeValue };
}
