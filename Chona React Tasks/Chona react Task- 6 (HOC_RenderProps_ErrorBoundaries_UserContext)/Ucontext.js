import React, { Component } from 'react'
import Ucontext1 from'./Ucontext1'
import Boundary from "./Boundary";

export const UserContext = React.createContext();
export class Ucontext extends Component {
    
    render() {
        const s1={
            backgroundImage:"url(https://i.pinimg.com/564x/12/c4/b8/12c4b8cd871d898c78010cca2b52c82a.jpg",
            backgroundSize:"cover",
            textAlign:"center",
            borderRadius: "50px",
            color:"#FFFFFF"
        }
        return (
            <div style={s1}>
                <h1>User Context</h1>
      <UserContext.Provider value={<Boundary/>}>
          <Ucontext1 />
      </UserContext.Provider>

            </div>
        )
    }
}

export default Ucontext
