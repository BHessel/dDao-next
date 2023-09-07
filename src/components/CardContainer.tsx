import SiteCard from "@/components/SiteCard";
import { WebsiteData } from "@/types/types";

type CardContainerProps = {
  links: WebsiteData[];
};

export default function CardContainer({ links }: CardContainerProps) {
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
