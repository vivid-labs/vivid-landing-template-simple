import { Features } from "../components/Features";
import { FeatureBlocks } from "../components/FeatureBlocks";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Newsletter } from "../components/Newsletter";
import { Testimonials } from "../components/Testimonials";

const Home = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="flex flex-col overflow-hidden text-gray-800 dark:text-gray-100">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Features />
        <FeatureBlocks />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
