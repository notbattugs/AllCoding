import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Signup from "./Pages/Signup";
import Links from "./Pages/Links";
import HomeLogged from "./Pages/HomeLogged";
import axios from "axios";
export const instance = axios.create({
  baseURL: "http://localhost:4200//",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/:shortId" element={<Links />} />
          <Route path="/users/:id" element={<HomeLogged />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
