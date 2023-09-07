import { useEffect, useState } from "react";
import SiteCard from "@/components/SiteCard";
import { WebsiteData } from "@/types/types";

export default function CardContainer({ links }) {
  return (
    <>
      <div className="px-10 overflow-y-auto bg-slate-200">
        {links.map((site, id) => (
          <SiteCard site={site} key={id} />
        ))}
      </div>
    </>
  );
}
