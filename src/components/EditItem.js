import React, {Component} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class EditItem extends Component {
  constructor(props) {
      super(props);
      this.state = {title: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get("http://localhost:3001/api/todos/"+this.props.match.params.id)
    .then(response => {
      console.log(response);
      this.setState({ title: response.data.title });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange(e){
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const items = {
      title: this.state.title
    }
    let uri = 'http://localhost:3001/api/todos/'+this.props.match.params.id;
    axios.put(uri, items).then((response) => {
      return <Redirect push to='/display-item' />
    });
  }
  render(){
    return (
      <div>
        <h1>Update Todo</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/display-item" className="btn btn-success">Return to Todo list</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    )
  }
}
export default EditItem;
