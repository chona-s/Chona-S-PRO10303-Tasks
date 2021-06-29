import React, { useState } from "react";

function HForm() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const changeHandler = (e) => {
    setName({
      ...name,
      firstName: e.target.value,
    });
  };
  const m={
    backgroundImage:"url('https://images.fineartamerica.com/images-medium-large-5/colorful-orange-yellow-storm-clouds-at-sunset-keith-webber-jr.jpg')",
backgroundSize: "1550px",

  }
const c={
  position: "absolute",
  top: "100%",
  left: "49%",
  transform: "translate(-50%, -50%)",

}
const n={
  fontFamily:" 'Yellowtail'",
  color:"#FBFCFC",
  fontSize:"48px",
}
const h={
  fontFamily:" 'Courgette', cursive",
  color:"#CB4335 ",
  fontSize:"48px",
}
const h2={
  fontFamily:" 'Courgette', cursive",
  color:"#C0392B",
  fontSize:"25px",
}
const cake={
  width:"500px",
  height:"500px",
}
const st12 = {
  border: "dashed",
  backgroundColor: "rgba(0, 0, 0, 0)",
  borderColor:"#C0392B",
  color:"#C0392B",
  fontFamily:" 'Courgette', cursive",
  fontSize:"15px"
}

  return (
    <div style={m}>
      <br></br>
      <h1 style={h}>Form Using Hooks</h1>
      <div>
     <h4 style={h2}>Enter the Name (To print on the cake):</h4>
      <input type="text"  style={st12} onChange={changeHandler} />
      </div>
      <br></br>
  <img src="https://1.bp.blogspot.com/-KARxTRgdcJM/V_MgJeOkFsI/AAAAAAAAgmI/ud1G554kaf8Pot0VnxpSz3IW65tl2CukwCLcB/s1600/2.%2BSimple%2BBirthday%2BCake%2BSimple%2BCake%2BDecorating%2BFor%2BA%2BBirthday%2BCake%2BOf%2BYour%2BLoved%2BOnes.jpg" alt="Snow"  style={cake}></img>
  <div class="centered" style={c}><h1 style={n}>{name.firstName}</h1></div>
    </div>
  );
}

export default HForm;