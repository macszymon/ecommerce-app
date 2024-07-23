import "./Hero.css"

import image from "../../assets/hero.jpg"

function Hero() {
  return (
    <section className="hero">
        <h1 className="hero__header">SALE</h1>
        <h2 className="hero__subheader">up to 70% off</h2>
        <button className="btn btn--primary">Buy Now</button>
        <img className="hero__img" src={image} alt="" />
    </section>
  )
}

export default Hero