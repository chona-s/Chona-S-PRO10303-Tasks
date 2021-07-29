import React, { Component } from "react";

class TableHead extends Component {
  render() {
    const t2 = {
      width: "6%",
      boxShadow: "1px 1px 1px 1px whitesmoke",
      borderCollapse: "collapse",
      color: "rgb(226, 235, 204)",
      textShadow: "3px 3px 3px  black",
      
    };
    const t3 = {
      width: "45%",
      boxShadow: "1px 1px 1px 1px whitesmoke",
      borderCollapse: "collapse",
      color: "rgb(226, 235, 204)",
      textShadow: "3px 3px 3px  black",
    
    };
    return (
      <div>
        <tr>
         <th style={t2}>USER ID</th> 
          <th style={t2}> ID</th>
          <th style={t3}>TITLE</th>
         <th style={t3}>BODY</th> 
        </tr>
      </div>
    );
  }
}

export default TableHead;
