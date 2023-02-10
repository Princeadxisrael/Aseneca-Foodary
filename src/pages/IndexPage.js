import Header from "../components/Header";
import Footer from "../components/Footer";
const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="hero-container">
        <img src="./img/header.jpg" className="hero-image" alt="" />
        <div className="inner-hero-container">
          <h1 className="hero-title">Foodary</h1>
          <p className="hero-content-paragraph">
            What would you do if you have a thousand receipes just right in your
            pocket?
          </p>
          <div className="hero-button-container">
            <button className="hero-button">Learn More</button>
            <button className="hero-button">Foodary Community</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="inner-container">
          <div className="element-items">
            <img src="./img/Food1.jpg" className="element-image" alt="" />
            <p className="element-paragraph">
              Contributed by an amazing community of foodies. With hundreds of
              cuisines curated and tens of recipes created each day, start
              cooking and experience what you can do with your kitchen!
            </p>
          </div>
          <div className="element-items">
            <p className="element-paragraph">
              At Aseneca's Foodary, We value the importance of good taste and we
              ensure that we provide only the best cusines from all over the
              world. How you like it. Exactly how you like it!
            </p>
            <img src="./img/Food2.jpg" className="element-image" alt="" />
          </div>
          <div className="element-items">
            <img src="./img/Food3.jpg" className="element-image" alt="" />
            <p className="element-paragraph">
              With an amazing community of foodies, You can Never go wrong with
              your day-to-day meal. start your journey with Aseneca's Foodary
              and discover how far you can go with your kitchen!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
