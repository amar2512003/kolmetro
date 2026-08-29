export function Button({ active, onClick, children, className = '' }) {
  const base = 'text-sm font-semibold py-2 px-4 rounded-lg border transition-all duration-200';
  const activeCls = 'bg-purple-600 border-purple-500 text-white shadow shadow-purple-900/40';
  const inactiveCls =
    'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:bg-zinc-800/60 hover:text-purple-200 hover:border-purple-800/50';
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${active ? activeCls : inactiveCls} ${className}`}
    >
      {children}
    </button>
  );
}
