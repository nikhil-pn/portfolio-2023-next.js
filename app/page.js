import About from "@/components/About";
import Connect from "@/components/Connect";
import Contact from "@/components/Contact";
import Fiverr from "@/components/Fiverr";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Ntec from "@/components/Ntec";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroBanner></HeroBanner>
      <About></About>
      <Skills></Skills>
      <Fiverr></Fiverr>
      <Testimonials></Testimonials>
      <Ntec></Ntec>
      <Connect></Connect>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
