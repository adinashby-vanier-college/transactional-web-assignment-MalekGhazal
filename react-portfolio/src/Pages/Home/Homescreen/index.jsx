import AboutMe from "../AboutMe";
import Hero from "../Hero";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import WeatherAPI from "../WeatherAPI";

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
      <Footer />
    </>
  );
}
