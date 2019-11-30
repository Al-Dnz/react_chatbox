import React from 'react';

class Formulaire extends React.Component {
  createMessage = event => {
    event.preventDefault();
    const message = {message: this.message.value, pseudo: this.props.pseudo};
    this.props.addMessage(message);
    //RESET FORM
    this.messageForm.reset();
    this.setState({ length: this.props.length });
  };

  compteur = event => {
    const messageSize = this.props.length - this.message.value.length;
    // console.log("HERE=>"+messageSize);
    this.setState({length: messageSize})
  }

  keyPressed(event) {
  if (event.key === "Enter") {
    this.createMessage(event)
    }
  }

  state = {
    length: this.props.length
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={e => this.createMessage(e)}
        ref = {input => this.messageForm = input}
        onKeyPress={e => this.keyPressed(e)}
        >
      <textarea
        required="required"
        maxLength= {this.props.length}
        placeholder="votre message ici"
        onChange = {e => this.compteur(e)}
        ref={input => this.message =input}
        />

      <div className="info">
        {this.state.length}
      </div>

      <button type="submit">ENVOYER</button>
    </form>)
  }
}

export default Formulaire;
