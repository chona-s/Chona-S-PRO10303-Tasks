import React, { Component } from "react";
import axios from "axios";
import TableHead from "./TableHead";

class GetCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookinfo: [],
      t:""
    };
  }
 
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("response : ", response);
        this.setState({
            bookinfo: response.data,
        });
      })
      .catch((error) => {
        console.log("error : ", error);
      });
      
  }
  
  render() {
    const m={
      backgroundImage:"url('data:image/jpeg;base64,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')",
backgroundSize: "1550px",
backgroundRepeat: "repeat"
    }
    const s={
      fontSize:"60px",
      color:"#8E44AD",
      fontFamily:"Big Shoulders Stencil Display"
    }
    const s1={
      fontSize:"30px",
      color:"#3498DB",
      fontFamily:"Viaoda Libre"
    }
    const t1={
      width:"90%",
      border:"1px solid black",
      borderCollapse: "collapse",
      marginLeft: "auto" ,
      marginRight: "auto"
    }
    const t2={
      width:"5.1%",
      border:"1px solid black",
      borderCollapse: "collapse"
    }
    const t21={
      width:"3.6%",
      border:"1px solid black",
      borderCollapse: "collapse"
    }
    const t3={
      width:"45.6%",
      border:"1px solid black",
      borderCollapse: "collapse"
    }
    const t31={
      
      border:"1px solid black",
      borderCollapse: "collapse"
    }
    const { bookinfo } = this.state;
    console.log('current state',this.state)
    return (
      <div style={m}>
        <h1 style={s}>GetCall</h1>
        <h3 style={s1}>The Data in the DataBase are:</h3>
        <table style={t1} cellPadding="15px" cellSpacing="15px">
        {1 == 1
          ?<div> <TableHead/></div> 
          : null}
        {bookinfo.length
          ?  bookinfo.map((info) => (
              <div key={info.id}>
               
                 <td style={t2}>{info.userId}</td> <td style={t21}>{info.id}</td> <td style={t3}> {info.title}</td><td style={t31} >{info.body}</td>
                 
              </div>
             
            ))
          : null}
          
          </table>
      </div>
    );
  }
}

export default GetCall;