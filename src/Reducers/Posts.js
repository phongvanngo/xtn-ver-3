import * as Types from './../Constants/ActionTypes'
var initialState = []

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_POSTS_DATA:
      state = action.posts;
      return [...state];
    case Types.DELETE_POST:
      var x;
      for (x in state) {
        if (state[x].id === action.id) {
          break;
        }
      }
      state.splice(x, 1);
      return [...state];
    case Types.ADD_POST:
      var newPost = {
        id: action.id,
        title: action.post.title,
        content: action.post.content,
        author: action.post.author,
        time_created: action.post.time_created
      }
      state.push(newPost);
      console.log('done')
      return [...state];
    default: return [...state];
  }
}

export default myReducer;