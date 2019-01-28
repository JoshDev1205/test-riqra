import React, { Component } from 'react';
import CommentList from './CommentList'
import AddComment from './AddComment'
class App extends Component {
  render() {
    return (
      <div className="h-screen flex justify-center">
        <div className="w-1/2 mt-10">
          <AddComment />
          <CommentList />
        </div>
      </div>
    );
  }
}

export default App;
