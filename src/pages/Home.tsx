import Header from "@/components/Header"
import Divider from "@/components/Divider";
import Info from "@/components/Info";
import Navbar from "../layout/Navbar";
import Social from "@/components/Social";
import About from "@/components/About";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-background flex justify-center mt-2">
      <div className="border-l-1 border-r-1 border-accent w-3xl z-10">
        <Navbar />
        <Header />
        <Divider />
        <Info />
        <Divider />
        <Social />
        <Divider />
        <About />
        <Divider />
      </div>
    </div>
  );
};

export default Home;
