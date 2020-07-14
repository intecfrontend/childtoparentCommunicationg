import React, { Component, useState } from "react";
import "./App.css";
import Modal from "react-modal";
import Child from "./components/parentToChild/child";
Modal.setAppElement("#root");

class App extends Component {
  constructor() {
    super();
    this.state = { modalIsOpen: false };
  };
  
  setModalIsOpen(modalIsOp){
    this.setState({modalIsOpen:modalIsOp})
  };
  
  render() {
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
      <div className="App">
        <button onClick={() => this.setModalIsOpen(true)}>open</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.setModalIsOpen(false)}
        >
          <div onClick={() => this.setModalIsOpen(false)}>
            <button>close</button>
            <h2>Modal is open</h2>
            <p>Modal Body</p>
            <Child
              data={{
                modalIsOpen: this.state.modalIsOpen,
                setModalIsOpen: (this.setModalIsOpen = this.setModalIsOpen.bind(
                  this
                )),
              }}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
