import { useState } from "react";
import Banner from "@/components/Banner";
import CardContainer from "@/components/CardContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchField from "@/components/SearchField";
import { allLinks } from "@/data/allLinks";
import { SearchFieldProps } from "@/types/types";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLinks = allLinks.filter(
    (link) =>
      link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="max-w-[100%] bg-slate-100">
      <Navbar />
      <Banner />
      <SearchField onSearchChange={setSearchTerm}/>
      <CardContainer links={filteredLinks}/>
      <Footer />
    </main>
  );
}
