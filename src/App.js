import React from 'react';
import Ninjas from './Ninjas'
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
  
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>

        {/* Passing ninjas (an array inside the state of this class) as a prop */}
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
