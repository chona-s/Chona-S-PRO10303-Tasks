import React, { Component } from 'react'
import DataFetching from '../UseEffect/DataFetching';
import UseContext2 from './UseContext2'

export const first = React.createContext();
export const second = React.createContext();

export class UseContext1 extends Component {
    render() {
        return (
            <div>
                <first.Provider value={"Use Context"}>
        <second.Provider value={<DataFetching/>}>
          <UseContext2 />
        </second.Provider>
      </first.Provider>  
            </div>
        )
    }
}

export default UseContext1