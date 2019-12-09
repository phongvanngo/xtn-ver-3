import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ImgurUploaderInit from 'ckeditor5-imgur-uploader';
import callApi from './../../Utils/apiCaller';
import {addPostRequest } from './../../Action/ActionIndex';
import { connect } from 'react-redux';

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      author: '',
    }
  }


  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    console.log(value);
    if (name === 'status') {
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]: value
    });
  }

  savePost = () => {

    if (!this.state.title || !this.state.content || !this.state.author) {
      alert('Bạn cần nhập đầy đủ nội dung');
    } else {
      var d = new Date();
      var time_created = d.getHours().toString() + ':' +
        + d.getMinutes().toString() + ' ' +
        + d.getDate().toString() + '/' +
        + d.getMonth().toString() + '/' +
        +d.getFullYear().toString();

      var PostData = {
        title: this.state.title,
        author: this.state.author,
        content: this.state.content,
        time_created: time_created,
      }

      //post data --------------
      console.log(PostData);
      this.props.addNewPost(PostData);
      // callApi('post', 'POST', PostData).then(res => {
      //   console.log(res.data.info._id)
      // })  
      alert('Bài viết đã lưu');
      this.props.closePostForm();
    }
    // callApi('Post','GET',null).then(res => {
    // })

  }

  render() {
    const ImgurUploader = ImgurUploaderInit({ clientID: '923fe11172c3b60' });
    return (
      <div>
        <div className="card">
          <div className="card-header">Thêm bài viết</div>
          <div className="card-body">
            {/* Add PostPost --------------------------------------------------*/}
            <div className="form-group">
              <label >Tiêu đề:</label>
              <input
                type="text"
                name="title"
                id=""
                className="form-control"
                placeholder=""
                aria-describedby="helpId"
                value={this.state.name}
                onChange={this.onChange}
              />
              <br />
              <label >Nội dung chính:</label>
              <CKEditor
                editor={ClassicEditor}
                data="<p>Write Some Thing <p>"
                config={{
                  extraPlugins: [ImgurUploader]
                }}
                onInit={editor => {
                  // You can store the "editor" and use when it is needed.

                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.setState({
                    content: data
                  })
                }}
                onBlur={(event, editor) => {

                }}
                onFocus={(event, editor) => {

                }}
              />
              <br />
              <label >Tác giả: </label>
              <input
                type="text"
                name="author"
                className="form-control"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>

          </div>
          {/* Button Save and CancelCancel --------------------------------------------------*/}
          <div className="card-footer">
            <div style={{ float: 'right' }}>
              <button style={{ marginRight: 5 }}
                onClick={this.savePost}
                type="button"
                className="btn btn-success"
              >Lưu</button>
              <button
                data-toggle="modal"
                data-target="#1exampleModal"  
                type="button"
                className="btn btn-danger"
              >Hủy</button>
              {/* Button Save and CancelCancel --------------------------------------------------*/}
              {/* modalBox Alert --------------------------------------------------*/}
              <div className="modal fade" id="1exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Bạn có chắc chắn hủy bài viết</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.props.closeForm()}>Đồng ý</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* modalBox Alert ------------------------------------------------------*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => { //lay du lieu tu store
  return {
    onEditPost:state.onEditPost

  }
};
const mapDispatchToProps = (dispatch, props) => { //day du lieu len store
  return {
    addNewPost: (postData) => {
      dispatch(addPostRequest(postData));
    },
    
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
