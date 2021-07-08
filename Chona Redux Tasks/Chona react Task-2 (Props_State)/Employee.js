import React from 'react'

const Employee = (props) =>{
    const str1={
        width:"100%",
        textAlign: "left",
        fontFamily: "'Courgette', cursive"
     }
     const str2={
        width:"200px",
        hight:"200px",
        position:"relative",
        left:"100px"
        
     }
    return <div>
        <p >
            <table style={str1}>
                <tr><img style={str2} src={props.img}  alt="logo" /></tr>
        <tr>
            <td>Employee Name:</td>
            <td>{props.empN}</td>
        </tr>
        <tr>
            <td>Company Name:</td>
            <td>{props.cN}</td>
        </tr>
        <tr>
            <td>Roll No:</td>
            <td>{props.rn}</td>
        </tr>
        <tr>
            <td>Designation:</td>
            <td>{props.des}</td>
        </tr>
        <tr>
            <td>Work Place:</td>
            <td>{props.wl}</td>
        </tr>
         </table>
        </p>
    </div>
}

export default Employee;