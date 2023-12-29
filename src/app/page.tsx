"use client";

import { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import CardContainer from "@/components/CardContainer";
import Navbar from "@/components/Navbar";
import SearchField from "@/components/SearchField";
import CategoryDropdown from "@/components/CategoryDropdown";
import { allLinks } from "@/data/allLinks";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ethPrice, setEthPrice] = useState("");

  useEffect(() => {
    async function fetchEthPrice() {
      const response = await fetch("/api/ethPrice");
      const data = await response.json();
      console.log("Package : ", data);
      console.log("Ethereum Price: ", data.ethPrice);
      console.log("Ethereum Time: ", data.ethUsdTime);
      setEthPrice(parseFloat(data.ethPrice).toFixed(2));
    }
    fetchEthPrice();
    const intervalId = setInterval(fetchEthPrice, 30000);
    return () => clearInterval(intervalId);
  }, []);

  const filteredLinks = allLinks.filter(
    (link) =>
      //filtering by input value
      (link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.site.toLowerCase().includes(searchTerm.toLowerCase())) &&
      //filtering by category
      (!selectedCategory || link.category === selectedCategory)
  );

  const uniqueCategories = [...new Set(allLinks.map((link) => link.category))];

  async function clearCategory() {
    setSelectedCategory("");
  }

  return (
    <main className="max-w-[100%] min-h-screen bg-slate-200">
      <Navbar ethPrice={ethPrice} />
      <Banner />
      <SearchField onSearchChange={setSearchTerm} />
      <CategoryDropdown
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={uniqueCategories}
        clearCategory={clearCategory}
      />
      <CardContainer links={filteredLinks} />
    </main>
  );
}
