import React, { useState, useEffect } from "react";
import "./UEff.css";
function EffectMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [name, setname] = useState("");

  const logMouseCordinates = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
    if (
      e.clientX > 0 &&
      e.clientX < 399 &&
      e.clientY > 200 &&
      e.clientY < 459
    ) {
      setname("Dog");
    } else if (
      e.clientX > 400 &&
      e.clientX < 799 &&
      e.clientY > 200 &&
      e.clientY < 459
    ) {
      setname("Cat");
    } else if (
      e.clientX > 800 &&
      e.clientX < 1199 &&
      e.clientY > 200 &&
      e.clientY < 459
    ) {
      setname("Rose");
    } else if (
      e.clientX > 1200 &&
      e.clientX < 1535 &&
      e.clientY > 200 &&
      e.clientY < 459
    ) {
      setname("Clock");
    } else if (
      e.clientX > 0 &&
      e.clientX < 399 &&
      e.clientY > 460 &&
      e.clientY < 720
    ) {
      setname("Laptop");
    } else if (
      e.clientX > 400 &&
      e.clientX < 799 &&
      e.clientY > 460 &&
      e.clientY < 720
    ) {
      setname("Food");
    } else if (
      e.clientX > 800 &&
      e.clientX < 1199 &&
      e.clientY > 460 &&
      e.clientY < 720
    ) {
      setname("Phone");
    } else if (
      e.clientX > 1200 &&
      e.clientX < 1535 &&
      e.clientY > 460 &&
      e.clientY < 720
    ) {
      setname("Printer");
    } else if (
      e.clientX > 0 &&
      e.clientX < 1535 &&
      e.clientY > 0 &&
      e.clientY < 199
    ) {
      setname("(Please Place the mouse on any picture)");
    }
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMouseCordinates);

    return () => {
      console.log("Component unmount");
      window.removeEventListener("mousemove", logMouseCordinates);
    };
  }, []);

  return (
    <div className="d1" style={{ fontFamily: "Bahnschrift Condensed" }}>
      <h1 style={{ color: "rgb(216 250 2)" }}>
        Place the MOUSE above the PICTURE to know its NAME.
      </h1>
      <h2>
        <b>Position:</b>
        <b style={{ color: "#04e8ff" }}>
          X- {x} , Y- {y}
        </b>
      </h2>
      <h2>
        <b>Name:</b>
        <b style={{ color: "#04e8ff" }}> {name} </b>
      </h2>
    </div>
  );
}

export default EffectMouse;
