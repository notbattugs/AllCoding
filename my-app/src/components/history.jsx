import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
function History({ data }) {
  return (
    <div className="coogi">
      <span className="letter">Өгөгдсөн холбоос:</span>
      <p className="url One">{data.Longlink}</p>
      <span className="letter">Богино холбоос:</span>

      <br />
      <div href={data.Shortlink} className="url Two">
        http://localhost:3000/{data.Shortlink}
        <Button onClick={{}}>X</Button>
        <hr />
      </div>
      {/* <span
        className="secondMainShit"
        style={{ textDecorationLine: "underline", marginLeft: 20 }}
      >
        Хуулж авах
      </span> */}
    </div>
  );
}

export default History;
