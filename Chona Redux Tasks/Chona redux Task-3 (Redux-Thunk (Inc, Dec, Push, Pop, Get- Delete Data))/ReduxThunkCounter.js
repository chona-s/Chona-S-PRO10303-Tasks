import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  POP,
  PUSH,
  SET_DATA,
} from "../storeT";
import "./RRT.css"
import TableHead from "./ThunkTableHead";

const ReduxThunkCounter = (props) => {

  const removeData = () => {
    props.removeData();
  };

  return (
    <div>
      <h1 className="tglow">Redux-Thunk</h1>
      <div className="tc1">
        <div className="td1"></div>
        <div className="td11">
          <table className="tt1">
            <tr>
              <td>
                <h1>Count is - {props.count}</h1>
              </td>
            </tr>
            <tr>
              <td>
                <button className="tcb1" onClick={props.increment}>
                  Increment
                </button>
              </td>
              <td>
                <button className="tcb2" onClick={props.decrement}>
                  Decrement
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="tc2">
        <div className="td2"></div>
        <div className="td22">
          <table className="tt2">
            <tr>
              <td style={{ textAlign: "right" }}>
                <h1 style={{ textAlign: "right" }}>
                  Lenth of the Array - {props.test.length}
                </h1>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <button className="tab1" onClick={props.push}>
                  Push
                </button>
              </td>
              <td style={{ textAlign: "right" }}>
                <button className="tab2" onClick={props.pop}>
                  Pop
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="tc3">
        <div className="td3"></div>

        <div className="td33">
          <table className="tt3" cellPadding="10px">
            <tr>
              <td>
                <button className="tgb1" onClick={props.setData}>
                  GetData
                </button>
              </td>
              <td>
                <button className="tgb2" onClick={removeData}>
                  RemoveData
                </button>
              </td>
            </tr>
          </table>

          <table className="tsc" cellPadding="10px" cellSpacing="0">
            {props.head}
            <tbody style={{ height: "400px",width:"850px" }}>
              {props.data.length > 0 &&
                props.data.map((x, i) => (
                  <div key={i}>
                    <td className="tbui">{x.userId}</td>
                    <td className="tbid">{x.id}</td>
                    <td className="tbtit"> {x.title}</td>
                    <td className="tbb">{x.body}</td>
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
    head: state.storage.head
  };
};

//Thunk
const thunkGetDataFun = (status) => {
  return (dispatch, getState) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result) => {
      console.log(status,getState());
      console.log("Data fetched", result.data);
      dispatch({ type: SET_DATA, data: result.data, head:<TableHead/> });
    });
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
      dispatch(thunkGetDataFun("Thunk function called"));
    },
    removeData: () => {
      console.log("inside remove");
      dispatch({ type: "removeData" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunkCounter);