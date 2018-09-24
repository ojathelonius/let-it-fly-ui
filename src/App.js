import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import Header from './components/Header';
import allReducers from './reducers/allReducers';
import thunk from 'redux-thunk';
import Home from './components/Home';
import Footer from './components/Footer';
import FlightsContainer from './containers/FlightsContainer';
import ExperiencesContainer from './containers/ExperiencesContainer';
import BookingsContainer from './containers/BookingsContainer';
import HotelsContainer from './containers/HotelsContainer';
import ProfileContainer from './containers/ProfileContainer';

import './App.css';

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));


class App extends Component {
  render() {

    const bodyStyle = {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }

    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <div style={bodyStyle}>
              <Header />

              <Route exact path="/" component={Home} />
              <Route exact path="/flights" component={FlightsContainer} />
              <Route exact path="/experiences" component={ExperiencesContainer} />
              <Route exact path="/bookings" component={BookingsContainer} />
              <Route exact path="/hotels" component={HotelsContainer} />
              <Route exact path="/profile" component={ProfileContainer} />
              <Footer />
            </div>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
