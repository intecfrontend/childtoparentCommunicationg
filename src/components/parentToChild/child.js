import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.data.modalIsOpen}</h3>
        <button onClick={()=>this.props.data.setModalIsOpen(true)}> click me</button>
      </div>
    );
  }
}

export default Child;