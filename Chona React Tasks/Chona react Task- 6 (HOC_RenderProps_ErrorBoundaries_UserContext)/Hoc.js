import React from "react";
import AboutHoc from "./AboutHoc";
import Renderprop from "./Renderprop";


const Hoc = (Sample) =>{
    class Com extends React.Component{
 constructor(){
            super();
            this.state={
                value:"About Hoc (On MouseOver)"
            }
        }
 change =()=>{
            this.setState({
                value:<Renderprop
                render={(username) => (<AboutHoc  username={username} />)
                }/>
               
            })
        }
 render(){
            return(
                <div>
                 <Sample value={this.state.value} change={this.change} 
                />
                   
                </div>
            )
        }
    } 

return Com;
}
export default Hoc;