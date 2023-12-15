import Footer from "../Layouts/Footer";
import Hero from "../Components/Hero";
import EditorsPick from "../Components/EditorsPick";
import HomeBestSellers from "../Layouts/HomeBestSellers";
import SliderHomeTwo from "../Components/SliderHomeTwo";
import FeaturedPosts from "../Components/FeaturedPosts";
import PartOf from "../Components/PartOf";

function HomePage() {
  return (
    <>
      <Hero />
      <EditorsPick />
      <HomeBestSellers />
      <SliderHomeTwo />
      <PartOf />
      <FeaturedPosts />
      <Footer />
    </>
  );
}

export default HomePage;
