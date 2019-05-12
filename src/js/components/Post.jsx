import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, editPageSize } from "../actions/index";

export class Post extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // calling the new action creator
    this.props.getData(this.props.pageSize);
  }

  render() {
    return (
      <div>
        <ul className="list-group list-group-flush">
          {this.props.articles.map(el => (
            <li className="list-group-item" key={el.id}>
              {el.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles,
    pageSize: state.pageSize
  };
}

export default connect(mapStateToProps, { getData })(Post);
