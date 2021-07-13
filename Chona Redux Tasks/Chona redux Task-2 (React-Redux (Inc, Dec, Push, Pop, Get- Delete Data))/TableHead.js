import React, { Component } from "react";

class TableHead extends Component {
  render() {
    const t2 = {
      width: "30px",
      boxShadow: "5px 4.5px 4.5px 0px #154360",
      borderCollapse: "collapse",
      color: "white",
      border: " 1px solid #154360",
    };
    const t3 = {
      width: "50%",
      boxShadow: "5px 4.5px 4.5px 0px #154360",
      borderCollapse: "collapse",
      color: "white",
      border: " 1px solid #154360",
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
