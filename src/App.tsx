// import { useState } from 'react'
import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Searchbar from "./components/Searchbar";
import Form from "./components/Form";

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
  <Heading />
  <Searchbar />
  <Form />
  </div>
  </>;
}

export default App;
