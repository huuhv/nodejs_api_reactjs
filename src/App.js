import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
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
    render() {
      return (
          <div className="App">
              <h1>Todo List</h1>
              <div>
                <table className="table table-hover" align="center">
                  <thead>
                  <tr>
                      <th width="10%">ID</th>
                      <th width="80%">Title</th>
                      <th width="10%">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                    {this.state.items.map(item =>
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td><a href="#">Edit</a>&nbsp;<a href="#">Delete</a></td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
          </div>
      );
  }
}

export default App;
