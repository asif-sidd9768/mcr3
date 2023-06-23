export const searchSnacksAction = (searchParam) => ({
  type:"SEARCH_SNACKS",
  payload: searchParam
})

export const sortTypeSnacksAction = (sort) => ({
  type:"UPDATE_SORT_TYPE",
  payload: sort
})

export const sortDirectionSnacksAction = (direction) => ({
  type:"UPDATE_SORT_DIRECTION",
  payload: direction
})