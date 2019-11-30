import React from 'react';
import ReactDOM from 'react-dom';

class Connexion extends React.Component {

  goToChat = event => {
    event.preventDefault();
    console.log(this.pseudoInput.value);
    let pseudo = this.pseudoInput.value
    this.props.history.push(`/pseudo/${pseudo}`)

  };

  render() {
    return (<div className="connexionBox" onSubmit={e => this.goToChat(e)}>
      <form className="connexion">
        <input
          placeholder="ENTREZ VOTRE PSEUDO"
          required="required"
          ref={input => {this.pseudoInput = input}}
        />
        <button type="submit">GO</button>
      </form>
    </div>)
  }

  
}

export default Connexion;
