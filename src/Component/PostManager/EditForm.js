import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ImgurUploaderInit from 'ckeditor5-imgur-uploader';
import callApi from './../../Utils/apiCaller'

class EditForm extends Component {

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

    if (this.state.title === '') {
      alert('Bạn cần nhập tiêu đề')
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
      callApi('Post', 'POST', PostData).then(res => {
        console.log(res)
      })
    }
    this.props.savePost();
    alert('Bài viết đã lưu');
    this.closeForm();
  }


  closeForm = () => {
    this.props.closeForm();
  }

  render() {
    const ImgurUploader = ImgurUploaderInit({ clientID: '923fe11172c3b60' });
    return (
      <div>
        <div class="card">
          <div class="card-header">Thêm bài viết</div>
          <div class="card-body">
            {/* Add PostPost --------------------------------------------------*/}
            <div class="form-group">
              <label for="">Tiêu đề:</label>
              <input
                type="text"
                name="title"
                id=""
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
                value={this.state.name}
                onChange={this.onChange}
              />
              <br />
              <label for="">Nội dung chính:</label>
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
              <label for="">Tác giả: </label>
              <input
                type="text"
                name="author"
                class="form-control"
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
                data-target="#exampleModal"
                type="button"
                className="btn btn-danger"
              >Hủy</button>
              {/* Button Save and CancelCancel --------------------------------------------------*/}
              {/* modalBox Alert --------------------------------------------------*/}
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Bạn có chắc chắn hủy bài viết</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.closeForm}>Đồng ý</button>
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
export default EditForm;
