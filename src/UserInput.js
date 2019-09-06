import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
  return <input type="text" onChange = {props.changed} value = {props.name}></input>;
};

export default UserInput;
