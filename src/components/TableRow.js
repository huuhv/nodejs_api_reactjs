import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = `http://localhost:3001/api/todos/${this.props.obj.id}`;
    axios.delete(uri);
      return <Redirect to='/display-item' />
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            <Link className="btn btn-primary" to={"/edit-item/"+this.props.obj.id}>Edit</Link>
            <form onSubmit={this.handleSubmit}>
              <button type="submit" className="btn btn-danger">Delete</button>
            </form>
          </td>
        </tr>
    );
  }
}

export default TableRow;
