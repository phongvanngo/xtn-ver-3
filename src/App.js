import React, { Component } from 'react';
import PostManager from './Component/PostManager/PostManager'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <PostManager />
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
