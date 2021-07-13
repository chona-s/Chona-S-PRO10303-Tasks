import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  POP,
  PUSH,
  SET_DATA,
} from "../store";
import "./RR.css";
import TableHead from "./TableHead";

const ReactReduxCounter = (props) => {
  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result) => {
      console.log("Data fetched", result.data);
      props.setData(result.data);
    });
  };

  const removeData = () => {
    props.removeData();
  };

  return (
    <div>
      <h1 className="glow">React-Redux</h1>
      <div className="c1">
        <div className="d1"></div>
        <div className="d11">
          <table className="t1">
            <tr>
              <td>
                <h1>Count is - {props.count}</h1>
              </td>
            </tr>
            <tr>
              <td>
                <button className="cb1" onClick={props.increment}>
                  Increment
                </button>
              </td>
              <td>
                <button className="cb2" onClick={props.decrement}>
                  Decrement
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="c2">
        <div className="d2"></div>
        <div className="d22">
          <table className="t2">
            <tr>
              <td style={{ textAlign: "right" }}>
                <h1 style={{ textAlign: "right" }}>
                  Lenth of the Array - {props.test.length}
                </h1>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <button className="ab1" onClick={props.push}>
                  Push
                </button>
              </td>
              <td style={{ textAlign: "right" }}>
                <button className="ab2" onClick={props.pop}>
                  Pop
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="c3">
        <div className="d3"></div>

        <div className="d33">
          <table className="t3" cellPadding="10px">
            <tr>
              <td>
                <button className="gb1" onClick={getData}>
                  GetData
                </button>
              </td>
              <td>
                <button className="gb2" onClick={removeData}>
                  RemoveData
                </button>
              </td>
            </tr>
          </table>

          <table className="sc" cellPadding="10px" cellSpacing="0">
            {props.head}
            <tbody style={{ height: "400px" }}>
              {props.data.length > 0 &&
                props.data.map((x, i) => (
                  <div key={i}>
                    {" "}
                    <td className="bui">{x.userId}</td>
                    <td className="bid">{x.id}</td>
                    <td className="btit"> {x.title}</td>
                    <td className="bb">{x.body}</td>
                  </div>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    test: state.tester,
    data: state.storage.data || [],
    head: state.storage.head,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: COUNTER_INCREMENT });
    },
    decrement: () => {
      dispatch({ type: COUNTER_DECREMENT });
    },
    push: () => {
      dispatch({ type: PUSH, value: Math.random() });
    },
    pop: () => {
      dispatch({ type: POP });
    },
    setData: (result) => {
      dispatch({ type: SET_DATA, data: result, head: <TableHead /> });
    },
    removeData: () => {
      console.log("inside remove");
      dispatch({ type: "removeData" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxCounter);
