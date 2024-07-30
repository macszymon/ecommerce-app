import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import ProductsSlider from "./components/ProductsSlider/ProductsSlider";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <ProductsSlider />
        <Banner/>
        <ProductsSlider/>
        <Newsletter/>
      </main>
    </div>
  );
}

export default App;
