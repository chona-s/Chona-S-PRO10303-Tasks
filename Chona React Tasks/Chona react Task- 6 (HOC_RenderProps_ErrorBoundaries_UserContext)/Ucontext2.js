import React from "react";
import {UserContext} from './Ucontext';

function Ucontext2(){
  const s3={
    backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2Z-SOVVOL3CtZVUL5eODGzxByyaVSQm-4A&usqp=CAU)",
    backgroundSize:"cover",
    textAlign:"center",
      margin: "0px 50px 75px 50px",
      color:"Fuchsia",
      borderRadius: "50px"
}

  return(<div style={s3}>
      <h3>This is User Context2</h3>
     <UserContext.Consumer>
       {
         a=>{
           return <div >{a}</div>
         }
       }
     </UserContext.Consumer>
  </div>)
}
export default Ucontext2