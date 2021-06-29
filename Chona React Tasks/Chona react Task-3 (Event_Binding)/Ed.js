import React from 'react'

function Fend({ft}) {
     const s1={
        width:"50%",
        textAlign: "center",
        fontFamily: "'Courgette', cursive",
        marginLeft:"500px"
     }
     const s3={
    textAlign: "left"
    }
    const s4={
        textAlign: "center"
        }
    return (
           
            
    <table style={s1}>
         <tr>
             <td style={s4}>{ft.id}</td>
             <td style={s3}> {ft.ls}</td>
             </tr>
             </table>
    
       
    )
}

export default Fend;