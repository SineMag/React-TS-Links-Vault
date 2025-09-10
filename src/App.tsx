// import { useState } from 'react'
import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Searchbar from "./components/Searchbar";
import Form from "./components/Form";
import Edit from "./components/Edit";
import Footer from "./components/Footer";
import LinkTable from "./components/LinkTable";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <div
        style={{
          // border:'1px solid red',
          // display:'flex',
          // flexDirection:'column',
          width: "100%",
          height: "100%",
          justifyContent: "start",
          alignItems: "start",
          padding: "0 3%",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100",
          }}
        >
          <Heading />

          <Searchbar />
          <Form />
         

          <LinkTable />

          {/* to show cards with the user's information */}
          <Cards />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
