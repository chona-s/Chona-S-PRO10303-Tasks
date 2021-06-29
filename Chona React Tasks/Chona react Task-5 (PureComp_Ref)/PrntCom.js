import React, { Component, PureComponent } from "react";
import PurCom from "./PurCom";
class PrntCom extends Component {
  constructor(props) {
    super(props);
this.state = {
      name: "Hello (I will change after 2 Sec)",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Hiii (I am changed)",
      });
    }, 2000);
  }

  render() {
    return (
      <div>
         <PurCom name={this.state.name} />
        <h1>This is Parent component</h1>
      </div>
    );
  }
}

export default PrntCom;