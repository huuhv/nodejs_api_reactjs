import React, {Component} from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

class CreateItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      title: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const items = {
      title: this.state.title
    }
    let uri = 'http://localhost:3001/api/todos';
    axios.post(uri, items).then((response) => {
        return <Redirect push to='/display-item' />
    });
  }
  render() {
    return (
      <div>
        <h1>Create An Item</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Title:</label>
                <input type="text" className="form-control" onChange={this.handleChange} required="true" />
              </div>
            </div>
          </div><br />
          <div className="form-group">
            <button className="btn btn-primary">Add Item</button>
            &nbsp;
            <Link to="/display-item">Back Todo list</Link>
          </div>
        </form>
      </div>
    )
  }
}
export default CreateItem;
