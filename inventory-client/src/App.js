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
import ItemBoard from "./components/ItemBoard/ItemBoard";
import AddItemTask from "./components/ItemBoard/ItemTasks/AddItemTask";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addItem" component={AddItem} />
            <Route exact path="/updateItems/:id" component={UpdateItems} />
            <Route exact path="/itemBoard/:id" component={ItemBoard}></Route>
            <Route exact path="/addItemTask/:id" component={AddItemTask} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
