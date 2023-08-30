import "./App.css";
import ItemsList from "./components/ItemsList/ItemsList";
import Navbar from "./components/Navbar/Navbar";
import OurStory from "./components/OurStory/OurStory";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Benefits from "./components/benefits/Benefits";
import Category from "./components/category/Category";
import Hero from "./components/hero/Hero";
import NewCollection from "./components/newCollection/NewCollection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Category/>
      <ItemsList/>
      <OurStory/>
      <NewCollection/>
      <Benefits/>
    </>
  );
}

export default App;
