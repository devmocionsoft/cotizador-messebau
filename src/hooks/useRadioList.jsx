import { useState } from "react"
import model from "../files/model.json"

export default function useRadioList() {
  const [actualModule, setActualModule] = useState(1)
  return (
    <div>useRadioList</div>
  )
}
