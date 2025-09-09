// import { useState } from 'react'
import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Searchbar from "./components/Searchbar";
import Form from "./components/Form";
import Button from "./components/Button";
import Edit from './components/Edit';
import Footer from "./components/Footer";

function App() {
  return <>
  
<div  style={{
  // border:'1px solid red',
  display:'flex',
  flexDirection:'column',
  width: '100%',
  height:'100%',
  justifyContent:'start',
  alignItems:'center'

}}>
  <div>
  <Heading />
  <Searchbar />
  <Form />
  <Button />
  <Edit /> 
     <div>
    <Footer />
  </div>
  </div>


  </div>


 
  </>;
}

export default App;
