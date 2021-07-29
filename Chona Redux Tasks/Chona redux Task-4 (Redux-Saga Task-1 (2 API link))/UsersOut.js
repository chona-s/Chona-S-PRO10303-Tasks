import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GET_USERS, SET_SDATA, SET_USERS, SR_DATA } from "../Redux-Saga/Action";
import "./RS.css";

export function Users(props) {
  return (
    <div>
      <h1 className="sglow">Redux-Saga (Task-1)</h1>
      <div className="tc1">
        <div className="td1"></div>

        <div className="td11">
          <h2 style={{ color: "rgb(226, 235, 204)" }}>
            Database (Name, Mail-id)
          </h2>
          <table className="tt1" cellPadding="10px">
            <tr>
              <td>
                <button className="tcb1" onClick={props.getUsers}>
                  ShowData
                </button>
              </td>
              <td>
                <button className="tcb2" onClick={props.rdata}>
                  RemoveData
                </button>
              </td>
            </tr>
          </table>

          <table className="tsc2" cellPadding="10px" cellSpacing="0">
            {props.ltable}
            <tbody className="tbody2 ">
              {props.data.length > 0 &&
                props.data.map((x, i) => (
                  <div key={{ i }}>
                    <td className="log">{x.name}</td>
                    <td className="pas">{x.email}</td>
                  </div>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="tc2">
        <div className="td2"></div>

        <div className="td22">
          <h2 style={{ color: "rgb(226, 235, 204)" }}>Database (Id, Title)</h2>
          <table className="tt2" cellPadding="10px">
            <tr>
              <td>
                <button className="tab1" onClick={props.getdata}>
                  GetData
                </button>
              </td>
              <td>
                <button className="tab2" onClick={props.rdata}>
                  RemoveData
                </button>
              </td>
            </tr>
          </table>
          <table className="tsc1" cellPadding="10px" cellSpacing="0">
            {props.utable}
            <tbody className="tbody1">
              {props.data1.length > 0 &&
                props.data1.map((x, i) => (
                  <div key={i}>
                    {/* <td className="tbui">{x.userId}</td> */}
                    <td className="tbid">{x.id}</td>
                    <td className="tbtit"> {x.title}</td>
                    {/* <td className="tbb">{x.body}</td> */}
                  </div>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.users.data || ["Name_Mail-id Database"],
    data1: state.users.data1 || [],
    ltable: state.users.ltable,
    utable: state.users.utable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch({ type: GET_USERS });
    },
    getdata: () => {
      dispatch({ type: SET_SDATA });
    },
    rdata: () => {
      dispatch({ type: SR_DATA });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
