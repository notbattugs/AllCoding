import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import axios from "axios";
function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const Login = async () => {
    try {
      const res = await axios.post("http://localhost:8000/users/login", {
        email: email,
        password: password,
      });
      //   console.log(res);
      //   console.log(res.data.data._id);
      window.location.replace(`/users/${res.data.data._id}`);
      toast.success("amjilttai");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  const styles = {
    img: {
      width: "184px",
      height: "118px",
    },
  };
  return (
    <>
      <div className="header">
        <div className="topHeader">
          <p className="topHeaderShit">Хэрхэн ажилладаг вэ?</p>
        </div>
        <div className="bottomHeader">
          <Link to={"/"}>
            <img
              src="https://scontent.fuln8-1.fna.fbcdn.net/v/t1.15752-9/325048084_715117196868182_7557731926428328107_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=pk8DmaKCEGoAX_2FYpR&_nc_ht=scontent.fuln8-1.fna&oh=03_AdSR34SDqiuqpzSqtsYvZ2-SmPl_IalxAJ7AUFrKsu8UgA&oe=63E73F72"
              alt=""
              style={styles.img}
            />
          </Link>
        </div>
        <div>
          <p className="headerShit">Нэвтрэх</p>
        </div>
      </div>
      <div className="main">
        <div className="input">
          <p className="holder">Цахим хаяг</p>
          <input
            type="text"
            className="inputs"
            placeholder="name@mail.domain"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="holder">Нууц үг</p>
          <input
            type="text"
            className="inputs"
            placeholder="··········"
            style={{ fontWeight: "bolder" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="secondMain">
        <input type="checkbox" name="" id="" className="checkBox" />
        <p className="secondMainShit">Намайг сана</p>
        <Link to={"/forgotpass"}>
          <p
            className="secondMainShit"
            style={{
              color: "black",
              textDecorationLine: "underline",
              marginLeft: "140px",
            }}
          >
            Нууц үгээ мартсан
          </p>
        </Link>
      </div>
      <div className="thridMain">
        <div className="help">
          <button className="button" onClick={() => Login()}>
            Нэвтрэх
          </button>
          <Link to={"/signup"}>
            <p
              className="secondMainShit"
              style={{
                marginLeft: "60px",
                marginTop: "30px",
                textDecorationLine: "underline",
              }}
            >
              Шинэ хэрэглэгч бол энд дарна уу?
            </p>
          </Link>
        </div>
      </div>
      <div className="footer">
        <div className="texts">
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
      <ToastContainer />
    </>
  );
}
export default Login;
