import AboutMe from "../AboutMe";
import Hero from "../Hero";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import WeatherAPI from "../WeatherAPI";
import Footer from "../Footer";
import Reviews from "../Reviews";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <>
      <Hero />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <WeatherAPI />
      <Reviews />
      <Footer />
      <Link
        smooth={true}
        offset={-70}
        duration={500}
        to="heroSection"
        className="shadow btn-primary rounded-circle back-to-top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </Link>
    </>
  );
}
