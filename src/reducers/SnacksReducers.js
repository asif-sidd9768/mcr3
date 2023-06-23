import { SNACKS_DATA } from "../db/snacksData";

export const initialState = {
  snacks: SNACKS_DATA,
  searchInput: "",
  sortType: "id",
  sortDirection: "asc"
}

export const snacksReducer = (state, action) => {
  switch(action.type){
    case "SEARCH_SNACKS":
      return {...state, searchInput: action.payload}
    case "UPDATE_SORT_TYPE": 
      return {...state, sortType: action.payload}
    case "UPDATE_SORT_DIRECTION": 
      return {...state, sortDirection: action.payload}
    default:
      return state
  }
}