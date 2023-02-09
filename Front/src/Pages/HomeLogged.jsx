import { instance } from "../App";
import "../Styles/Home.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const HomeLogged = () => {
  const { id } = useParams();
  const [link, setLink] = useState();
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [history, setHistory] = useState([]);
  const [del, setDel] = useState();
  const [role, setRole] = useState();
  const params = useParams();
  const getUser = async () => {
    const res = await instance.get(`/users/${id}`);
    setName(res.data.data.name);
    setRole(res.data.data.role);
  };

  const getHistory = async () => {
    const res = await instance.get(`/links/?limit=3`);
    setHistory(
      res.data.data.map((el) => {
        setDel(el._id);
        return el.link;
      })
    );
    console.log(res);
    // setHistory(
    //   res.data.data.Link.map((el) => {
    //     setDel(el._id);
    //     return el.link;
    //   })
    // );
  };
  const Page = async () => {
    const res = await instance.get(`/links/?limit=3&skip=3`);
    setHistory(
      res.data.data.map((el) => {
        setDel(el._id);
        return el.link;
      })
    );
  };
  const Page2 = async () => {
    const res = await instance.get(`/links/?limit=3&skip=6`);
    setHistory(
      res.data.data.map((el) => {
        setDel(el._id);
        return el.link;
      })
    );
  };
  const deleteHistory = async () => {
    if (role === "admin") {
      await instance.delete(`/links/${del}`);
    } else {
      toast.error("Admin bish");
    }
  };

  const showShortId = async () => {
    try {
      const res = await instance.post("/links/createlink", {
        user_id: params.id,
        link: link,
        token: JSON.parse(localStorage.getItem("token")),
      });
      setData(res.data.data.url.shortId);
    } catch (error) {
      console.log(error.response.data.data);
    }
  };

  useEffect(() => {
    getUser();
    getHistory();
  }, []);
  return (
    <div className="homeContainer">
      <ToastContainer />
      <header>
        <br />
        <div>
          <div className="boginooButton">{name}</div>
          <div
            className="boginooButton"
            style={{
              marginTop: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none ",
                cursor: " pointer",
              }}
            >
              Log Out
            </Link>
          </div>
        </div>
      </header>

      <main>
        <img src={require("../images/boginooLogo.png")} alt="" />

        <div className="box">
          <input
            placeholder="https://www.web-huudas.mn"
            type="text"
            id="boginooInp"
            onChange={(e) => setLink(e.target.value)}
          />
          <button className="boginooButton" onClick={showShortId}>
            Богиносгох
          </button>
        </div>
        <div style={{ marginTop: 0 }}>
          <p>Өгөгдсөн холбоос:</p>

          <span>{link}</span>
          <p>Богино холбоос:</p>
          <span style={{ color: "purple", fontSize: 20 }}>
            {"localhost:3000/" + data}
          </span>
        </div>
        <h2 style={{ color: "#02B589", margin: 0, padding: 0 }}>Түүх</h2>
        <div className="history">
          {history.map((el, index) => {
            return (
              <div key={index}>
                <div className="history2">
                  <p>Өгөгдсөн холбоос:</p>
                  {el}
                </div>
                <button onClick={deleteHistory}>hogiin sav</button>
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <button onClick={getHistory}>1</button>
        <button onClick={Page}>2</button>
        <button onClick={Page2}>3</button>
        <img src={require("../images/credit.png")} alt="" />
      </footer>
    </div>
  );
};

export default HomeLogged;
