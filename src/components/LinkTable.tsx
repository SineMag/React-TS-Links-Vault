import React from "react";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default function LinkTable() {
  return (
    <div
      id="linkTables"
      style={{
        // border: "1px solid black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <MdDoNotDisturbAlt size={30} color="#3C7EC1" />{" "}
      <h3
        style={{
          color: "#3C7EC1",
          fontSize: "25px",
          paddingLeft: "2%",
        }}
      >
        {" "}
        No Links Found!{" "}
      </h3>
    </div>
  );
}
