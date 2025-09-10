import React from "react";
import { FaLink } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function Heading() {
  const iconStyle = {
    fontSize: "0.8rem",
    padding: "5px",
    borderRadius: "50%",
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    
  };

  return (
    <div
      className="heading"
      style={{
        border: "5px solid #347fc4",
        width: "40vw",
        height: "5vh",
        marginTop: "10px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "5px",
        alignItems: "center",
      }}
    >
      <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
      }}>
      <div
        className="logo"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <h2 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaLink /> Links Vault
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <span style={iconStyle}><FaHome /></span>
        <span style={iconStyle}><FaSearch /></span>
        <span style={iconStyle}><FaUsersViewfinder /></span>
        <span style={iconStyle}><FaHistory /></span>
        <span style={iconStyle}><CgProfile /></span>
      </div>
    </div>
    </div>
  );
}
