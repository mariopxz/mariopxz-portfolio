import Header from "@/components/Header"
import Divider from "@/components/Divider";
import Info from "@/components/Info";
import Navbar from "../layout/Navbar";
import Social from "@/components/Social";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen w-screen bg-background flex justify-center mt-2">
      <div className="border-l-1 border-r-1 min-h-screen border-accent w-3xl z-10">
        <Navbar />
        <Header />
        <Divider />
        <Info />
        <Divider />
        <Social />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Footer />
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 rounded-full border border-input bg-background px-2 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground"
        >
          <ChevronUp />
        </button>
      </div>
    </div>
  );
};

export default Home;
