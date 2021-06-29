import React, { useState } from "react";

function HRandom() {
  const [item, setItem] = useState([]);

  const addItem = () => {
    setItem([
      ...item,
      {
        id: item.length,
        value: Math.floor(Math.random() * 10) + 1,
        img:""
      },
    ]);
  };
  const n1={
    background:"Red",
    fontSize:"30px"
  }
  const n2={
    background:"Blue",
    fontSize:"30px"
  }
  const n3={
    background:"Black",
    fontSize:"30px",
    color:"white"
  }
  const n4={
    background:"Orange",
    fontSize:"30px",
    color:"white"
  }
  const n5={
    background:"Green",
    fontSize:"30px",
    color:"white"
  }
  const n6={
    background:"Brown",
    fontSize:"30px",
    color:"white"
  }
  const n7={
    background:"Aqua",
    fontSize:"30px",
    color:"white"
  }
  const n8={
    background:"white",
    fontSize:"30px",
    color:"Black"
  }
  const n9={
    background:"Pink",
    fontSize:"30px",
    color:"white"
  }
  const n10={
    background:"Yellow",
    fontSize:"30px",
    color:"white"
  }
  const st11 = {
    fontFamily: "Kirang Haerang",
    border: "dotted",
    backgroundColor: "rgba(0, 0, 0, 0)",
    padding: "5px 5px",
    borderRadius: "25px",
    color: "#884EA0 ",
    fontSize:"45px"
  }
  const m={
    backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRakT1aXUwCfPTodnNsG1jMi4Zon61iQft_mw&usqp=CAU')",
backgroundSize: "1550px",

  }
  const h={
    fontSize:"50px",
    fontFamily: "Kirang Haerang",
    color:"Olive "
  }

  return (
    <div style={m} >
      <br></br>
      <h1 style={h} >Hooks Random</h1>
      <button style={st11} onClick={addItem}>Add a item</button>
      {item.map((item) => (
          <div key={item.id}>
           {item.value == 1
          ?<div style={n1}> Hii </div> 
          : <div> {item.value == 2
            ?<div style={n2}> Hloo </div> 
            : <div>{item.value == 3
              ?<div style={n3}> How </div> 
              : <div> {item.value == 4
                ?<div style={n4}> what </div> 
                : <div> {item.value == 5
                  ?<div style={n5}> who </div> 
                  : <div> {item.value == 6
                    ?<div style={n6}> welcome </div> 
                    : <div> {item.value == 7
                      ?<div style={n7}> React </div> 
                      : <div> {item.value == 8
                        ?<div style={n8}> HTML </div> 
                        : <div> {item.value == 9
                          ?<div style={n9}> CSS </div> 
                          : <div> {item.value == 10
                            ?<div style={n10}> JS </div> 
                            : null}
                             </div>}
                           </div>}
                         </div>}
                      </div>}
                     </div>}
                   </div>}
                 </div>}
               </div>}
             </div>}
          
           </div>
        ))}
      
      
        
    </div>
  );
}

export default HRandom;
