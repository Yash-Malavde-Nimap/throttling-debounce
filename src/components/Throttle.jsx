/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Throttle = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef(null);

  const handleMouseMovement = (e) => {
    const { clientX, clientY } = e;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setMousePosition({ x: clientX, y: clientY });
      console.log(`Mouse moved to: X=${clientX}, Y=${clientY}`);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        border: "4px solid gray",
        padding: "50px",
        color:'#b4b4b4',
        borderRadius:'10px'
      }}
    >
      <h2>Throttle</h2>
      <marquee
        style={{
          width: "200px",
          color: "#f5ff42",
          fontSize: "16px",
        }}
        direction="left"
        scrollAmount="2"
      >
        It is triggering the expensive call after stopping the mouse Hover ( 500ms )
      </marquee>

      <p>X Co-ordinates : {mousePosition.x}</p>
      <p>Y Co-ordinates : {mousePosition.y}</p>
    </div>
  );
};

export default Throttle;
