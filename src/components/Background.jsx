// Red and blue blended into one background (the overlap turns purple)
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-red-700 via-purple-900 to-blue-800">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-red-500/50 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/50 blur-3xl" />
      <div className="absolute left-1/3 top-1/3 h-72 w-72 rounded-full bg-fuchsia-600/30 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
    </div>
  );
}
