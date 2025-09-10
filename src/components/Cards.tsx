import React from "react";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import Modal from "./Modal";

interface ClickButton {
  title: string;
  link: string;
  description: string;
  tags?: string;
}

export default function Cards() {
  const deleteClick = () => {
    alert('the button works');
  }
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
      <div style={{
        width:'100%',
      }}>
        <h4 style={{width:'100%', display: "flex" }}>
          Title: <p>****************</p>
        </h4>
        <br />
        <h4 style={{ display: "flex" }}>
          Link: <p>****************</p>
        </h4>
        <br />
        <h4 style={{ display: "flex", maxWidth:'100%' }}>
          Description: <p>***********</p>
        </h4>
      

      {/* edit and delete icons/buttons */}

      <div className="editDelete" style={{padding:'1%', maxWidth:'100%', display: "flex", justifyContent:'space-between'
       }}>
        <button className="edit" style={{fontSize:'150%'}}> <MdModeEdit  /></button>
        <button onClick={deleteClick} className="delete" style={{fontSize:'150%'}}><RiDeleteBinLine color="red"  /> <Modal /></button>
      </div>
      </div>
    </div>
  );
}
