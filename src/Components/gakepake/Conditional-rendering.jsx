import React from 'react';

// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return <div>Warning</div>;
// }

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.warning = { ShowWarning: true };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
    return <div>Warning!</div>;
  }

  Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <h1>Welcome Back!</h1>;
    }
    return <h1>Please SignUp</h1>;
  };

  LoginButton = (props) => {
    return <button onClick={props.onClick}>Login</button>;
  };

  LogoutButton = (props) => {
    return <button onClick={props.onClick}>Logout</button>;
  };

  handleToggleClick() {
    this.setState((prevState) => ({
      ShowWarning: !prevState.ShowWarning,
    }));
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  Mailbox = (props) => {
    const unreadMessages = props.unreadMessages;
  };

  render() {
    const count = '10';
    this.Mailbox = ['React', 'Re: React', 'Re:Re: React'];
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <this.LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <this.LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <h1>Contoh Conditional Rendering</h1>
        <this.WarningBanner warn={this.warning.ShowWarning} />
        <button onClick={this.handleToggleClick}>
          {this.warning.ShowWarning ? 'Hide' : 'Show'}
        </button>
        <this.Greeting isLoggedIn={isLoggedIn} />
        <h2>
          The User is <b>{isLoggedIn ? 'currentyl' : 'not'}</b> logged in
        </h2>
        <br></br>
        {button}
        {/* {isLoggedIn ? (
          <this.LoginButton onClick={this.handleLoginClick} />
        ) : (
          <this.LogoutButton onClick={this.handleLogoutClick} />
        )} */}
        <h1>Halo!</h1>
        {this.Mailbox.length > 0 && (
          <h2>Kamu Punya {this.Mailbox.length} Pesan belum dibaca</h2>
        )}
        {count && <h1>Message: {count}</h1>}
      </div>
    );
  }
}

export default LoginControl;
