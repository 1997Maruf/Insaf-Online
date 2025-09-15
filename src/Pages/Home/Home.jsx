// import img from "../../assets/img/ezgif.com-animated-gif-maker.gif";
import About from "./About/About";
// import Cart from "./Cart/Cart";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
import Services from "./Services/Services";
import SuccessRate from "./SuccessRate/SuccessRate";
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <SuccessRate></SuccessRate>
      <Services></Services>

      <Pricing></Pricing>
      {/* <Cart></Cart> */}
      <Contact></Contact>
    </div>
  );
};

export default Home;
