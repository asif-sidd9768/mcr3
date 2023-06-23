import { useContext } from "react"
import { SnacksContext } from "../../../main"
import { sortDirectionSnacksAction, sortTypeSnacksAction } from "../../../actions/snacksActions"

export const TableHeader = () => {
  const {snackState, snackDispatch} = useContext(SnacksContext)
  const handleHeaderClick = (type) => {
    if (snackState.sortType === type) {
      snackDispatch(sortDirectionSnacksAction(snackState.sortDirection === "asc" ? "desc" : "asc"))
    } else {
      snackDispatch(sortTypeSnacksAction(type))
      snackDispatch(sortDirectionSnacksAction("asc"))
    }
  }
  return (
    <thead>
      <tr>
        <th onClick={() => handleHeaderClick("id")}>ID</th>
        <th onClick={() => handleHeaderClick("name")}>Product Name</th>
        <th onClick={() => handleHeaderClick("weight")}>Product Weight</th>
        <th onClick={() => handleHeaderClick("price")}>Price (INR)</th>
        <th onClick={() => handleHeaderClick("calories")}>Calories</th>
        <th colSpan={3} onClick={() => handleHeaderClick("ingredients")}>Ingredients</th>
      </tr>
    </thead>
  )
}