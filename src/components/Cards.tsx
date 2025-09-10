import React from "react";

interface ClickButton {
  title: string;
  link: string;
  description: string;
  tags?: string;
}

export default function Cards() {
  return (
    <div
      style={{
        width: "50%",
        height: "15%",
        borderRadius: "15px",
        marginTop: "2%",
        boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.4)",
        padding: "1%",
        display: "flex",
      }}
    >
      {/* options for tags */}
      <div
        style={{
          border: "1px solid black",
          width: "20%",
          height: "90%",
          borderRadius: "15px",
          padding: "2%",
        }}
      >
        <p>card tags will go here</p>
      </div>

      {/* options for link details */}
      <div>
        <h4 style={{ display: "flex" }}>
          Title: <p>****************</p>
        </h4>
        <br />
        <h4 style={{ display: "flex" }}>
          Link: <p>****************</p>
        </h4>
        <br />
        <h4 style={{ display: "flex" }}>
          Description: <p>****************</p>
        </h4>
      </div>
    </div>
  );
}
