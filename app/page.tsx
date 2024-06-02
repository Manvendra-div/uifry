
import Advantages from "@/components/Advantages";
import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <NavBar />
      <Hero/>
      <Features/>
      <Advantages/>
      <Testimonial/>
      <FAQ/>
      <Banner/>
      <Footer/>
    </main>
  );
}
