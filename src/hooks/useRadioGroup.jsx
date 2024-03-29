import { useEffect, useState } from "react";

export default function useRadioGroup(list, option, name) {
  const [selected, setSelected] = useState("ninguno");

  useEffect(() => {
    setSelected("ninguno")
    // name === "Counter"
    if (name === "Tarimas" || name === "Zoclos" || name === "Sillas" || name === "Mesas" || name === "Cabeceras" ) {
      let v = true;
      list.forEach((item) => {
        if (item.options.includes(option) && v) {
          setSelected(item.name);
          v = false;
        }
      });
    }
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
