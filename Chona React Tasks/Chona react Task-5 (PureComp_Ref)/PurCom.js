import React, { Component, PureComponent } from 'react'

class PurCom extends PureComponent {
    render() {
        return (
            <div>
                <h1>Pure Component </h1>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

export default PurCom