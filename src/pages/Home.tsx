import Header from "@/components/Header"
import Divider from "@/components/Divider";
import Navbar from "../layout/Navbar";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-background flex justify-center mt-2">
      <div className="border-l-1 border-r-1 border-accent w-3xl z-10">
        <Navbar />
        <Header />
        <Divider />
      </div>
    </div>
  );
};

export default Home;
