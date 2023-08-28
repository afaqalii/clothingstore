import "./App.css";
import ItemsList from "./components/ItemsList/ItemsList";
import Navbar from "./components/Navbar/Navbar";
import OurStory from "./components/OurStory/OurStory";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Category from "./components/category/Category";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Category/>
      <ItemsList/>
      <OurStory/>
    </>
  );
}

export default App;
