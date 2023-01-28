import React from "react";
import "../App.css";
import Logo from "../assets/boginooLogo.png";
import { Link, useParams } from "react-router-dom";
import Show from "../components/Show";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import History from "../components/history";
import { useState, useEffect } from "react";
function Home({ data, setData }) {
  const params = useParams();
  const [url, setUrl] = useState("");
  const [history, setHistory] = useState();
  const [id, setId] = useState("");
  const [email, setEmail] = useState();
  const getUser = async () => {
    const res = await axios.get(`http://localhost:8000/users/${params.id}`);
    setEmail(res.data.data.email);
    setHistory(res.data.data.Link);
    console.log(history);
  };
  const createPost = async () => {
    const res = await axios.post("http://localhost:8000/links", {
      Longlink: url,
      user_id: params.id,
      token: JSON.parse(localStorage.getItem("token")),
    });
    setId(res.data.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="header">
        <div className="topHeader">
          <p className="topHeaderShit" style={{ marginRight: "60px" }}>
            Хэрхэн ажилладаг вэ?
          </p>

          <Link to={"/login"}>
            <div
              className="pee"
              style={{
                width: "200px",
                height: "40px",
                marginRight: "150px",
                marginTop: 20,
                fontWeight: 900,
              }}
            >
              {email}👤
            </div>
          </Link>
          <Link to={"/"}>
            <button
              className="button"
              style={{
                width: "200px",
                height: "40px",
                marginRight: 150,
                marginTop: 20,
              }}
            >
              Гарах
            </button>
          </Link>
        </div>
        <div
          className="bottomHeader"
          style={{ marginTop: "160px", marginBottom: 40 }}
        >
          <Link to={"/"}>
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="input">
          <input
            type="text"
            className="inputs"
            placeholder="https://www.web-huudas.mn"
            onChange={(e) => setUrl(e.target.value)}
            style={{ width: "700px", height: "35px" }}
          />
          <button
            className="button"
            style={{ width: "200px", height: "45px", marginLeft: 40 }}
            onClick={() => createPost()}
          >
            Богиносгох
          </button>
        </div>
      </div>
      <div className="historyContainer">
        <div className="history">
          {id && (
            <div>
              <History data={id} setData={setId} />
            </div>
          )}
          {history &&
            history.map((data) => {
              return <History data={data} />;
            })}
        </div>
      </div>
      <div className="footer">
        <div className="texts" style={{ marginTop: "410px" }}>
          <p className="secondMainShit" style={{ color: "black" }}>
            Made with ❤️ by Nest Academy
          </p>
          <p
            className="secondMainShit"
            style={{ color: "gray", fontSize: "13px", marginLeft: "60px" }}
          >
            ©boginoo.io 2023
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
