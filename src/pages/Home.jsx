import Banner from "../components/Home/Banner";
import DeviceAnalytics from "../components/Home/DeviceAnalytics";
import Faq from "../components/Home/FAQ";
import Partners from "../components/Home/Partners";

const Home = () => {
  return (
    <div className="main-container">
      <Banner />
      <DeviceAnalytics />
      <Faq />
      <Partners />
    </div>
  );
};

export default Home;
