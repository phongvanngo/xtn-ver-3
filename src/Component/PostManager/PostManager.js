import React, { Component } from 'react';
import PostForm from './PostForm';
import PostsList from './PostsList';
import { connect } from 'react-redux';
import { onOpenPostForm, onClosePostForm } from './../../Action/ActionIndex'


class PostManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
     isDisplayPostForm: false
    }
  }

  addNewPost = () => {
     this.setState({
       isDisplayPostForm: true
     })
    //this.props.openPostForm()
  }

  closeForm = () => {
    console.log('that a')
     this.setState({
       isDisplayPostForm: false
     })
    //this.props.closePostForm()
  }




  render() {
    console.log(this.props.isDisplayPostForm)
    var ShowPostForm = this.state.isDisplayPostForm === true ?
      <PostForm
        savePost={this.savePost}
        closeForm={this.closeForm}
      /> : '';
    var ShowPostsList = this.state.isDisplayPostForm === false ?
      <PostsList
        addNewPost={this.addNewPost}
      /> : '';

    return (
      <div>
        <div className="row">
          <div className={this.state.isDisplayPostForm ? 'col-12' : ''}>
            {ShowPostForm}
          </div >
          <div className={!this.state.isDisplayPostForm ? 'col-12' : ''}>
            {ShowPostsList}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => { //lay du lieu tu store
  return {
    isDisplayPostForm: state.isDisplayPostForm,
  }
};
const mapDispatchToProps = (dispatch, props) => { //day du lieu len store

};
export default connect(mapStateToProps, mapDispatchToProps)(PostManager);
