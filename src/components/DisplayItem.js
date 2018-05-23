import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';

class DisplayItem extends Component {
  constructor(){
    super();
    this.state ={items: []};
   }
  componentDidMount() {
    axios.get('http://localhost:3001/api/todos')
     .then(response => {
      console.log(response.data);
       this.setState({ items: response.data });
     })
     .catch(function (error) {
       console.log(error);
     })
    }
    tabRow() {
      if (this.state.items instanceof Array) {
        return this.state.items.map(function(object, i) {
          return <TableRow obj={object} key={i} />;
        })
      }
    }
    render() {
      return (
          <div className="list">
              <h1>Todo List</h1>
              <div>
                <table className="table table-hover" align="center">
                  <thead>
                    <tr>
                        <th width="100%" colSpan="5"><Link to="/add-item">Add item</Link></th>
                    </tr>
                    <tr>
                        <th width="10%">ID</th>
                        <th width="70%">Title</th>
                        <th width="20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.tabRow()}
                  </tbody>
                </table>
              </div>
          </div>
      );
  }
}

export default DisplayItem;
