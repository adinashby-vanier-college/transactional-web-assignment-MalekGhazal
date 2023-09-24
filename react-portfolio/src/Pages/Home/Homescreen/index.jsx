import AboutMe from "../AboutMe";
import Hero from "../Hero";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import WeatherAPI from "../WeatherAPI";
import Footer from "../Footer";
import Reviews from "../Reviews";

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
      <a
        href="#heroSection"
        class="shadow btn-primary rounded-circle back-to-top"
      >
        <i class="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
}
