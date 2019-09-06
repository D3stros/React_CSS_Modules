import React, { Component } from "react";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";
  // CSS modules
import classes from "./App.module.css";

class App extends Component {
  state = {
    persons: [
      {name: "Daniel"}
    ]
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: event.target.value},
    ]})
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
    return (
      // CSS modules
      <div className={classes.App}>
        <UserInput changed={this.nameChangedHandler} name = {this.state.persons[0].namecd}/>
        <UserOutput name = {this.state.persons[0].name} />
        <UserOutput name = {this.state.persons[0].name} />
      </div>
    );
  }
}
export default App;
