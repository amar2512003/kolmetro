export function StepProgress({ step, total = 3 }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => {
        const n = i + 1;
        const state = n === step ? 'current' : n < step ? 'done' : 'upcoming';
        const cls =
          state === 'current'
            ? 'w-8 bg-purple-500'
            : state === 'done'
              ? 'w-4 bg-purple-700'
              : 'w-4 bg-zinc-800';
        return <div key={n} className={`h-1.5 rounded-full transition-all duration-300 ${cls}`} />;
      })}
    </div>
  );
}
