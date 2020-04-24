import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {

  state = {
    userInput: ''
  }

  changeInputHandler = (event) =>{
    this.setState({userInput: event.target.value})
  }

  deleteInputHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});

  }

  render(){
   
    const charList = this.state.userInput.split('').map((ch,index) =>{
      return <Char
               character={ch} 
               key={index} 
               clicked={() => this.deleteInputHandler(index)}
               />
    });

    return (
      <div className="App">
          <input type="text"
           onChange={this.changeInputHandler}
           value={this.state.userInput}
          />
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length} />
          {charList}
      </div>
    );
  }
  
}

export default App;
