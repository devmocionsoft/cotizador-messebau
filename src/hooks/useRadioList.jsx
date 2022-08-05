import { useState } from "react"
import model from "../files/model.json"

export default function useRadioList() {
  const [actualModule, setActualModule] = useState(1)
  const [selected, setSelected] = useState(list[0]?.name);
  return (
    <div>useRadioList</div>
  )
}
