import React, { useState } from "react";
import axios from "axios";

const ADD = () => {
  const [url, setUrl] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!url) {
      alert("please enter something");
      return;
    }

    axios
      .post("http://localhost:3333/short", { origUrl: url })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    setUrl("");
  };
  console.log(url);

  const styles = {
    img: {
      width: "184px",
      height: "118px",
    },
    input: {
      width: "581px",
      height: "44px",
      background: "#FFFFFF",
      border: " 1px solid #F0F0F0",
      boxShadow: " 0px 1px 5px rgba(0, 0, 0, 0.16)",
      borderRadius: "100px",
    },
    button: {
      width: "192px",
      height: "44px",
      background: "#02B589",
      border: "1px solid white",
      borderRadius: "100px",
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "22.98px",
      color: "#FFFFFF",
    },
  };
  return (
    <div>
      <main>
        <section className="w-100 d-flex flex-column justify-content-center align-items-center">
          <img
            src="https://scontent.fuln8-1.fna.fbcdn.net/v/t1.15752-9/325048084_715117196868182_7557731926428328107_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=pk8DmaKCEGoAX_2FYpR&_nc_ht=scontent.fuln8-1.fna&oh=03_AdSR34SDqiuqpzSqtsYvZ2-SmPl_IalxAJ7AUFrKsu8UgA&oe=63E73F72"
            alt=""
            style={styles.img}
          />
          <div style={{ height: "50px" }}></div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="           https://www.web-huudas.mn"
              value={url}
              onChange={({ target }) => setUrl(target.value)}
              style={styles.input}
            />

            <button type="submit" style={styles.button}>
              Богиносгох
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ADD;
