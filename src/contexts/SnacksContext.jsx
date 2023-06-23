import { createContext, useReducer } from "react";
import { initialState, snacksReducer } from "../reducers/SnacksReducers";

export const SnacksContext = createContext()
export const SnacksProvider = ({children}) => {
  const [snackState, snackDispatch] = useReducer(snacksReducer, initialState)
  return (
    <SnacksContext.Provider value={{snackState, snackDispatch}}>
      {children}
    </SnacksContext.Provider>
  )
}