import React from "react";
import LinkTable from "./LinkTable";

export default function Form() {
  const saveButton = () => {
    <LinkTable />;
  };
  return (
    <form
      action="#"
      method="get"
      style={{
        marginTop: "20px",
        width: "100%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        borderRadius: "15px",
      }}
    >
      <button
        type="submit"
        style={{
          padding: "10px",
          borderRadius: "15px",
          border: "none",
          backgroundColor: "#7456F5",
          maxWidth: "20%",
          color: "white",
          cursor: "pointer",
        }}
      >
        Add Link Below
      </button>
      {/* Title */}
      <label htmlFor="title">Title*</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Enter the name for your link"
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
          https://
        </span>
        <input
          type="text"
          id="link"
          name="link"
          placeholder="Link description"
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
        placeholder="Link description"
        style={{
          border: "1px solid #347fc4",
          borderRadius: "15px",
          padding: "10px",
          outline: "none",
        }}
        aria-required="true"
      />

      {/*Tags */}
      <label htmlFor="description">Tags(Comma Separated)</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Link tags"
        style={{
          border: "1px solid #347fc4",
          borderRadius: "15px",
          padding: "10px",
          outline: "none",
        }}
        aria-required="false"
      />

      {/* save Button */}
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
        onClick={saveButton}
      >
        Save Link
      </button>
    </form>
  );
}
