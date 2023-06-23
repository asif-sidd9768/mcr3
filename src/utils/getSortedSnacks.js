export const getSortedSnacks = (snacks, sortType, sortDirection) => {
  const sortedSnacks = [...snacks]
  switch (sortType) {
    case "id":
      return sortedSnacks.sort((a, b) => (sortDirection === "asc" ? a.id - b.id : b.id - a.id))
    case "name":
      return sortedSnacks.sort((a, b) => (sortDirection === "asc" ? a.product_name.localeCompare(b.product_name) : b.product_name.localeCompare(a.product_name)))
    case "weight":
      return sortedSnacks.sort((a, b) => (sortDirection === "asc" ? a.product_weight.split("g")[0] - b.product_weight.split("g")[0] : b.product_weight.split("g")[0] - a.product_weight.split("g")[0]))
    case "price":
      return sortedSnacks.sort((a, b) => (sortDirection === "asc" ? a.price - b.price : b.price - a.price))
    case "calories":
      return sortedSnacks.sort((a, b) => (sortDirection === "asc" ? a.calories - b.calories : b.calories - a.calories))
    case "ingredients":
      return sortedSnacks.sort((a, b) => (sortDirection === "asc" ? a.ingredients[0].localeCompare(b.ingredients[0]) : b.ingredients[0].localeCompare(a.ingredients[0])))
    default:
      return sortedSnacks
  }
}