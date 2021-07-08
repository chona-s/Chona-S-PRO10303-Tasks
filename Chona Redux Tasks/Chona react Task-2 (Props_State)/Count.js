import React, { Component } from 'react';

class Count extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
         }
    }
    inc(){
        this.setState({
            count: this.state.count + 1,
           
        })
    }
    dec(){
        this.setState({
            count: this.state.count - 1
        })
    }
    re(){
        this.setState({
            count: 0
        })
    }
    render(){
        const st11={
            width:"90%",
            textAlign: "center",
            fontFamily: "'Courgette', cursive"
            }
            const st12={
                fontFamily: "'Courgette', cursive",
                border: "dotted",
                backgroundColor:"rgba(0, 0, 0, 0)",
                padding: "5px 15px",
                borderRadius: "25px"
                }
                const st13={
                    textAlign: "left",
                    fontFamily: "'Courgette', cursive"
                    }
        return(
            <div>
                <table style={st11}>
                <tr>
                    <p>Count= {this.state.count}</p>
                </tr>
              <tr style={st13}>
                  <td >
                  <button style={st12} onClick={() => this.inc()}>Increment</button>
                  </td>
                  <td>
                  <button style={st12} onClick={() => this.dec()}>Decrement</button>
                  </td>
              </tr> 
               <tr> 
                   <br></br>
                   <button style={st12} onClick={() => this.re()}>Reset</button>
               </tr>
               </table>
            </div>
        )
    }
}

export default Count;