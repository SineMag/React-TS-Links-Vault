// import { useState } from 'react'
import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Searchbar from "./components/Searchbar"

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
  </div>
  </>;
}

export default App;
