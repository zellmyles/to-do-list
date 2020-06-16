import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list'

export default class App extends React.Component {
// array of items
// property that holds an empty string or value
// state -- setState??
// list out the items
// onsubmit
// onchange
// bind 

constructor(props){
  super(props)

this.state = {

  term: '',
  items: []

}

}

onChange = (event) => {
  this.setState({term: event.target.value})
}

onSubmit = (event) => {
  event.preventDefault()
  this.setState({
    term:'',

  items: [...this.state.items,this.state.term]
  })
}

  render() {
    return (
      <div className="header">
        <div>
          <div className="wrapper">
            <img src={logo} />
            <p className="title">Road To Hire</p>
          </div>
        </div>
        <div className="app">
          <div className="app-wrapper">
            <p className="app-title">To-Do List</p>
            <form className="App" onSubmit = {this.onSubmit}>
              <input value = {this.state.term} onChange = {this.onChange} 
              placeholder="Type here to add a task" type="text" id="box" />
              <br />

              <List items = {this.state.items} />
            </form>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

// export default App;
