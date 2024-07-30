import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import ProductsSlider from "./components/ProductsSlider/ProductsSlider";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductsSlider />
        <Banner />
        <ProductsSlider />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
