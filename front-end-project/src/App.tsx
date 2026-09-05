import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
      </main>
      <Footer />
    </>
  );
}
