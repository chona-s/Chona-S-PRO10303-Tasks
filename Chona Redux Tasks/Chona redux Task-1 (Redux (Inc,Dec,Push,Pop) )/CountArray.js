import React, { useState } from "react";
import Count from "./Count";
import Array from "./Array";

function CountArray() {
  const [cou, setcou] = useState("");
  const con = () => {
    setcou(<Count />);
    console.log(">>> TO CHANGE COUNT VALUE <<<");
  };

  const [arr, setarr] = useState("");
  const ary = () => {
    setarr(<Array />);
    console.log(">>> TO CHANGE ARRAY VALUE <<<");
  };
  const ca = {
    border: "dotted",
    borderColor: "red ",
    backgroundColor: "rgba(0, 0, 0, 0)",
    padding: "5px 5px",
    margin: " 8px 0",
    boxSizing: "border-box",
    borderRadius: "20px",
    color: "brown",
    textAlign: "center",
  };
  const t = {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <div>
      {" "}
      <h1 style={{ fontFamily: "Bookman Old Style", color: "#A569BD" }}>
        Redux
      </h1>
      <table style={t}>
        <tbody>
          <tr>
            <td>
              <button style={ca} onClick={con}>
                To Change Count Value
              </button>
              {cou}
            </td>
          </tr>
          <tr>
            <td>
              <button style={ca} onClick={ary}>
                To Change Array Value
              </button>
              {arr}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountArray;
