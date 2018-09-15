import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import allReducers from './reducers/allReducers';
import thunk from 'redux-thunk';
import Home from './components/Home';
import Footer from './components/Footer';

import './App.css';



const store = createStore(allReducers, applyMiddleware(thunk));


class App extends Component {
  render() {

    const bodyStyle = {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
    return (
      <Provider store={store}>
        <div style={bodyStyle}>
          <Header />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
