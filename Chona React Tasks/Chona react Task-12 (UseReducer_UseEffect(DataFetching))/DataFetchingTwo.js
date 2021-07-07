import React, { useReducer, useEffect } from "react";
import axios from "axios";
import TableHead from "./TableHead";
import "./test.css";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };

    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log(response);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  const t1 = {
    width: "85%",
    border: "1px solid #FDFEFE",
    borderCollapse: "collapse",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    opacity: "0.7",
    color: "#21618C",
    boxShadow: "2.5px 2.5px 2.5px 2.5px #FDFEFE",
    borderColor: "#FDFEFE",
  };

  const t2 = {
    borderCollapse: "collapse",
    boxShadow: "0px 1px 1px 0px #154360",

    width: "4.7%",
  };
  const t21 = {
    borderCollapse: "collapse",
    boxShadow: "0px 1px 1px 0px #154360",

    width: "2.9%",
  };
  const t3 = {
    borderCollapse: "collapse",
    boxShadow: "0px 1px 1px 0px #154360",
    width: "46.9%",
  };
  const t31 = {
    borderCollapse: "collapse",
    boxShadow: "0px 1px 1px 0px #154360",
  };
  return (
    <div>
      <h1 className="glow">Data Fetching Using Reducer and Use Effect</h1>
      <br></br>

      <table style={t1} className="scroll" cellPadding="10px">
        <TableHead />
        <tbody style={{ height: "450px" }}>
          {state.loading
            ? "Loading"
            : state.post.map((inf) => (
                <div key={inf.id}>
                  <td style={t2}>{inf.userId}</td>
                  <td style={t21}>{inf.id}</td>
                  <td style={t3}> {inf.title}</td>
                  <td style={t31}>{inf.body}</td>
                </div>
              ))}
        </tbody>
      </table>

      {state.error ? state.error : null}
    </div>
  );
}
export default DataFetchingTwo;
