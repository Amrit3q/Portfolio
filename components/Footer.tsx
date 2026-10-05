export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-3xl mx-auto px-6 py-6 text-sm text-gray-500 flex justify-between">
        <span>© {new Date().getFullYear()} Amritanshu Singh</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
