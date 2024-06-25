import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increase
        </button>
        <h3>name:{name}</h3>
      </div>
    );
  }
}

export default UserClass;
