import React from 'react'
import RUseContext3 from './RUseContext3'

function RUseContext2() {
const h={
    fontFamily:"'Big Shoulders Stencil Display', cursive",
    fontSize:"50px",
    color:"#A569BD"
}
    return (
        <div>
            <h1 style={h}>Use Reducer in Use Context</h1>
            <RUseContext3/>
        </div>
    )
}

export default RUseContext2