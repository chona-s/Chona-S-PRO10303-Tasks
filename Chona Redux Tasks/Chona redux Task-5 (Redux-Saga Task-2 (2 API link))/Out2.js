import React, { useEffect , useState} from "react";
import { connect } from "react-redux";
import { GET_USERS, SET_SDATA, SET_USERS, SR_DATA } from "./Action";
import "./RS2.css";
import SagaTHead from "./SagaTHead"
import axios from "axios";
import Login from "./Login";

export function Out(props) {
  const [name, setname] = useState("")
  const [bn, setbn] = useState("")
  const [bm, setbm] = useState("")
  const [mail, setmail] = useState("")
const [war, setwar] = useState("hloo")
  const n=(e)=>{
    setname( e.target.value)
  }
  const click=()=>{
    setbn( name)
setbm(mail)
props.getUsers()
  props.getdata()
  
  }
  const m=(me)=>{
    setmail(me.target.value)
  }
  const wa=()=>{
   setwar("")
  }
 var a= (<h1>hiiii</h1>)

      
  
  return (
    <div>
      <h1 className="sglow">Redux-Saga (Task-2)</h1>

      <div className="tc1b">
        <div className="t1bb"></div>
      <div className="td11">
</div></div>

      <div className="tc1">
        <div className="td1"></div>
      <div className="td11">
      <table className="tt2" cellPadding="0px">
        <tr><td><h3 className="no">Login to view the <br></br>Database</h3></td></tr>
        <tr><td><label className="nw">Name</label></td></tr>
            <tr>
        <td>
              <input className="nin" type="Password" onChange={n}></input>
              </td>
              </tr>
              <tr><td><label className="mw">Mail-Id:</label></td></tr>
              <tr>
              <td>
              <input className="min" type="text"  onChange={m}></input>
              </td>
              <br></br>
            </tr>
          </table>
          <br></br>
          <div className="bd">
          <button className="sn" onClick={click}>Login</button>
          </div>
      
        </div>
      </div>


      { props.data.map((x, i) => (
                  <div key={ i }>
                    {x.email == bm ? x.name == bn ? <div> 
                      <div className="tc2">
        <div className="td2"></div>

        <div className="td22">
          <h2>Database</h2>
                      <table className="tsc1" cellPadding="10px" cellSpacing="0">
            <SagaTHead/>
            <tbody className="tbody1">
              
              {a="",
                props.data1.map((x, j) => (
                  <div key={j}>
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
                :null: i==9 &&  
                <div className="wc">
                <div className="wd"></div>
        
                <div className="wdd">
                  <h1 className="nm">Enter correct<br></br> Name and Mail-id<br></br> to view the Database.
                    
                  </h1>
                              
                  </div>
                            </div> }
                  </div>
                ))}
         
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.users.data || [],
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

export default connect(mapStateToProps, mapDispatchToProps)(Out);
