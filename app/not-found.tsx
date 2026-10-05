import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-bold mb-4">404 — Page not found</h1>
      <Link href="/" className="underline">
        Go back home
      </Link>
    </section>
  );
}
