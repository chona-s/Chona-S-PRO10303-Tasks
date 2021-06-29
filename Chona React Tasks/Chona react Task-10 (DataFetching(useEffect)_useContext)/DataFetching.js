import axios from "axios";
import React, { useState, useEffect } from "react";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState();
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  }, [idFromButtonClick]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  const m={
    backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9t_0W7L4KnHNQaGUvgC0u2sku_rPwbkHpw&usqp=CAU')",
backgroundSize: "cover",
width:"60%",
  marginLeft:"auto",
  marginRight:"auto",
  borderRadius:"20px",
 opacity:"0.7"
  }
const t1={
  width:"65%",
  marginLeft:"auto",
  marginRight:"auto",
  color:"Teal",
  fontFamily: "'Sedgwick Ave Display', cursive"
}
const t2={
  textAlign:"left"
}
const t21={
  textAlign:"right"
}
const st12 = {
  fontFamily: "'Courgette', cursive",
  border: "dotted",
  borderColor: "#CF1945 ",
  backgroundColor: "rgba(0, 0, 0, 0)",
  padding: "5px 5px",
  margin: " 8px 0",
  boxSizing: "border-box",
  borderRadius: "20px",
  color: "#CF1945 ",
}
const st21 = {
  fontFamily: "'Courgette', cursive",
  border: "dashed",
  borderColor: "#CF1945 ",
  backgroundColor: "rgba(0, 0, 0, 0)",
  padding: "5px 5px",
  margin: " 8px 0",
  boxSizing: "border-box",
  borderRadius: "5px",
  color: "#CF1945 ",
  fontSize: "18px",
  textAlign: "center",
}
const t11={
  width:"60%",
  marginLeft:"auto",
  marginRight:"auto"
}
const h={
  color:"#B90EBE",
  fontFamily: "'Sedgwick Ave Display', cursive",
    fontSize: "50px", 
  textShadow: "0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 30px #00b3ff, 0 0 40px #00b3ff, 0 0 50px #00b3ff, 0 0 60px #00b3ff, 0 0 70px #00b3ff",
}
const h2={
  color: "#CF1945 ",
  fontSize: "18px",
  fontFamily: "'Courgette', cursive"
}
  return (
    <div style={m}>
      <div>
      <h1 style={h}>Data Fetching Using useEffect</h1>
      <table style={t11} cellSpacing="15px">
        <tr style={t21}><label style={h2}>Enter the ID number to get the Data</label></tr>
     <tr>
     <td style={t21}><input type="text" style={st12} value={id} onChange={handleChange} /></td>
    <td style={t2}><button onClick={handleClick} style={st21}>Fetch Data</button> </td> 
      </tr>
      </table> 
      <h3>
        <table style={t1} cellSpacing="10px" >
       <tr>
         <td style={t2}>USERID: </td> 
         
           <td></td>
           <td style={t2}>{posts.userId}</td>
       </tr>
       <tr>
         <td style={t2}>ID: </td>
         
           <td></td>
           <td style={t2}>{posts.id}</td>
       </tr>
       <tr>
         <td style={t2}>TITLE: </td>
         
           <td></td>
           <td style={t2}>{posts.title}</td>
       </tr>
       <tr>
         <td style={t2}>BODY: </td> 
        
           <td></td>
           <td style={t2}>{posts.body}</td>
       </tr>
       </table>
      </h3>
      </div>
    </div>
  );
}

export default DataFetching;