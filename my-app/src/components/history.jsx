import React from "react";
import "../App.css";
function history({ data, setData }) {
  return (
    <div className="coogi">
      <span className="letter">Өгөгдсөн холбоос:</span>
      <p className="url One">{data.Longlink}</p>
      <span className="letter">Богино холбоос:</span> <br />
      <div href={data.Shortlink} className="url Two">
        http://localhost:3000/{data.Shortlink}
      </div>
      <span
        className="secondMainShit"
        style={{ textDecorationLine: "underline", marginLeft: 20 }}
      >
        Хуулж авах
      </span>
    </div>
  );
}

export default history;
