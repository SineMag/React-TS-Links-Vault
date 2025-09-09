import React from "react";

export default function Searchbar() {
  return (
    <div
      className="searchbar-container"
      style={{
        display: "flex",
        alignItems: "center",
        width: "80%",
        marginTop: "10px",
        border: "1px solid #347fc4",
        borderRadius: "15px",
        padding: "5px",
        gap: "5px", 
      }}
    >
      <input
        type="text"
        placeholder="Search "
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: "0.8rem",
          paddingLeft:'5px',
        }}
      />
      

      <div
        className="searchButton"
        style={{
          border: "1px solid black",
          width: "1.3rem",
          height: "1.3rem",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "1px 0px 0 1px",
          cursor: "pointer",
        }}
      >
       
      </div>
    </div>
  );
}
