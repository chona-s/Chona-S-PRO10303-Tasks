import React from "react";
import store, { POP, PUSH, RESET } from "../store";

function Array() {
  const push = () => {
    store.dispatch({ type: PUSH, value: Math.random() });
    console.log(">> Push <<", store.getState());
  };

  const pop = () => {
    store.dispatch({ type: POP });
    console.log(">> Pop <<", store.getState());
  };

  const areset = () => {
    store.dispatch({ type: RESET });
    console.log(">> Array is RESET to [] <<", store.getState());
  };

  const t1 = {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const st21 = {
    border: "dashed",
    borderColor: "#5D6D7E ",
    backgroundColor: "rgba(0, 0, 0, 0)",
    padding: "5px 5px",
    margin: " 8px 0",
    boxSizing: "border-box",
    borderRadius: "5px",
    color: "gray",
    textAlign: "center",
  };
  return (
    <div>
      <table style={t1}>
        <tbody>
          <tr>
            <td>
              <h3
                style={{
                  fontFamily: "Segoe Print",
                  fontWeight: "7px",
                  color: "#21618C",
                }}
              >
                For Array Value:
              </h3>
            </td>
          </tr>
          <tr>
            <td>
              <button style={st21} onClick={push}>
                Push
              </button>
            </td>
            <td>
              <button style={st21} onClick={pop}>
                Pop
              </button>
            </td>

            <td>
              <button style={st21} onClick={areset}>
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Array;
