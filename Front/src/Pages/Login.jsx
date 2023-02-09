import "../Styles/LoginAndSignup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../App";
const Login = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const logIn = async () => {
    try {
      const res = await instance.post("/users/login", {
        email: email,
        password: password,
        role: role,
      });
      console.log(res);
      setRole(res.data.data.role);
      window.location.replace(`/users/${res.data.data._id}`);
      window.localStorage.setItem("token", JSON.stringify(res.data.token));
    } catch (error) {
      toast.error(error.response.data.data);
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="loginContainer">
        <header>
          <br />
          <span className="boginooHerhen">Хэрхэн ажилладаг вэ?</span>
        </header>
        <main>
          <div className="loginBox">
            <img src={require("../images/logo.png")} alt="" className="logo" />
            <p className="boginooP">Нэвтрэх</p>
            <div className="boxThree">
              <label htmlFor="email" className="labels">
                Цахим хаяг
              </label>
              <input
                type="text"
                name="email"
                className="inps"
                placeholder="name@mail.domain"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="boxThree">
              <label htmlFor="pass" className="labels">
                Нууц үг
              </label>
              <input
                type="text"
                name="pass"
                className="inps"
                placeholder="••••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="boxTwo">
              <div>
                <input type="checkbox" name="check" className="checkBox" />
                <label htmlFor="check" className="checkLabel">
                  Намайг сана
                </label>
              </div>
              <Link to={"/forgot"} className="linkStyle">
                Нууц үгээ мартсан
              </Link>
            </div>
            <button type="submit" className="clickGreen" onClick={logIn}>
              Нэвтрэх
            </button>
            <Link to={"/signUp"} className="newUser">
              Шинэ хэрэглэгч бол энд дарна уу?
            </Link>
          </div>
        </main>
        <footer>
          <img src={require("../images/credit.png")} alt="" />
        </footer>
      </div>
    </>
  );
};

export default Login;
