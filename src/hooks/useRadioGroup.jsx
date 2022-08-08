import { useEffect, useState } from "react";
import model from "../files/model.json";

export default function useRadioGroup(list) {
  const [selected, setSelected] = useState(list[0]?.name);

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
