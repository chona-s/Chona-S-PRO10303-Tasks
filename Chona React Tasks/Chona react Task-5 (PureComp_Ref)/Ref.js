import React, { Component } from "react";

class Ref extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  alt = () => {
    alert(this.ref.current.value);
  };
 componentDidMount() {
     this.ref.current.focus();
   }

  render() {
    return (
      <div>
        <h1>Refs Demo</h1>
        <input type="text" ref={this.ref}/>
        <button onClick={this.alt}>Click Here</button>
      </div>
    );
  }
}

export default Ref;