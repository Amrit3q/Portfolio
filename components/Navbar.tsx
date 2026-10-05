import Link from "next/link";
import LiveVisitorCount from "./analytics/LivevisitorCount";

const links = [
  { href: "#home", label: "Home" },
  { href: "#case-study", label: "Case Study" },
  { href: "#about", label: "About" },
  // { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50
      bg-[#080B14]/75 backdrop-blur-xl
      border-b border-white/[0.08]"
    >
      <nav
        className="w-full max-w-6xl mx-auto px-6 py-4
        flex items-center justify-between"
      >
        <Link
          href="#home"
          className="font-semibold text-white tracking-tight"
        >
          Amritanshu<span className="text-blue-400">.</span>
        </Link>

        <ul className="flex gap-8 text-sm text-gray-400">
          {links.map((link) => (
            <li key={link.href} className="align-center flex h-6">
              <Link
                href={link.href}
                className="hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            <LiveVisitorCount />
          </li>
        </ul>
      </nav>
    </header>
  );
}