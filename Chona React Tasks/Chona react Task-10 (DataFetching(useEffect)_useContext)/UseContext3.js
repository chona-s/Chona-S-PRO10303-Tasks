import React,{useContext} from "react";
import {first,second} from './UseContext1'

function UseContext3() {

  const title=useContext(first);
  const Data=useContext(second);
const f1={
    fontFamily: "Big Shoulders Stencil Display",
    fontSize: "50px",
    color: "#1AE3F5"
}
  return (
    <div>
      <h1 style={f1}>{title}</h1>
        {Data}
    </div>
  );
}

export default UseContext3
