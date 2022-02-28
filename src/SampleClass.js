import React from "react";

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div> 
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleClick}
        />
      </div>
    );
  }
}

export default Sample;
