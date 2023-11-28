import Footer from "../Layouts/Footer";
import Hero from "../Components/Hero";
import EditorsPick from "../Components/EditorsPick";
import HomeBestSellers from "../Layouts/HomeBestSellers";

function HomePage() {
  return (
    <>
      <Hero />
      <HomeBestSellers />
      <EditorsPick />
      <Footer />
    </>
  );
}

export default HomePage;
