import React, { Component } from "react";

class TableHead extends Component {
  render() {
    const t2 = {
      width: "250px",
      boxShadow: "5px 4.5px 4.5px 0px #154360",
      borderCollapse: "collapse",
      color: "rgb(226, 235, 204)",
      textShadow: "3px 3px 3px  black",
      border: " 1px solid #154360",
    };
    const t3 = {
      width: "250px",
      boxShadow: "5px 4.5px 4.5px 0px #154360",
      borderCollapse: "collapse",
      color: "rgb(226, 235, 204)",
      textShadow: "3px 3px 3px  black",
      border: " 1px solid #154360",
    };
    return (
      <div>
        <tr>
          <th style={t2}>Name</th>
          <th style={t3}>Mail-ID</th>
        </tr>
      </div>
    );
  }
}

export default TableHead;
