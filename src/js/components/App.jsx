// src/js/components/App.jsx

import React from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";
import Post from './Post.jsx';
import { connect } from "react-redux";
import { editPageSize, getData } from '../actions/index.js';

// const App = () => (
class App extends React.Component {

  handleEditPageSize(e) {
    const pageSize = parseInt(e.target.value);
    this.props.editPageSize({ pageSize });
    this.props.getData(pageSize);
  }
  
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <List />
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>Add a new article</h2>
          <Form />
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>API posts</h2>
          <select defaultValue={10} onChange={this.handleEditPageSize.bind(this)}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <Post />
        </div>
      </div>
    );
  }
};


function mapDispatchToProps(dispatch) {
  return {
    // article is the action { type: 'ACTION_TYPE', payload: '' }
    editPageSize: pageSize => dispatch(editPageSize(pageSize)),
    getData: pageSize => dispatch(getData(pageSize))
  };
}


// export default App;
export default connect(null, mapDispatchToProps)(App);

/**
 * store.subscribe(() => console.log('Look ma, Redux!!'))
 * store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
 */
