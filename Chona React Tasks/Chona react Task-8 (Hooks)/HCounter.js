import React, { useState } from "react";
import HForm from "./HForm";
import HRandom from "./HRandom";
function HCounter() {
  const [count, setCount] = useState();
  const hf = () => {
    setCount((count) => <HForm/>);
  };
  const hr = () => {
    setCount((count) => <HRandom/>);
  };
  const t={
    width:"100%",
   }
   const h={
    fontFamily:" 'Courgette', cursive",
    color:"#CB4335 ",
    fontSize:"48px",
  }
  const st11 = {
    fontFamily: "Kirang Haerang",
    border: "dotted",
    backgroundColor: "rgba(0, 0, 0, 0)",
    padding: "5px 5px",
    borderRadius: "25px",
    color: "  #FFFFFF  ",
    fontSize:"45px"
  }
  return (
    <div >
      <h1 style={h}>HOOKS</h1>
      <table style={t}>
      <tr>
     <td><button style={st11} onClick={hf}>Hooks Form</button></td> 
     <td> <button style={st11} onClick={hr}>Hooks Random</button></td> 
      </tr>
      </table>
       {count}
      
    </div>
  );
}

export default HCounter;