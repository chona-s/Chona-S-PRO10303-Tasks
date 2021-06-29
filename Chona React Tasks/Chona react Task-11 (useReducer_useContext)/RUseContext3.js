import React, { useContext } from "react";
import { CounterContext } from "./RUseContext1";

function RUseContext3() {
  const countContext = useContext(CounterContext);
 
  const t1={
    width:"20%",
  marginLeft:"auto",
  marginRight:"auto"
  }
  const st21 = {
    border: "dashed",
    borderColor: "#6E2C00",
    backgroundColor: "rgba(0, 0, 0, 0)",
    padding: "5px 5px",
    margin: " 8px 0",
    boxSizing: "border-box",
    borderRadius: "5px",
    color: "#6E2C00 ",
    textAlign: "center",
  }
  const h2={
    color:"#85929E",
    fontSize:"30px"
  }
  const h3={
    fontFamily:"'Akaya Kanadaka', cursive",
    fontSize:"60px",
    color:"#DF4966 "
  }
  return (
    <div>
      <h2 style={h2}><b>Count : {countContext.countState1}</b></h2>
      <table style={t1} >
      <tr>
        <td>
     <button  style={st21} onClick={()=>countContext.countDispatch('increment')}>Increment</button>
     </td>
     <td>
      <button  style={st21} onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
      </td>
      </tr>
      </table>
<br></br>
      <button style={st21} onClick={()=>countContext.countDispatch('Page')}>Use Reducer</button>
      <h1>{countContext.countState2}</h1>
      <br></br>
      <button style={st21} onClick={()=>countContext.countDispatch('reset')}>Reset</button>
      <h1 style={h3}>{countContext.countState3}</h1>
    </div>
  );
}

export default RUseContext3;