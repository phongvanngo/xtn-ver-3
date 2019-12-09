import * as Types from './../Constants/ActionTypes';
import callApi from './../Utils/apiCaller';

export const fetchPostsDataRequest = () => {
  return (dispatch) => {
    return callApi('post', 'GET', null).then(res => {
      dispatch(fetchPostsData(res.data.posts))
    });
  };
}
export const fetchPostsData = (posts) => {
  return {
    type: Types.FETCH_POSTS_DATA,
    posts
  }
}

export const deletePostRequest = (id) => {
  return (dispatch) => {
    return callApi(`post/${id}`, 'DELETE', null).then(res => {
      dispatch(deletePost(id))
    })
  }
}

export const deletePost = (id) => {
  return {
    type: Types.DELETE_POST,
    id
  }
}

export const addPost = (post, id) => {
  return {
    type: Types.ADD_POST,
    post,
    id
  }
}

export const addPostRequest = (postData) => {
  return (dispatch) => {
    return callApi('post', 'POST', postData).then(res => {
      dispatch(addPost(postData, res.data.info._id))
    })
  }
}

export const onEditPost = (id) => {
  return {
    type: Types.ON_EDIT_POST,
    id
  }
}

export const onOpenPostForm = () => {
  return {
    type: Types.OPEN_POST_FORM,
  }
}
