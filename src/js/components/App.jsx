// src/js/components/App.jsx

import React from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";
import Post from './Post.jsx';


// const App = () => (
class App extends React.Component {
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
          <Post />
        </div>
      </div>
    );
  }
};


export default App;

/**
 * store.subscribe(() => console.log('Look ma, Redux!!'))
 * store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
 */
