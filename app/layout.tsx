import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";
import LiveVisitorTracker from "@/components/analytics/LiveVisitorTracker";

export const metadata: Metadata = {
  title: "Amritanshu Singh — Portfolio",
  description: "Software Engineer — frontend & full-stack projects, experience, and writing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <AnalyticsTracker />
        <LiveVisitorTracker />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
