import Link from "next/link";

const technologies = [
  "Angular",
  "Java",
  "Spring Boot",
  "OAuth",
  "REST APIs",
  "Graph Algorithms",
  "DFS",
];

export default function MicrosoftNuanceCaseStudy() {
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
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Internship Case Study
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Data Dashboard & Automated Call Workflow
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Two engineering problems I worked on during my internship:
            building a dashboard around a large Telefónica dataset and
            implementing backend logic for a choice-driven automated call
            workflow.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
            <div>
              <p className="text-sm uppercase tracking-widest text-cyan-400">
                Context
              </p>

              <h2 className="mt-4 text-3xl font-semibold">
                Working across frontend and backend problems
              </h2>
            </div>

            <div className="space-y-5 text-[16px] leading-8 text-white/60">
              <p>
                During my internship, I worked on separate engineering tasks
                spanning frontend data visualization and backend application
                logic.
              </p>

              <p>
                One workstream involved a dashboard used to fetch and inspect
                a large Telefónica dataset. Another involved an automated call
                response system where the next interaction depended on the
                user's previous choices.
              </p>

              <p>
                The second problem was particularly interesting because the
                conversation could be represented as a directed graph rather
                than a simple linear sequence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workstream 1 */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-cyan-400">
              Workstream 01
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Telefónica dataset dashboard
            </h2>

            <p className="mt-6 leading-8 text-white/60">
              I worked on a dashboard that allowed users to fetch and inspect
              data from a large Telefónica dataset through a structured
              frontend interface.
            </p>

            <p className="mt-5 leading-8 text-white/60">
              The challenge was less about drawing charts and more about
              making large amounts of backend data usable through a dashboard
              experience.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
            <h3 className="font-medium">Request flow</h3>

            <div className="mt-8 space-y-3">
              <FlowStep number="01" text="User selects dataset / parameters" />
              <FlowStep number="02" text="Dashboard creates API request" />
              <FlowStep number="03" text="Backend retrieves dataset" />
              <FlowStep number="04" text="Response is transformed" />
              <FlowStep number="05" text="Dashboard renders the result" />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard architecture */}
      <section className="bg-white/[0.025]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Dashboard architecture
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            From dataset to usable interface
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              ["Input", "User-selected filters and parameters"],
              ["API", "Request to retrieve relevant data"],
              ["Processing", "Response handling and transformation"],
              ["UI", "Dashboard tables and visual representation"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 p-6"
              >
                <span className="text-xs uppercase tracking-widest text-cyan-400">
                  {title}
                </span>

                <p className="mt-4 text-sm leading-7 text-white/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workstream 2 */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Workstream 02
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Automated call response workflow
          </h2>

          <p className="mt-6 leading-8 text-white/60">
            Separately, I worked on backend logic for an automated call
            response application for a medical-domain use case. The
            conversation was driven by user choices, which meant the workflow
            could branch into different paths.
          </p>

          <p className="mt-5 leading-8 text-white/60">
            Instead of representing the conversation as a simple linear list
            of questions, the problem naturally mapped to a directed graph.
          </p>
        </div>

        {/* Graph visualization */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-[#090909] p-8 sm:p-12">
          <div className="grid items-center gap-4 md:grid-cols-5">
            <GraphNode title="Start" />

            <Arrow />

            <GraphNode title="Question A" />

            <Arrow />

            <GraphNode title="Question B" />
          </div>

          <div className="my-5 flex justify-center">
            <div className="h-12 w-px bg-white/10" />
          </div>

          <div className="grid items-center gap-4 md:grid-cols-5">
            <div />

            <Arrow />

            <GraphNode title="Choice" />

            <Arrow />

            <GraphNode title="Next Node" />
          </div>

          <div className="mt-10 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.03] p-5 text-sm leading-7 text-white/50">
            The important part was allowing the workflow to branch based on
            user choices while controlling special transition rules such as a
            node that could be revisited once.
          </div>
        </div>
      </section>

      {/* Algorithm */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-widest text-cyan-400">
                Algorithmic problem
              </p>

              <h2 className="mt-4 text-3xl font-semibold">
                Building the directed workflow
              </h2>

              <p className="mt-6 leading-8 text-white/60">
                Each response could determine which node should be visited
                next. This made the call flow effectively a directed graph
                whose edges represented possible transitions.
              </p>

              <p className="mt-5 leading-8 text-white/60">
                I worked with graph traversal concepts, including DFS-style
                traversal, to reason about reachable nodes and transition
                paths.
              </p>
            </div>

            <div className="space-y-4">
              <AlgorithmPoint
                number="01"
                title="Create nodes"
                text="Represent each question or response stage as a node."
              />

              <AlgorithmPoint
                number="02"
                title="Create directed edges"
                text="Connect a node to the possible next states based on user choices."
              />

              <AlgorithmPoint
                number="03"
                title="Track traversal"
                text="Keep track of visited state while processing the workflow."
              />

              <AlgorithmPoint
                number="04"
                title="Handle controlled revisit"
                text="Allow the required node transition to loop once without allowing uncontrolled traversal."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Example
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            A choice changes the conversation path
          </h2>

          <p className="mt-6 leading-8 text-white/60">
            Consider a simplified workflow where a user response determines
            whether the system should continue to another question or move to
            a different branch.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <WorkflowCard
            number="01"
            title="Initial question"
            text="System asks the user a question."
          />

          <WorkflowCard
            number="02"
            title="User choice"
            text="The response determines which directed edge should be followed."
          />

          <WorkflowCard
            number="03"
            title="Next state"
            text="The system continues from the selected node and evaluates the next transition."
          />
        </div>
      </section>

      {/* Takeaways */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Takeaways
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Why this internship mattered
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Takeaway
              title="Large data"
              text="Learned how frontend applications turn large backend datasets into usable interfaces."
            />

            <Takeaway
              title="Backend thinking"
              text="Worked with Java/Spring Boot and API-driven application logic."
            />

            <Takeaway
              title="Algorithms in production"
              text="Applied graph concepts to a real workflow problem rather than only solving them as interview exercises."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FlowStep({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 p-4">
      <span className="text-xs text-cyan-400">{number}</span>
      <span className="text-sm text-white/60">{text}</span>
    </div>
  );
}

function GraphNode({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.04] p-5 text-center">
      <span className="text-sm text-white/70">{title}</span>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden text-center text-white/30 md:block">→</div>
  );
}

function AlgorithmPoint({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-white/10 p-6">
      <span className="text-sm text-cyan-400">{number}</span>

      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-white/45">{text}</p>
      </div>
    </div>
  );
}

function WorkflowCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 p-7">
      <span className="text-xs text-cyan-400">STEP {number}</span>

      <h3 className="mt-4 font-medium">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-white/45">{text}</p>
    </div>
  );
}

function Takeaway({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 p-7">
      <h3 className="font-medium">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-white/45">{text}</p>
    </div>
  );
}