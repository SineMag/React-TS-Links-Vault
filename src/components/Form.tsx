import React from "react";

export default function Form() {
  return (
    <div
      style={{
        marginTop: "20px",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        borderRadius: "15px",
        height: "5%",
      }}
    >
      <div
        style={{
          //   border:'1px solid red',
          width: "150%",
          display: "flex",
          flexDirection: "column",
          padding: "2px",
          gap: "1rem",
        }}
      >


        <form action="#" method="get"  style={{
        border: "1px solid #347fc4",
        width:'67%',
        borderRadius:'15px',
         padding:'10px'}}>
          <label htmlFor="title">Title:</label>

          <input
            type="text"
            placeholder=" Enter the name of your link..."
            style={{
              border: "none",
              outline: "none",
            }}
            name="link"
            aria-required="true"
          />
        </form>

              <form action="#" method="get"  style={{
        border: "1px solid #347fc4",
        width:'67%',
        borderRadius:'15px',
         padding:'10px'}}>
          <label htmlFor="title">Description:</label>

          <input
            type="text"
            placeholder=" Link description..."
            style={{
              border: "none",
              outline: "none",
            }}
            name="link"
            aria-required="true"
          />
        </form>

              <form action="#" method="get"  style={{
        border: "1px solid #347fc4",
        width:'67%',
        borderRadius:'15px',
         padding:'10px'}}>
          <label htmlFor="title">Link:</label>

          <input
            type="text"
            placeholder=" Enter/paste your link here..."
            style={{
              border: "none",
              outline: "none",
            }}
            name="link"
            aria-required="true"
          />
        </form>
      </div>
    </div>
  );
}
