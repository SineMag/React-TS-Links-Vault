import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import LinkTable from "./LinkTable";

export default function Searchbar() {
  const searchLink = () =>
  {
   <LinkTable />;
  }
  return (
    <div
      className="searchbar-container"
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: "10px",
        border: "1px solid black",
        borderRadius: "15px",
        padding: "5px",
        gap: "5px",
      }}
    >
      <input
        type="text"
        placeholder="Search Links "
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: "0.8rem",
          paddingLeft: "5px",
        }}
      />

      <button onClick={searchLink}
        className="searchButton"
        style={{
          fontSize: "2rem",

          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          textDecoration:'none'
        }}
      >
        <IoSearchCircleSharp/>
      </button>
    </div>
  );
}
