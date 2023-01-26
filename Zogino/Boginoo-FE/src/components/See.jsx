import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewUrlComponent = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrlAndSetUrl = async () => {
      const result = await axios.get("http://localhost:8000/All");
      setUrls(result.data);
    };
    fetchUrlAndSetUrl();
  }, [urls]);

  const styles = {
    Url: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      color: "#000000",
      opacity: 0.5,
    },

    UralTwo: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "23px",
      textDecoration: "none",
      color: "black",
    },
    ARUL: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 800,
      marginLeft: "100px",
      color: "#02B589",
    },
  };
  return (
    <>
      <div style={{ height: "100px" }}></div>
      <div>
        <div>
          {/* <div style={{ width: "auto", overflow: "scroll", height: "500px" }}> */}
          <div>
            <h1 style={styles.ARUL}>Түүх</h1>
            {urls.map((url, idx) => (
              <tr key={idx}>
                <div style={{ display: "flex", marginLeft: "100px" }}>
                  <div>
                    <p style={styles.Url}>Өгөгдсөн холбоос:</p>
                    <a
                      href={url.origUrl}
                      target="_blank"
                      style={styles.UralTwo}
                    >
                      {url.origUrl}
                    </a>
                    <hr />
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <hr />
                  <div>
                    <p style={styles.Url}>Богино холбоос:</p>
                    <a
                      href={url.shortUrl}
                      target="_blank"
                      style={styles.UralTwo}
                    >
                      {url.shortUrl}
                    </a>
                    <hr />
                  </div>
                </div>
              </tr>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUrlComponent;
