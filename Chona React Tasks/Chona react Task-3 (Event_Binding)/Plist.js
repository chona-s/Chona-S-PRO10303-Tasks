import { render } from '@testing-library/react'
import React from 'react'
import Fend from './Ed'

function ProductList(props) {
const front=[
        {
            id:"1. ",
            ls: "Uniform Resource Locators (aka URLs)",
          },
          {
            id:"2.",
            ls: "Hypertext Transfer Protocol (aka HTTP)",
              },
             {
             id:"3. ",
              ls: "Hyper Text Markup Language (aka HTML)",
              },
             {
              id:"4.",
              ls: "Cascading Style Sheets (aka CSS)",
                },
            {
            id:"5. ",
            ls: "JavaScript Programming Language (aka ECMAScript 262)",
            }]

   const frontend = front.map(fr=>(
       <Fend key={fr.id} ft={fr}/>
   ))
const sr={
    fontFamily: "'Courgette', cursive",
    textAlign:"center",
    fontSize:"20px"
}
    return (
        <div >
    <h3 style={sr}>Front-End Technologies</h3>
{frontend}
        </div>
    )
}
export default ProductList

