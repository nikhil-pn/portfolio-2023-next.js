import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import HeroBanner from "@/components/HeroBanner";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroBanner></HeroBanner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </>
  );
}
