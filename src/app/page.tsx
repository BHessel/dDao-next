"use client";

import { useState } from "react";
import Banner from "@/components/Banner";
import CardContainer from "@/components/CardContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchField from "@/components/SearchField";
import CategoryDropdown from "@/components/CategoryDropdown";
import { allLinks } from "@/data/allLinks";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // const filteredLinks = allLinks.filter(
  //   (link) =>
  //     link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     link.description.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filteredLinks = allLinks.filter(
    (link) =>
      (link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!selectedCategory || link.category === selectedCategory)
  );

  const uniqueCategories = [...new Set(allLinks.map(link => link.category))];

  return (
    <main className="max-w-[100%] bg-slate-100">
      <Navbar />
      <Banner />
      <SearchField onSearchChange={setSearchTerm} />
      <CategoryDropdown
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={uniqueCategories}
      />
      <CardContainer links={filteredLinks} />
      <Footer />
    </main>
  );
}
