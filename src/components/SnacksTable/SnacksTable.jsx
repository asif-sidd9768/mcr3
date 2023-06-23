import { useContext } from "react"

import "./SnacksTable.css"
import { getSortedSnacks } from "../../utils/getSortedSnacks"
import { SnacksContext } from "../../main"
import { searchSnacksAction } from "../../actions/snacksActions"
import { TableHeader } from "./TableHeader/TableHeader"

export const SnacksTable = () => {
  const {snackState, snackDispatch} = useContext(SnacksContext)

  const handleSnackSearch = (event) => {
    snackDispatch(searchSnacksAction(event.target.value))
  }

  const searchSnacks = snackState.snacks.filter(({product_name, ingredients}) => product_name.toLowerCase().includes(snackState.searchInput.toLowerCase()) || ingredients.some(i => i.toLowerCase().includes(snackState.searchInput.toLowerCase())))
  const sortedSnacks = getSortedSnacks(searchSnacks, snackState.sortType, snackState.sortDirection)
  
  return (
    <div>
      <h1>Snack Table</h1>
      <div>
        <input onChange={handleSnackSearch} className="snack-search-input" type="text" placeholder="Search with Products or Ingredients" />
      </div>
      <table>
        <TableHeader />
        <tbody>
          {
            sortedSnacks.length > 0 ? <>
              {
                sortedSnacks.map(({id, product_name, product_weight, price, calories, ingredients}) => 
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{product_name}</td>
                    <td>{product_weight}</td>
                    <td>{price}</td>
                    <td>{calories}</td>
                    <td>{ingredients.join(", ")}</td>
                  </tr>
                )
              }
            </> : <div>
              <p className="empty-text">Nothing found!try another combination</p>
            </div>
          }
          
        </tbody>
      </table>
    </div>
  )
}