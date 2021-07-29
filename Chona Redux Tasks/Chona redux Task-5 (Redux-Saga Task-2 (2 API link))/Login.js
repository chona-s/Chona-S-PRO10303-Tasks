import React, { useEffect , useState} from "react";
import { connect } from "react-redux";
import { GET_USERS, SET_SDATA, SET_USERS, SR_DATA } from "./Action";

import SagaTHead from "./SagaTHead"
import axios from "axios";

export function Out1(props) {
  const [name, setname] = useState("")
  const [bn, setbn] = useState("")
  const [bm, setbm] = useState("")
  const [mail, setmail] = useState("")
  const [output, setoutput] = useState([])
  const n=(e)=>{
    setname( e.target.value)
  }
  const click=()=>{
    setbn( name)
setbm(mail)
props.getUsers()
  }
  const m=(me)=>{
    setmail(me.target.value)
  }

  return (
    <div>

      <div >
        <div></div>

        <div >
          <h2 style={{ color: "rgb(226, 235, 204)" }}>Database (Id, Title)</h2>
          <table className="tt2" cellPadding="10px">
            <tr>
              <td>
                <button className="tab1" onClick={props.data}>
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
              {
                props.data1.map((x, i) => (
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
}

const StateToProps = (state) => {
  return {
    data: state.users.data || [],
    data1: state.users.data1 || [],
    ltable: state.users.ltable,
    utable: state.users.utable,
  };
};

const DispatchToProps = (dispatch) => {
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

export default connect(StateToProps, DispatchToProps)(Out1);
