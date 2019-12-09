import * as Types from '../Constants/ActionTypes'
var initialState = '';

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ON_EDIT_POST:
      return action.id

    default: return [...state];
  }
}

export default myReducer;