import Topbar from "../components/layout/Topbar";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import DomainSearch from "../components/home/DomainSearch";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-primary relative flex flex-col items-center">
      <Topbar />
      <Navbar />
      
      <main className="flex-1 flex flex-col w-full relative">
        <Hero />
        <DomainSearch />
      </main>
    </div>
  );
}
