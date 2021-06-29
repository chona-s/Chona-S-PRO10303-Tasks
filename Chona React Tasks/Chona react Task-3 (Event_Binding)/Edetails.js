import React, { Component } from 'react'

class Edetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
empN:" " ,
cN:"" ,
rn:"",  
des:"",
wl:"",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8aiVPCo0eLGAQ6SEPBDZWhHq_YF5emOk3fQ&usqp=CAU"    
        }
        }

    e1 = () =>{
        this.setState({
         message: 'Event Binding' ,
          empN:"Chona S" ,
          cN:"Hakuna Matata" ,
         rn:"303",  
         des:"Trainee-Associate Software Engineer",
          wl:"Chennai",
        img:"https://miro.medium.com/max/525/1*lyyXmbeoK5JiIBNCnzzjjg.png"
        },
        console.log(this.state.message))
    }
e2 = () =>{
            this.setState({
              empN:"Kamali S" ,
              cN:"Mindtree" ,
             rn:"106",  
             des:"Trainee-Associate Software Engineer",
              wl:"Chennai",
            img:"https://cdn1.iconfinder.com/data/icons/avatar-3/512/Waitress-512.png"
            },
            console.log(this.state.message))
        }


    render() {
    const str1={
        width:"50%",
        textAlign: "center",
        fontFamily: "'Courgette', cursive",
        marginLeft:"500px"
     }
     const str3={
        
        textAlign: "left"
        
     }
     const str2={
        width:"200px",
        hight:"200px",
        position:"relative",
        left:"100px"
        
     }
     const st12={
        fontFamily: "'Courgette', cursive",
        border: "dotted",
        backgroundColor:"rgba(0, 0, 0, 0)",
        padding: "5px 15px",
        borderRadius: "25px"
        }
        const sr1={
            fontFamily: "'Courgette', cursive",
            textAlign:"center",
            fontSize:"50px"
        }
        return (
            <div>
                <h1 style={sr1}>Event Binding</h1>
<p >
    <h3 style={ {fontFamily: "'Courgette', cursive"}}>Click on the employee number to view the details:</h3>
            <table style={str1}>
                <tr><img style={str2} src={this.state.img}  alt="logo" /></tr>
        <tr>
            <td>Employee Name:</td>
            <td style={str3}>{this.state.empN}</td>
        </tr>
        <tr>
            <td>Company Name:</td>
            <td  style={str3}>{this.state.cN}</td>
        </tr>
        <tr>
            <td>Roll No:</td>
            <td  style={str3}>{this.state.rn}</td>
        </tr>
        <tr>
            <td>Designation:</td>
            <td  style={str3}>{this.state.des}</td>
        </tr>
        <tr>
            <td>Work Place:</td>
            <td  style={str3}>{this.state.wl}</td>
        </tr>
         </table>
        </p>
                <button style={st12} onClick={()=>this.e1()}>Employee-1</button>
                <button style={st12} onClick={this.e2}>Employee-2</button>
            </div>
        )
    }
}

export default Edetails;

