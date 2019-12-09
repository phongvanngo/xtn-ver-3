import { combineReducers } from 'redux';
import posts from './Posts';
import onEditPost from'./onEditPost';
import isDisplayPostForm from './isDisplayPostForm';



const myReducer = combineReducers({
  posts,
  onEditPost,
  isDisplayPostForm
})

export default myReducer;