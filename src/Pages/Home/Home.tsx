import Banner from "../../components/Banner/Banner";
import Hero from "../../components/Hero/Hero";
import Newsletter from "../../components/Newsletter/Newsletter";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";

function Home() {
  return (
    <>
      <Hero />
      <ProductsSlider title="On Sale" type="sale" image="https://img.freepik.com/free-photo/high-angle-handsome-man-beautiful-woman-outdoors-sun_23-2148803619.jpg?t=st=1722330904~exp=1722334504~hmac=90159d7cb098c50fadac983ca33e63793116731091e1a2198144b644f25c8f2c&w=996" />
      <Banner collection="festival" image="https://img.freepik.com/free-photo/young-friends-having-fun-together_23-2149560743.jpg?t=st=1722331839~exp=1722335439~hmac=8f28d8911832991063ec24e2ef86e2be720ff09976b54279a7932732955ec669&w=740" />
      <ProductsSlider
        title="New In"
        type="new"
        image="https://img.freepik.com/free-photo/embracing-trendy-fashionable-couple-isolated-white-studio-background-caucasian-woman-man-posing-basic-minimal-stylish-clothes-concept-relations-fashion-beauty-love-copyspace_155003-36673.jpg?t=st=1722330839~exp=1722334439~hmac=d4d787284934e4272ca207cf1f8883e597a43e25f86fcee3db9a972923450ee3&w=1060"
      />
      <Banner collection="basic" image="https://img.freepik.com/free-photo/trendy-fashionable-couple-isolated-white-studio-wall_155003-44529.jpg?t=st=1722332730~exp=1722336330~hmac=4185914867a81ec28c80a41ce48eec3526220bb8428e4ce7fc3af3624b7265b6&w=1060" />
      <Newsletter />
    </>
  );
}

export default Home;
