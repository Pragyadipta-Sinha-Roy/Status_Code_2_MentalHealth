import React, { useRef } from "react";
import "../style/navbar.css";

export default function Navbar() {
  const fileRef = useRef();

  const handleUploadClick = () => fileRef.current?.click();
  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (f) alert(`Prescription selected: ${f.name}`);
  };

  return (
    <header className="navbar">
      {/*
      <button className="pill" onClick={handleUploadClick}>
        Upload Prescription
      </button>
      */}
      <input
        ref={fileRef}
       
        hidden
        onChange={handleFile}
      />
      <div className="nav-right">
        <button aria-label="User" className="icon">👤</button>
      </div>
    </header>
  );
}
