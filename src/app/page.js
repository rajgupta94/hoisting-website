import Topbar from "../components/layout/Topbar";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import DomainSearch from "../components/home/DomainSearch";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Features from "../components/home/Features";
import Pricing from "../components/home/Pricing";
import WhyChooseHost from "../components/home/WhyChooseHost";
import Migration from "../components/home/Migration";
import Testimonials from "../components/home/Testimonials";
import GetLive from "../components/home/GetLive";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-primary relative flex flex-col items-center">
      <Topbar />
      <Navbar />

      <main className="flex-1 flex flex-col w-full relative">
        <Hero />
        <DomainSearch />
        <WhyChooseUs />
        <Features />
        <Pricing />
        <WhyChooseHost />
        <Migration />
        <Testimonials />
        <GetLive />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
