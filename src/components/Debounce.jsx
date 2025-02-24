/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";

const Debounce = () => {
  const [input, setInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        border: "4px solid gray",
        padding: "40px",
        color: "#b4b4b4",
        borderRadius: "10px",
      }}
    >
      <h2>Debounce</h2>

      <marquee
        style={{
          width: "200px",
          color: "#f5ff42",
          fontSize: "16px",
        }}
        direction="left"
        scrollAmount="2"
      >
        It will delay the input value to reduce the number of API calls in
        search Functionality ( 500ms )
      </marquee>
      <input
        type="text"
        placeholder="Enter Name..."
        value={input}
        onChange={handleChange}
        style={{
          background: "transparent",
          outline: "none",
          border: "none",
          padding: "10px",
          color: "#b4b4b4",
          fontWeight: "500",
          fontSize: "16px",
          borderBottom: "1px solid gray",
        }}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default Debounce;
