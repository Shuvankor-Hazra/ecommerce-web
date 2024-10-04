import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";


const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
    </div>
  );
}

export default App;
