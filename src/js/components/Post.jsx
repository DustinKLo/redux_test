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

  handleEditPageSize(e) {
    const pageSize = parseInt(e.target.value);
    this.props.editPageSize({ pageSize });
    this.props.getData(pageSize);
  }

  render() {
    return (
      <div>
        <select defaultValue={10} onChange={this.handleEditPageSize.bind(this)}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
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

function mapDispatchToProps(dispatch) {
  return {
    // article is the action { type: 'ACTION_TYPE', payload: '' }
    editPageSize: pageSize => dispatch(editPageSize(pageSize)),
    getData: pageSize => dispatch(getData(pageSize))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
