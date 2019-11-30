import React from 'react';
import './App.css';
import Message from './message'
import Formulaire from './messageForm'

class App extends React.Component {

  state = {
    messages:  {}
  }

  addMessage = (message) => {
    const post = {...this.state.messages};
    const timestamp = Date.now();
    post[`post-${timestamp}`] = message;
    this.setState({messages: post});
  }

  render() {
    return (


      <div className="box">
        <div>
          <div className="messages">
            {Object.keys(this.state.messages).map((key) =>
              <Message key={key} content={this.state.messages[key]}/>)
            }
          </div>
          <div>
            <Formulaire
              addMessage = {this.addMessage}
              pseudo={this.props.match.params.pseudo}
              length= {140}
              />
          </div>
      </div>
    </div>)
  }
}

export default App;
