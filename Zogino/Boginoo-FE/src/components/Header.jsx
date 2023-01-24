import { Link } from "react-router-dom";
function Header() {
  const styles = {
    Cont: {
      marginTop: "0",
      width: "100%",
      height: "100px",
      display: "flex",
    },
    divOne: {
      width: "50%",
      height: "100px",
      backgroundColor: "",
    },
    HowItWorks: {
      width: "274px",
      height: "12px",
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "23px",
      textTransform: "uppercase",
      color: "#02B589",
    },
    divTwo: {
      width: "100%",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "100px",
    },
    button: {
      width: "183px",
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
    <div style={styles.Cont}>
      <div style={styles.divOne}></div>
      <div>
        <div style={styles.divTwo}>
          <p style={styles.HowItWorks}>Хэрхэн ажилладаж вэ?</p>
          <Link to="/login">
            <button style={styles.button}>Нэвтрэх</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
