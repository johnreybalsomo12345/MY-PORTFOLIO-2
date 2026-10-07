export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-r from-red-950/70 via-purple-950/70 to-blue-950/70 py-6 text-center text-sm text-white/60">
      © {new Date().getFullYear()} Your John rey. Built with React and Tailwind CSS.
    </footer>
  );
}
  