import Competitions from "./components/Competitions";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import ForWho from "./components/ForWho";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <ForWho />
      <Competitions />
      <Courses />
      <News />
      <Footer />
    </>
  );
};

export default App;
