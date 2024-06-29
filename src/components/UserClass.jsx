import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "constructor");
    this.state = {
      userInfo: {
        name: "dummy",
        company: "dummy",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "component did mount...");
    const data = await fetch("https://api.github.com/users/shahriar021");
    const jsonData = await data.json();

    this.setState({
      userInfo: jsonData,
    });

    console.log(jsonData);
  }

  componentDidUpdate() {
    console.log("user class component did update...");
  }

  componentWillUnmount() {
    console.log("user class component will unmount..");
  }

  render() {
    console.log(this.props.name + "render");
    const { name, company } = this.state.userInfo;
    return (
      <div>
        <h3>name:{name}</h3>
        <h3>company:{company}</h3>
      </div>
    );
  }
}

export default UserClass;
