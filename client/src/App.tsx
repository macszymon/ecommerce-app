import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ProductsSlider from "./components/ProductsSlider/ProductsSlider";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <ProductsSlider />
      </main>
    </div>
  );
}

export default App;
