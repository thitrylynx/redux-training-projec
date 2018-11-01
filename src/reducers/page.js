import { SET_YEAR } from '../actions/PageActions'

const initialState = {
  year: 2018,
  years: [2014, 2015, 2016, 2017, 2018],
  photos: [],
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_YEAR:
      return { ...state, year: action.payload }

    default:
      return state
  }
}
