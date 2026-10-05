import Link from "next/link";

const metrics = [
  {
    value: "20+",
    label: "Interconnected pages",
  },
  {
    value: "30+",
    label: "Reusable components",
  },
  {
    value: "5,000+",
    label: "Row data tables",
  },
  {
    value: "6s → <2s",
    label: "Large-table interaction time",
  },
];

const cartFlow = [
  "Product selection",
  "Cart state",
  "Quantity / pricing updates",
  "Validation",
  "Checkout state",
  "Order submission",
];

const rebateFlow = [
  "Eligible products",
  "Customer / account state",
  "Rebate selection",
  "Validation",
  "Multiple state transitions",
  "Final calculated state",
];

export default function JapanEcommerceCaseStudy() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Back */}
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/"
          className="text-sm text-white/50 transition hover:text-white"
        >
          ← Back to portfolio
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-cyan-400">
            Case Study · Production Application
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Japan Region Ecommerce Experience
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Engineering and frontend ownership across a complex B2B ecommerce
            experience with interconnected pages, shared application state,
            cart workflows, rebate logic, large datasets, and production
            constraints.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Redux",
              "React Query",
              "GraphQL",
              "REST",
              "Tailwind",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
            >
              <div className="text-2xl font-semibold">{metric.value}</div>
              <div className="mt-2 text-sm text-white/45">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-sm uppercase tracking-widest text-cyan-400">
                Overview
              </p>

              <h2 className="mt-4 text-3xl font-semibold">
                What I worked on
              </h2>
            </div>

            <div className="space-y-5 text-[16px] leading-8 text-white/60">
              <p>
                I worked on the frontend of a production ecommerce platform
                serving a complex B2B workflow. The application contained
                multiple interconnected pages where changes in one part of the
                experience could affect state and behavior elsewhere.
              </p>

              <p>
                My work included ecommerce cart behavior, rebate-related
                workflows, reusable UI components, API integration, state
                management, large data tables, authentication and
                role-based behavior.
              </p>

              <p>
                One of the more challenging parts was maintaining predictable
                state across flows where the user could move between pages,
                modify selections, trigger validations, and return to earlier
                steps without losing consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            The problem
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Ecommerce state was not isolated to a single page
          </h2>

          <p className="mt-6 leading-8 text-white/60">
            A typical ecommerce cart looks simple until multiple parts of the
            application depend on the same underlying state. Product pages,
            cart views, pricing information, checkout and related workflows
            can all depend on the same user selections.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Shared state",
              text: "Multiple pages needed access to consistent cart and user-related state.",
            },
            {
              title: "API boundaries",
              text: "Frontend state and backend API responses did not always map directly onto each other.",
            },
            {
              title: "Complex transitions",
              text: "User actions could trigger several dependent state changes rather than one isolated update.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 p-6"
            >
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/50">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cart */}
      <section className="bg-white/[0.025]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-widest text-cyan-400">
                Feature 01
              </p>

              <h2 className="mt-4 text-3xl font-semibold">
                Cart state across the application
              </h2>

              <p className="mt-6 leading-8 text-white/60">
                The cart was not treated as a page-level feature. It was part
                of the broader application state and needed to remain
                predictable as users moved through different parts of the
                ecommerce experience.
              </p>

              <p className="mt-5 leading-8 text-white/60">
                I worked with Redux alongside component-level state to separate
                shared application state from transient UI state.
              </p>
            </div>

            <div className="space-y-3">
              {cartFlow.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-white/70">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* State architecture */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-cyan-400">
          Architecture
        </p>

        <h2 className="mt-4 text-3xl font-semibold">
          Keeping state responsibilities separated
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#090909]">
          <div className="grid md:grid-cols-3">
            <ArchitectureBox
              title="UI State"
              items={[
                "Modal visibility",
                "Selected tabs",
                "Temporary form state",
                "Local interaction state",
              ]}
            />

            <ArchitectureBox
              title="Application State"
              items={[
                "Cart state",
                "User selections",
                "Shared workflow state",
                "Cross-page state",
              ]}
            />

            <ArchitectureBox
              title="Server State"
              items={[
                "API responses",
                "Product data",
                "Pricing data",
                "Remote mutations",
              ]}
            />
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-7 text-white/40">
          The goal was not to put everything into Redux. The important
          engineering decision was determining which state actually needed to
          be shared and which state should remain local to a component.
        </p>
      </section>

      {/* Rebate */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-cyan-400">
              Feature 02
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Rebate workflow with multiple state transitions
            </h2>

            <p className="mt-6 leading-8 text-white/60">
              The rebate workflow was one of the more state-heavy areas of the
              application. The resulting UI depended on several selections and
              intermediate states rather than a single form submission.
            </p>
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {rebateFlow.map((step, index) => (
              <div
                key={step}
                className="relative rounded-2xl border border-white/10 p-6"
              >
                <span className="text-xs text-cyan-400">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 font-medium">{step}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.03] p-8">
            <h3 className="font-medium">Engineering challenge</h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/55">
              Each user choice could influence subsequent available choices,
              validation behavior and the final state. This required careful
              handling of dependencies between state variables rather than
              treating each input independently.
            </p>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-cyan-400">
              Performance
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Working with 5,000+ row datasets
            </h2>

            <p className="mt-6 leading-8 text-white/60">
              Some application screens needed to display and interact with
              large datasets. Rendering and updating thousands of rows
              directly created noticeable interaction costs.
            </p>
          </div>

          <div className="space-y-4">
            <PerformanceRow
              title="Initial approach"
              value="Large DOM surface"
            />

            <PerformanceRow
              title="Optimization"
              value="Virtualization + pagination"
            />

            <PerformanceRow
              title="Observed interaction"
              value="~6s → <2s"
            />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Outcome
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            What this work taught me
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                "State architecture",
                "Choosing the correct state boundary matters more than simply choosing a state-management library.",
              ],
              [
                "Production frontend",
                "Frontend engineering involves API contracts, performance, business rules and edge cases—not only UI implementation.",
              ],
              [
                "Complex workflows",
                "Multi-step business workflows require explicit state transitions and predictable dependencies.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 p-7"
              >
                <h3 className="font-medium">{title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ArchitectureBox({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r last:border-r-0">
      <h3 className="font-medium">{title}</h3>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm text-white/45 before:mr-2 before:text-cyan-400 before:content-['→']"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PerformanceRow({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-xl border border-white/10 p-5">
      <span className="text-sm text-white/45">{title}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}