import React, { Component } from "react";

class AboutHoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      me1: "HOC- Higher Order Component",
      me2: ">>> Its a pattern where a function takes a component as a argument and return a new component or new enhanced component.",
      me3: ">>> It will share some common functionality between the component.",
    };
  }
  e1 = () => {
    this.setState({
      me1: this.props.username,
      me2: "",
      me3: "",
    });
  };

  render() {
    const str1 = {
      width: "50%",
      textAlign: "center",
      fontFamily: "'Courgette', cursive",
      marginLeft: "400px",
      fontSize: "20px",
    };
    const str3 = {
      textAlign: "left",
      fontSize: "25px",
      color: "#D7BDE2 ",
    };
    const st12 = {
      fontFamily: "'Kirang Haerang', cursive",
      border: "dotted",
      backgroundColor: "rgba(0, 0, 0, 0)",
      padding: "5px 5px",
      borderRadius: "20px",
      color: "#8F1580 ",
      fontSize: "20px",
      marginLeft:"300px"
    };
    return (
      <div>
        <table style={str1} cellPadding="10px">
          <tr>
            <td style={str3}>{this.state.me1}</td>
          </tr>
          <tr>
            <td style={str3}>{this.state.me2}</td>
          </tr>
          <tr>
            <td style={str3}>{this.state.me3}</td>
          </tr>
        </table>
        <button style={st12} onClick={this.e1}>
          User Context and Error Boundary
        </button>
                    
      </div>
    );
  }
}

export default AboutHoc;
