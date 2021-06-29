import React, { Component } from 'react'
import Ucontext from './Ucontext';

class Renderprop extends Component {
    constructor(props){
        super(props);
        this.state={
            username:<Ucontext/>
        }
    }

    render() {
        return (
            <div>
                {
                this.props.render(
                    this.state.username
                )}
            </div>
        )
    }
}


export default Renderprop