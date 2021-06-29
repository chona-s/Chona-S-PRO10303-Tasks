import React, { Component } from 'react'

 class TableHead extends Component {
    render() {
        const t1={
            width:"90%",
            border:"1px solid black",
            borderCollapse: "collapse",
            marginLeft: "auto" ,
            marginRight: "auto"
          }
          const t2={
            border:"1px solid black",
            borderCollapse: "collapse"
          }
          const t3={
            width:"50%",
            border:"1px solid black",
            borderCollapse: "collapse"
          }
        return (
            <div>
                <tr>
          <th style={t2}>USER ID</th>
          <th style={t2}> ID</th>
          <th style={t3}>TITLE</th>
          <th style={t3}>BODY</th>
        </tr>
            </div>
        )
    }
}

export default TableHead
