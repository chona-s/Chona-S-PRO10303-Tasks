import React, { Component } from "react";
import Hoc from "./Hoc";
class Hig1 extends Component{
render(){
    const str3={
        textAlign: "center",
        fontSize:"45px",
        color:"#D7BDE2 ",
        fontFamily: "'Righteous', cursive"
        }
        return(
        <div> 
            <h1 style={str3} onMouseOver={this.props.change}><b>{this.props.value} </b>  </h1>
        </div>)
    }

}

export default Hoc(Hig1);