import Banner from "@/components/Banner";
import CardContainer from "@/components/CardContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-[100%] bg-slate-100">
      <Navbar />
      <Banner />
      <CardContainer />
      <Footer />
    </main>
  );
}
