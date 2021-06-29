import React from 'react'
import {useReducer} from "react";
import Reducer4 from './Reducer4';
import RUseContext2 from './RUseContext2';

export const CounterContext = React.createContext();
export const page = React.createContext();

const initialState= {
num:0,
dis:"",
re:""
};
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return { ...state,num: state.num + 1,re:""};
    case "decrement":
      return { ...state,num: state.num - 1,re:""};
      case "Page":
          return{ ...state,dis:<Reducer4/>,re:""};
    case "reset":
      return {num:0,
        dis:"",
        re:"The page has been RESET"};
    default:
      return state;
  }
}


function RUseContext1() {
    const [count,dispatch] = useReducer(reducer, initialState);
  
    return (
        <div>
            <CounterContext.Provider value={{countState1:count.num, countState2:count.dis, countState3:count.re ,countDispatch: dispatch}}> 
            <page.Provider value={{va:<Reducer4/>}}>
          <RUseContext2 />
         </page.Provider>
          </CounterContext.Provider>
        </div>
    )
}

export default RUseContext1