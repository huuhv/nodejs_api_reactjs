import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import './bootstrap.min.css';
import DisplayItem from './components/DisplayItem';
import CreateItem from './components/CreateItem';
import EditItem from './components/EditItem';
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
      <Switch>
        <Route exact path="/" component={DisplayItem} />
        <Route path="/add-item" component={CreateItem} />
        <Route path="/display-item" component={DisplayItem} />
        <Route path="/edit-item/:id" component={EditItem} />
      </Switch>
    </Router>,
    document.getElementById('root')
  );
registerServiceWorker();
