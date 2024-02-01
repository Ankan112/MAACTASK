import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import DeviceAnalytics from "../components/Home/DeviceAnalytics";
import Faq from "../components/Home/FAQ";
import Partners from "../components/Home/Partners";
import Products from "../components/Home/Products";

const Home = () => {
  return (
    <div className="main-container">
      <Banner />
      <DeviceAnalytics />
      <Products />
      <About />
      <Faq />
      <Partners />
    </div>
  );
};

export default Home;
