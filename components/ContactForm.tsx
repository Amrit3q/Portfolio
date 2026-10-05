"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: "Thanks! Your message has been received.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm text-white/70"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={isSubmitting}
          placeholder="Your name"
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30 disabled:opacity-50"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm text-white/70"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={isSubmitting}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30 disabled:opacity-50"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm text-white/70"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          required
          disabled={isSubmitting}
          placeholder="Write your message here..."
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30 disabled:opacity-50"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl border border-white/15 bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status.type && (
        <div
          className={`rounded-xl border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-green-400/20 bg-green-400/10 text-green-300"
              : "border-red-400/20 bg-red-400/10 text-red-300"
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  );
}