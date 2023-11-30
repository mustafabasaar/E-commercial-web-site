import Footer from "../Layouts/Footer";
import Hero from "../Components/Hero";
import EditorsPick from "../Components/EditorsPick";
import HomeBestSellers from "../Layouts/HomeBestSellers";
import SliderHomeTwo from "../Components/SliderHomeTwo";

function HomePage() {
  return (
    <>
      <Hero />
      <EditorsPick />
      <HomeBestSellers />
      <SliderHomeTwo />
      <Footer />
    </>
  );
}

export default HomePage;
