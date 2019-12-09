import * as Types from '../Constants/ActionTypes'
var initialState = false;

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.OPEN_POST_FORM:
      return true;

    default: return state;
  }
}

export default myReducer;