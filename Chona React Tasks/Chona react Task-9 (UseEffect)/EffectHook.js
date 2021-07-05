import React, { useState, useEffect } from "react";

function EffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");

  //UseEffect has a parameter which will executes every time when component is renrendered
  useEffect(() => {
    console.log("useEffect rendered");
    document.title = `You have clicked ${count} times`;
    console.log(name);
  }, [count]);

  const Change = (e) => {
    e.preventDefault();
    setName1(name);
  };

  return (
    <div>
      <form onSubmit={Change}>
        <br></br>
        <br></br>
        <br></br>
        <table
          style={{ width: "20%", marginLeft: "auto", marginRight: "auto" }}
        >
          <tr>
            <td>
              <input
                type="text"
                style={{
                  fontFamily: "MV Boli",
                  borderRadius: "25px",
                  borderColor: "black",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  color: "brown",
                }}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <button
                onClick={() => setCount(count + 1)}
                style={{
                  fontFamily: "MV Boli",
                  borderRadius: "20%",
                  boxShadow: "0.5px 1px 0.5px 0.5px black",
                  borderColor: "black",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  color: "black",
                }}
              >
                {" "}
                Submit{" "}
              </button>
            </td>
          </tr>
        </table>
        <h2
          style={{ fontFamily: "MV Boli", color: "#C9E706", fontSize: "40px" }}
        >
          Submit button clicked <b>{count} </b>times
        </h2>
      </form>

      <h2 style={{ fontFamily: "MV Boli", color: "#C9E706", fontSize: "40px" }}>
        Input: {name1}
      </h2>
    </div>
  );
}

export default EffectHook;
