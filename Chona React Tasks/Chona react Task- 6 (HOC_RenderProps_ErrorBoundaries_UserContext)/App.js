import React from "react";
import './App.css'; 
import Hig1 from './comp/Hig1';
function App() {
    const a1={
    fontSize:"50px",
    color:"#BB06C6",
    fontFamily:"Big Shoulders Stencil Display"
    }
   return (
    <div className="App">
    <h1 style={a1}>HOC, Render Props, Error Boundaries and User Context
    </h1>
<Hig1/>

</div>
);
}

export default App;
