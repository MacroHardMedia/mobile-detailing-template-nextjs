import Layout from "../components/layout/Layout";
import Hero from "../components/section/Hero";
import About from "../components/section/About";
import Services from "../components/section/Services";
import Contact from "../components/section/Contact";
import Packages from "../components/section/Packages";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Packages />
      <Contact />
    </Layout>
  );
}
