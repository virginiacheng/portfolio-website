export default function Tooltip({ message, children }) {
  return (
    <div className="group relative flex">
      {children}
      <span className="absolute -top-10 scale-0 transition-all rounded bg-slate-800 p-2 text-xs text-slate-200 group-hover:scale-100">
        {message}
      </span>
    </div>
  );
}
