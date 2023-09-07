import SiteCard from "@/components/SiteCard";

export default function CardContainer({ links }) {
  return (
    <>
      <div className="py-10 bg-slate-800 text-slate-200">DELETE THIS LATER</div>
      <div className="px-10 overflow-y-auto bg-slate-200">
        {links.map((site, id) => (
          <SiteCard site={site} key={id} />
        ))}
      </div>
    </>
  );
}
