import { ArrowUpRight } from "lucide-react";

function StatsCard({
  title,
  value,
  icon,
  trend,
  color,
}) {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      bg-slate-900/80
      backdrop-blur-xl
      border
      border-slate-800
      p-6
      shadow-xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-cyan-500
      hover:shadow-cyan-500/20
      "
    >
      {/* Background Glow */}

      <div
        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 ${color}`}
      ></div>

      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h1 className="text-5xl font-bold mt-4">
            {value}
          </h1>
        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${color}`}
        >
          {icon}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-green-400 flex items-center gap-1">
          <ArrowUpRight size={18} />
          {trend}
        </span>

        <span className="text-slate-500 text-sm">
          This week
        </span>
      </div>
    </div>
  );
}

export default StatsCard;