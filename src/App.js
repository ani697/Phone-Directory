import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Directory from './Directory/Directory';
import Add from './Add/Add';

import './App.css';

class App extends Component {
  state={
    Authed:true
  }
  render() {
    return (
      <BrowserRouter >
        <div className="App">
            <Route path="/" exact component={Directory} />
            <Route path="/Add" exact component={Add}/>
            <Route path="/Add/:name/:number" exact component={Directory} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
