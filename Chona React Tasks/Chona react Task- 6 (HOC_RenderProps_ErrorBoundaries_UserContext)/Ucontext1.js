import React, { Component } from "react";
import Ucontext2 from "./Ucontext2";

class Ucontext1 extends Component{
  render(){
    const s2={
      backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9umu17uu8NN-Xg5lm6ziA8FFpcdSuz1JD6Q&usqp=CAU)",
      backgroundSize:"cover",
      textAlign:"center",
        margin: "0px 50px 75px 50px",
        borderRadius: "50px",
        color:"Red"
  }
    return(
      <div style={s2}>
       
        <h3>This is User Context1</h3>
        <Ucontext2 />
      
      </div>
    )
  }
}
export default  Ucontext1