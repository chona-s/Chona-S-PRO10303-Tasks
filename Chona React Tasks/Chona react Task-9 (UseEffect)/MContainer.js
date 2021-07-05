import React, { useState } from "react";
import EffectMouse from "./EffectMouse";
import EffectHook from "./EffectHook";
function MContainer() {
  const [display, setDisplay] = useState(true);
  const [Ehook, setEhook] = useState(true);
  const t = {
    width: "100%",
  };
  return (
    <div>
      <h1
        style={{
          fontFamily: "Monotype Corsiva",
          fontSize: "50px",
          color: "rgb(40 27 240 / 90%",
        }}
      >
        Use Effect and Toogle Display
      </h1>
      <table style={t}>
        <tr>
          <td style={{ textAlign: "right" }}>
            <button
              style={{
                borderRadius: "45%",
                boxShadow: "1.5px 1px 1.5px 1.5px red",
                borderColor: "red",
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "brown",
              }}
              onClick={() => setEhook(!Ehook)}
            >
              <b>
                <br></br>UseEffect<br></br> (Toogle Display)<br></br>
                <br></br>
              </b>
            </button>
          </td>
          <td>
            <button
              style={{
                borderRadius: "45%",
                boxShadow: "1.5px 1px 1.5px 1.5px red",
                borderColor: "red",
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "brown",
              }}
              onClick={() => setDisplay(!display)}
            >
              <br></br>
              <b>
                Mouse-Move using Use Effect <br></br>(Toogle Display)
              </b>
              <br></br>
              <br></br>
            </button>
          </td>
        </tr>
      </table>
      {display && <EffectMouse />} {Ehook && <EffectHook />}
    </div>
  );
}

export default MContainer;
