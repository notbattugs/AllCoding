import ADD from "../components/Add";
import ViewUrlComponent from "../components/See";
import Header from "../components/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div style={{ width: "300px", height: "100px" }}></div>
      <ADD />
      <ViewUrlComponent />
    </>
  );
};
export default Home;
