import Link from "next/link";

export default function JapanEcommerceCard({...props}) {
  return (
    <Link
      href={`/case-studies/${props.url}`}
      className="group block w-full"
    >
      <article className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 transition-all duration-500 hover:-translate-y-1 hover:border-neutral-600">
        {/* Visual */}
        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
         <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={props.image}
            alt="Japan Region Ecommerce Experience"
            className="object-fill transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
         </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Case study label */}
          <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            Case Study
            </div>

          {/* View indicator */}
          <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
            ↗
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-7">
          <div className="mb-5 flex items-start justify-between gap-6">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                {props.company} · Production
              </p>

              <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {props.title}
              </h3>
            </div>

            <span className="hidden shrink-0 text-sm text-neutral-500 transition-colors group-hover:text-white md:block">
              View case study ↗
            </span>
          </div>

          <p className="mb-6 max-w-3xl text-sm leading-6 text-neutral-400 md:text-base">
            {props.description}
          </p>

          {/* Proof */}
          <div className="grid grid-cols-2 border-y border-neutral-800 py-5 md:grid-cols-4">
            <Metric value="20+" label="Interconnected pages" />
            <Metric value="30+" label="Reusable components" />
            <Metric value="5K+" label="Row data tables" />
            <Metric value="CWV" label="Performance improvements" />
          </div>

          {/* Stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "Redux", "GraphQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-neutral-900 px-3 py-1.5 text-xs text-neutral-400"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-neutral-800 px-3 first:pl-0 md:border-r md:last:border-r-0">
      <div className="text-xl font-semibold tracking-tight text-white md:text-2xl">
        {value}
      </div>

      <div className="mt-1 text-xs leading-4 text-neutral-500">
        {label}
      </div>
    </div>
  );
}