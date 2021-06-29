import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

//state -> initialState
//action -> dipatch method parameter
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,firstCounter: state.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...state,firstCounter: state.firstCounter - action.value,
      };
    case "increment5":
      return {
        ...state, secondCounter: state.secondCounter + action.value,
      };
    case "decrement5":
      return {
        ...state,secondCounter: state.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Reducer4() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const t1={
    width:"90%",
  marginLeft:"auto",
  marginRight:"auto"
  }
  const m={
    backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-O9VSdp5uOsY3nieAzs-OZPHhOTAYX7IH_Udg4AKIpigk8jww4S2aO2KSxKelHQW9LM&usqp=CAU')",
backgroundSize: "cover",
width:"60%",
  marginLeft:"auto",
  marginRight:"auto",
  borderRadius:"20px",
 opacity:"0.7"
  }
  const h={
    fontFamily:"'Big Shoulders Stencil Display', cursive",
    fontSize:"50px",
    color:"#D35400"
}
const st21 = {
  border: "dashed",
  borderColor: "#5D6D7E ",
  backgroundColor: "rgba(0, 0, 0, 0)",
  padding: "5px 5px",
  margin: " 8px 0",
  boxSizing: "border-box",
  borderRadius: "5px",
  color: "#5D6D7E",
  textAlign: "center",
}
const h2={
  color:"#717D7E"
}
  return (
    <div style={m}>
      <h1 style={h}>Use Reducer</h1>
      <h3 style={h2}>CountOne : {count.firstCounter}</h3>
      <h3 style={h2}>CountTwo : {count.secondCounter}</h3>
      <table style={t1}>
        <tr>
          <td>
      <button style={st21} onClick={() => dispatch({ type: "increment", value: 1})}>
        Increment CountOne
      </button>
      </td>
      <td>
      <button style={st21} onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement CountOne
      </button>
      </td>
      <td>
      <button style={st21} onClick={() => dispatch({ type: "increment5", value: 5 })}>
        Increment CountTwo by 5
      </button>
      </td>
      <td>
      <button style={st21} onClick={() => dispatch({ type: "decrement5", value: 5 })}>
        Decrement CountTwo by 5
      </button>
      </td>
      <td>
      <button style={st21} onClick={() => dispatch({ type: "reset", value: 1 })}>
        Reset
      </button>
      </td>
      </tr>
      </table>
    </div>
  );
}

export default Reducer4;