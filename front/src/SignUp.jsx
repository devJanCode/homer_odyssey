import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassword",
      passwordbis: "monPassword",
      firstname: "James",
      lastname: "Bond",
    }
  }
  updateEmailField = (event) => {
    this.setState({
      email: event.target.value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(JSON.stringify(this.state));
}

    render() {
  const { email, password, passwordbis, firstname, lastname } = this.state;
  return (
    <div className="SignUp">
      <h1>{JSON.stringify(this.state, 1, 1)}</h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email&nbsp;:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={this.updateEmailField}
          value={email}
        />
        <label htmlFor="password">Mot de passe&nbsp;:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={this.updateEmailField}
          value={password}
        />
        <label htmlFor="passwordbis">Confirmation mot de passe&nbsp;:</label>
        <input
          type="password"
          name="passwordbis"
          id="passwordbis"
          onChange={this.updateEmailField}
          value={passwordbis}
        />
        <label htmlFor="firstname">Prénom&nbsp;:</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={this.updateEmailField}
          value={firstname}
        />
        <label htmlFor="lastname">Nom&nbsp;:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={this.updateEmailField}
          value={lastname}
        />
        <input type="submit" value="Soumettre" />
      </form>
    </div>
  );
}
}

export default SignUp;