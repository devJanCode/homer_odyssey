import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'email@email.com',
      password: "",
      confirmationPassword: "",
      firstname: "",
      lastname: "",
    }
  }
  updateEmailField = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  render() {
    const { email, password, confirmationPassword, firstname, lastname} = this.state;
    return (
      <div>
        <h1>{email}</h1>
        <form action=""></form>
        <input type="email" name="email" onChange={this.updateEmailField} value={email} />
        <input type="email" name="password" value={password} />
        <input type="email" name="confirmation" value={confirmationPassword} />
        <input type="text" name="firstname" value={firstname} />
        <input type="text" name="lastname" value={lastname} />
        <input type="submit" value="Envoyer" />
      </div>
    )
  }
}

export default SignUp;