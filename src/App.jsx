import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
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
    <div className="mb-60">
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
    </div>
  );
}

export default App;
