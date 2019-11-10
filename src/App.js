import React from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
import './App.css';

class App extends React.Component {
  state = {
    // ninjas is an array of objects (AND a property of the object "state") with multiple properties
    ninjas : [
      { name: "Ryu", age: "31", belt: "black", id: 1 },
      { name: "Gabs", age: "21", belt: "white", id: 2 },
      { name: "Luis Felipe", age: "15", belt: "red", id: 3 }
    ]
  }

  addNinja = ninja => {
    ninja.id = Math.random();
    
    // since i cant alter the current state, i need to create a new array w/ recently added ninja
    // and THEN change the state by putting a new array of objects to that state

    // taking the original array and spreading out into indivual objects
    // and putting them indidually as new elements to a new array of ninjas
    let ninjas = [...this.state.ninjas, ninja] 

    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })

    this.setState({
      ninjas: ninjas
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>

        <AddNinja addNinja={this.addNinja} />
        {/* Passing ninjas (an array inside the state of this class) as a prop */}
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}  />
      </div>
    );
  }
}

export default App;
