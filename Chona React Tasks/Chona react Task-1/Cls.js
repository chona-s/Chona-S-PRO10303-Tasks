import React from 'react';


class Cls extends React.Component {

  render() {
  const r={
  backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNiPG-ACjo2VxgPsGULICmIFSc6Re3eOAVA&usqp=CAU)" ,
        textAlign: "left",
        backgroundSize:"cover",
        fontFamily: "'Odibee Sans', cursive"
  }
   const r1={
        textAlign: "center",
        fontSize:"80px",
        color:"#9B59B6",
        fontFamily: "'Odibee Sans', cursive"
  }
   const r2={
        textAlign: "center",
         fontFamily: "'Odibee Sans', cursive"
  }
    return <div style={r}>
    <br></br>
    <h2 style={r1}>What I Learned?</h2>
    <p style={r2}>
    <h3>What is React?</h3>
React is a JavaScript library created by Facebook.
<br></br>
React is a tool for building UI components.
</p>
<p>
<h3>Setting up a React Environment...</h3>
<ul>
<li>Create a folder "react js". Then create another folder inside 'react js' as "cho" (folder name can be ANY NAME).</li>
<li>Then open Visual Studio, and type the below commands in the Visual Studio Terminal.</li>
<li>node -v</li>
<li>npm -v</li>
<li>ls</li>
<li>cd D:/</li>
<li>ls</li>
<li>cd '.\react js\'</li>
<li>cd .\cho\</li>
<li>npx create-react-app my-2ndapp</li>
<li>cd .\my-2ndapp\</li>
<li>npm install</li>
<li>npm start</li>
</ul>
</p>
    </div>
  }
}
export default Cls;