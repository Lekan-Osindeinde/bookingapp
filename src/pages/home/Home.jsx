import Features from "../../components/features/Features";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Features />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;
