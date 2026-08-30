
export default function TagBadge({ text }) {
  return (
    <span className="px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-xs text-amber-300 font-mono inline-block">
      {text}
    </span>
  );
}