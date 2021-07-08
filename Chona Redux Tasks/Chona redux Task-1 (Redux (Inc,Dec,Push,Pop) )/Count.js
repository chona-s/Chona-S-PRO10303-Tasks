import React from "react";
import store, {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "../store";

function Count() {
  const increment = () => {
    store.dispatch({ type: COUNTER_INCREMENT });
    console.log(">> Inc <<", store.getState());
  };

  const decrement = () => {
    store.dispatch({ type: COUNTER_DECREMENT });
    console.log(">> Dec <<", store.getState());
  };
  const creset = () => {
    store.dispatch({ type: COUNTER_RESET });
    console.log(">> Count is RESET to 0 <<", store.getState());
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
                For Count Value:
              </h3>
            </td>
          </tr>
          <tr>
            <td>
              <button style={st21} onClick={increment}>
                Increment
              </button>
            </td>
            <td>
              <button style={st21} onClick={decrement}>
                Decrement
              </button>
            </td>
            <td>
              <button style={st21} onClick={creset}>
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Count;
