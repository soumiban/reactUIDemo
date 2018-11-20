import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor () {
    super()
    this.state = {
      //message: ''
      message: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    let input = '?name=Soumi';
    let url = 'https://8tccn9kyr0.execute-api.us-east-1.amazonaws.com/apiDeploy/helloworld';
    axios.get(url.concat(input));
      //.then(response => this.setState({username: response.data.message}))
  }

  render() {
    return (
 //     <div className="container">
 //     <h1>Hello World!</h1>
 //     <p>This app is the part of Step 1 of Challneges from LoyaltyOne</p>
 //     <p>Problem statement: Create a ‘hello world’ web page that runs on a local application server.</p>
 //   </div>

    <div className='button__container'>
    <label>
    
     <p className='text'>
   
     user name: <input className='text' type="text" name="name" /> <br/>
     message: <input className='text' type="text" name="message" />
     </p> 

    </label>
  
    <button className='button' onClick={this.handleClick}>Click Me</button>
    <p className='display'> 
        {this.state.message}

    </p>
    </div>
    );
  }
}


export default App;
