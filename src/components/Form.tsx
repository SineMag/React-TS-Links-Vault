import React from "react";

export default function Form() {
  return (
    <form
      action="#"
      method="get"
      style={{
        marginTop: "20px",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        borderRadius: "15px",
      }}
    >
      {/* Title */}
      <label htmlFor="title">Title*</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Enter the name for your link..."
        style={{
          border: "1px solid #347fc4",
          borderRadius: "15px",
          padding: "10px",
          outline: "none",
        }}
        aria-required="true"
      />

      {/* Link */}
      <label htmlFor="link">Link*</label>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #347fc4",
          borderRadius: "15px",
          padding: "5px",
        }}
      >
        <span
          style={{
            backgroundColor: "#d1d1d1",
            padding: "10px",
            borderRadius: "10px 0 0 10px",
          }}
        >
          http://
        </span>
        <input
          type="text"
          id="link"
          name="link"
          placeholder="Link description..."
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            padding: "10px",
          }}
          aria-required="true"
        />
      </div>

      {/* Description */}
      <label htmlFor="description">Description*</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Enter/paste your link here..."
        style={{
          border: "1px solid #347fc4",
          borderRadius: "15px",
          padding: "10px",
          outline: "none",
        }}
        aria-required="true"
      />

            <button
        type="submit"
        style={{
          padding: "10px",
          borderRadius: "15px",
          border: "none",
          backgroundColor: "white",
          width:'30%',
          color: "black",
          boxShadow:'0 0px 0.5px 01px',
          cursor: "pointer",
          
        }}
      >
        + Add another
      </button>

      {/* Submit Button */}
      <button
        type="submit"
        style={{
          marginTop: "10px",
          padding: "10px",
          borderRadius: "15px",
          border: "none",
          backgroundColor: "#7456F5",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
}
