import Link from "next/link";

export default function Sitecard(props: any) {
  const { site, id } = props;
  return (
    <>
      <div
        className="max-w-[100%] text-slate-900 prose shadown-md mb-8 py-6 px-6 border-slate-100 bg-slate-100 hover:border-l-8 hover:border-l-blue-500"
        key={id}
      >
        <h3 className="text-lg font-semibold">
          <Link
            href={site.site}
            className="text-slate-900"
            target="_blank"
            rel="noreferrer"
          >
            {site.title}
          </Link>
        </h3>
        <p className="prose">{site.description}</p>
      </div>
    </>
  );
}
