import React, { Component } from 'react';
import callApi from './../../Utils/apiCaller'
import PostDataItem from './PostDataItem'
import { connect } from 'react-redux';
import { fetchPostsDataRequest,onOpenPostForm, onClosePostForm } from './../../Action/ActionIndex'

class ShowPostList extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: [],
  //   }
  // }

  componentDidMount() {
    console.log('mount')
    this.props.fetchAllPosts();
  }

  addNewPost = () => {
    //this.props.openPostForm();
    this.props.addNewPost();
  }

  editPost = (id) => {
    console.log(id);
  }

  render() {
    var showPostDataItem = this.props.posts.map((ele, index) => {
      return (
        <PostDataItem
          key={index}
          index={index + 1}
          id={ele._id}
          title={ele.title}
          content={ele.content}
          author={ele.author}
        />
      )
    })
    return (
      <div className="card" >
        <div className="card-header">QUẢN LÝ BÀI VIẾT </div>
        <div className="card-body">
          <h4 className="card-title">Danh sách bài viết</h4>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: 30 }}>Stt</th>
                <th style={{ width: 500 }} className=' .text-nowrap'>Tiêu đề</th>
                <th style={{ width: 110, margin: 0, padding: 0 }}></th>
              </tr>
            </thead>
            <tbody>
              {showPostDataItem}
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <button style={{ float: 'right' }}
            onClick={this.addNewPost}
            type="button" 
            className="btn btn-success">Thêm bài viết</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => { //lay du lieu tu store
  return {
    posts: state.posts
  }
};
const mapDispatchToProps = (dispatch, props) => { //day du lieu len store
  return {
    fetchAllPosts: () => {
      dispatch(fetchPostsDataRequest());
    },
    openPostForm: () => {
      dispatch(onOpenPostForm())
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowPostList);
