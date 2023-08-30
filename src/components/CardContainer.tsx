"use client";

import { useEffect, useState } from "react";
import SiteCard from "@/components/SiteCard";
import {
  WebsiteData,
  allLinks,
  filteredByDeFi,
  filteredByNFTs,
  filteredByDAOs,
  filteredByTools,
} from "@/app/data/allLinks";

export default function CardContainer() {
  const [activeCategory, setActiveCategory] = useState("");
  const [view, setView] = useState<WebsiteData[]>([]);

  const menuOptions = [
    { id: "", title: "View All" },
    { id: "defi", title: "DeFi" },
    { id: "nfts", title: "NFTs" },
    { id: "daos", title: "DAOs" },
    { id: "tools", title: "Tools/Analytics" },
  ];

  useEffect(() => {
    switch (activeCategory) {
      case "":
        setView(allLinks);
        break;
      case "defi":
        setView(filteredByDeFi);
        break;
      case "nfts":
        setView(filteredByNFTs);
        break;
      case "daos":
        setView(filteredByDAOs);
        break;
      case "tools":
        setView(filteredByTools);
        break;
      default:
        setView(allLinks);
    }
  }, [activeCategory]);

  return (
    <>
      <div id="menu" className="pb-8 bg-slate-200">
        <ul className="flex flex-row justify-around items-center px-10 flex-wrap">
          {menuOptions.map((eachMenuOption, index) => {
            if (eachMenuOption.id === activeCategory) {
              return (
                <li
                  key={index}
                  className="border-b-5 bg-gradient-to-r from-cyan-500 to-blue-600 via-cyan-600 cursor-pointer"
                  onClick={() => setActiveCategory(eachMenuOption.id)}
                >
                  <span className="bg-slate-200 pt-2 px-1 prose text-lg">
                    {eachMenuOption.title}
                  </span>
                </li>
              );
            } else {
              return (
                <li
                  key={index}
                  className="cursor-pointer"
                  onClick={() => setActiveCategory(eachMenuOption.id)}
                >
                  <span className="bg-slate-200 pt-2 px-1 prose text-lg">
                    {eachMenuOption.title}
                  </span>
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div className="px-10 overflow-y-auto bg-slate-200">
        {view.map((site, id) => (
          <SiteCard key={id} />
        ))}
      </div>
    </>
  );
}
