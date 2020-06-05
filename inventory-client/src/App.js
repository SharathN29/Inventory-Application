import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddItem from "./components/Item/AddItem";
import { Provider } from "react-redux";
import store from "./store";
import UpdateItems from "./components/Item/UpdateItems";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/addItem" component={AddItem}></Route>
            <Route
              exact
              path="/updateItems/:id"
              component={UpdateItems}
            ></Route>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
