export function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-purple-900/40 bg-zinc-950/70 shadow-lg shadow-purple-950/30 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
