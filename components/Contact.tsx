import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";

export const metadata = {
  title: "Contact — Portfolio",
  description: "Get in touch with Amritanshu Singh.",
};

export default function ContactPage() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24 text-white">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/40">
          Contact
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          Let&apos;s build something.
        </h1>

        <p className="mt-4 max-w-xl text-white/60">
          Have an interesting project, opportunity, or just want to connect?
          Send me a message.
        </p>
      </div>

      <ContactForm />

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/40">
      <div className="flex items-center gap-3">
        <Link
  href="mailto:your.email@gmail.com"
  aria-label="Email"
  className="flex h-9 w-9 items-center justify-center rounded-full
             border border-white/10
             text-gray-400
             hover:border-white/20
             hover:text-white
             hover:bg-white/5
             transition-all duration-300"
>
  <FaGoogle size={17} />
</Link>
  <Link
    href="https://www.linkedin.com/in/amritanshu-singh/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex h-9 w-9 items-center justify-center rounded-full
               border border-white/10
               text-gray-400
               hover:border-white/20
               hover:text-white
               hover:bg-white/5
               transition-all duration-300"
  >
    <FaLinkedinIn size={17} />
  </Link>

  <Link
    href="https://github.com/Amrit3q"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="flex h-9 w-9 items-center justify-center rounded-full
               border border-white/10
               text-gray-400
               hover:border-white/20
               hover:text-white
               hover:bg-white/5
               transition-all duration-300"
  >
    <FaGithub size={19} />
  </Link>
</div>
      </div>
    </section>
  );
}