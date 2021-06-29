import React, { Component } from "react";
import ProductInformation from './Error';
import ErrorBoundary from './Eboundary';

class Boundary extends Component{
  
render(){
  const s4={
    backgroundImage:"url(https://cdn1.vectorstock.com/i/1000x1000/26/05/round-light-frame-shining-square-banner-vector-17402605.jpg)",
    backgroundSize:"cover",
    textAlign:"center",
      margin: "0px 50px 75px 50px",
      borderRadius: "50px",
      color:"#CCCCFF"
  }
        return(<div style={s4}>

        <h2>Error Boundary</h2>
      <ErrorBoundary>
        <ProductInformation productName="Football" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProductInformation productName="Fridge" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProductInformation productName="Table" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProductInformation productName="Furniture" />
      </ErrorBoundary> 
        </div>)
    }
}


export default Boundary