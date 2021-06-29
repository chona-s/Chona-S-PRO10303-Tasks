import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      address: "",
      topic: "",
    };
  }

  f1 = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  f5 = (event) => {
    this.setState({
      mail: event.target.value,
    });
  };

  f2 = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  fgm = (event) => {
    this.setState({
      gender1: (event.target.value = "Male"),
      gender2: (event.target.value = ""),
    });
  };
  fgf = (event) => {
    this.setState({
      gender1: (event.target.value = ""),
      gender2: (event.target.value = "Female"),
    });
  };

  f3 = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  fs = (event) => {
    this.setState({
      single: (event.target.value = "Single"),
      married: (event.target.value = ""),
    });
  };
  fm = (event) => {
    this.setState({
      single: (event.target.value = ""),
      married: (event.target.value = "Married"),
    });
  };
  f4 = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `USERNAME= ${this.state.username}  , MAIL= ${this.state.mail}, PASSWORD= ${this.state.password}, GENDER= ${this.state.gender1} ${this.state.gender2}, ADDRESS= ${this.state.address}, MARITAL_STATUS= ${this.state.single} ${this.state.married}, COUNTRY= ${this.state.topic} >>>THESE INFORMATIONS WERE RECORDED <<<`
    );
    event.preventDefault();
  };

  render() {
    const str1 = {
      width: "50%",
      textAlign: "center",
      fontFamily: "'Courgette', cursive",
      marginLeft: "500px",
      textAlign: "left",
    };
    const sr1 = {
      fontFamily: "'Courgette', cursive",
      textAlign: "center",
      fontSize: "50px",
      color: "#14FEE7",
    };
    const str3 = {
      color: "#fff",
    };

    const st12 = {
      width: "50%",
      fontFamily: "'Courgette', cursive",
      border: "dashed",
      borderColor: "#fff",
      backgroundColor: "rgba(0, 0, 0, 0)",
      display: "inline-block",
      padding: "5px 5px",
      margin: " 8px 0",
      boxSizing: "border-box",
      borderRadius: "5px",
      color: "#fff",
    };
    const st21 = {
      width: "50%",
      fontFamily: "'Courgette', cursive",
      border: "dashed",
      borderColor: "#fff",
      backgroundColor: "green",
      display: "inline-block",
      padding: "5px 5px",
      margin: " 8px 0",
      boxSizing: "border-box",
      borderRadius: "5px",
      color: "#fff",
      fontSize: "20px",
      textAlign: "center",
    };
    const st22 = {
      width: "20%",
      fontFamily: "'Courgette', cursive",
      border: "dashed",
      borderColor: "#fff",
      backgroundColor: "rgba(0, 0, 0, 0)",
      display: "inline-block",
      padding: "5px 5px",
      margin: " 8px 0",
      boxSizing: "border-box",
      borderRadius: "5px",
      color: "green",
      fontSize: "16px",
    };
    return (
      <div>
        <h1 style={sr1}>Forms in React</h1>
        <h1>Hi {this.state.username},</h1>
              
        <form onSubmit={this.handleSubmit}>
                          
          <table style={str1}>
            <label style={str3}>Username:</label>
            <br></br>
             
            <input
              style={st12}
              type="text"
              value={this.state.username}
              onChange={this.f1}
            />
            <br></br>
            <label style={str3}>Mail:</label>
            <br></br>
             
            <input
              style={st12}
              type="email"
              value={this.state.mail}
              onChange={this.f5}
            />
            <br></br>
            <label style={str3}>Password:</label>
            <br></br>
            <input
              style={st12}
              type="password"
              value={this.state.password}
              onChange={this.f2}
            />
               
            <br></br>
            <label style={str3}>Address:</label>
            <br></br>
            <textarea
              style={st12}
              value={this.state.address}
              onChange={this.f3}
            ></textarea>
            <br></br>
            <label style={str3}>Gender:</label>
            <br></br>
             {" "}
            <input
              type="radio"
              value={this.state.gender1}
              name="gender"
              onChange={this.fgm}
            />{" "}
            <label style={str3}>Male</label>
            <input
              type="radio"
              value={this.state.gender2}
              name="gender"
              onChange={this.fgf}
            />{" "}
            <label style={str3}>Female</label>
            <br></br>
            <label style={str3}>Marital status:</label>
            <br></br>
            <input
              type="checkbox"
              value={this.state.single}
              onChange={this.fs}
            />
            <label style={str3}>Single</label>
            <input
              type="checkbox"
              value={this.state.married}
              onChange={this.fm}
            />
            <label style={str3}>Married</label> <br></br>
            <label style={str3}>Country:</label>
            <br></br> 
            <select style={st22} value={this.state.topic} onChange={this.f4}>
              <option>--select--</option>            
              <option>India</option> <option>United States</option> 
              <option>Australia</option> 
            </select>
            <br></br>
            <button style={st21} type="submit">
              Submit
            </button>
          </table>
               
        </form>
      </div>
    );
  }
}

export default Form;
