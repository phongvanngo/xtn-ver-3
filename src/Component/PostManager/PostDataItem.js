import React, { Component } from 'react';
//import callApi from './../../Utils/apiCaller';
import { connect } from 'react-redux';
import { deletePostRequest, onEditPost } from './../../Action/ActionIndex'
//  import PostForm from './EditForm';


class PostDataItem extends Component {
  editPost = () => {
    this.props.editPost(this.props.id)
  }

  deletePost = () => {
    //console.log(this.props.id.toString());
    this.props.deletePost(this.props.id);
    // callApi(`Post/${this.props.id.toString()}`, 'DELETE', null).then(res => {
    // })
  }

  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.title}</td>
        <td style={{ paddingRight: 0 }}>
          <button
            onClick={this.editPost}
            type="button"
            className="btn btn-outline-info"
            style={{ marginRight: 5 }}>
            Sửa
            </button>
          <button
            data-toggle="modal"
            data-target={'#' + this.props.id}
            type="button"
            className="btn btn-outline-danger">
            Xóa
            </button>
          {/* modalBox Alert --------------------------------------------------*/}
          <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Bạn có chắc chắn xóa bài viết</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.deletePost}>Đồng ý</button>
                </div>
              </div>
            </div>
          </div>
          {/* modalBox Alert ------------------------------------------------------*/}

        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => { //lay du lieu tu store
  return {

  }
};
const mapDispatchToProps = (dispatch, props) => { //day du lieu len store
  return {
    deletePost: (id) => {
      dispatch(deletePostRequest(id));
    },
    editPost: (id) => {
      dispatch(onEditPost(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDataItem);
