import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    redirectBack: false
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectBack } = this.state;

    if (redirectBack) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <button
          onClick={() => {
            this.props.onSubmit();
            this.setState({ redirectBack: true });
          }}
        >
          Log in
        </button>
      </div>
    );
  }
}

export default Login;
