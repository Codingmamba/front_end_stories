import React, { Component } from 'react';
import RadioButtons from './RadioButtons';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      sizeSelected: '',
      rightSizeQuote: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value });
  }

  formSubmit = (event) => {
    event.preventDefault();
    // Checks to see if the input field is empty
    if (!this.state.sizeSelected) {
      return;
    } else {
      this.apiCall();
    };
  }

  apiCall = () => {
    const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/';
    fetch(url)
      .then(response => response.json())
      .then(data => {

        const wisdomLength = data[0].split(' ').length;
        const sizeSelected = this.state.sizeSelected;
        
        switch (sizeSelected) {
          case 'small':
            if (wisdomLength <= 4) {
              this.setState({ rightSizeQuote: data[0] })
            } else {
              this.apiCall();
            }
            break;
          case 'medium':
            if (wisdomLength >= 5 && wisdomLength <= 12) {
              this.setState({ rightSizeQuote: data[0] })
            } else {
              this.apiCall();
            }
            break;
          case 'large':
            if (wisdomLength >= 13) {
              this.setState({ rightSizeQuote: data[0] })
            } else {
              this.apiCall();
            }
            break;
          default:
            console.log("You're not worthy to be given wisdom by Mr.Swanson")
        }
      })
  }

  render() {
    return (
      <div className="App">
        <RadioButtons onChange={this.handleChange} onSubmit={this.formSubmit}/>
        <p>{this.state.rightSizeQuote}</p>
      </div>
    );
  }
}

export default App;
