import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

export default function Searchbar() {
  return (
    <div
      className="searchbar-container"
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: "10px",
        border: "1px solid #347fc4",
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

      <div
        className="searchButton"
        style={{
          fontSize: "2rem",

          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <IoSearchCircleSharp />
      </div>
    </div>
  );
}
