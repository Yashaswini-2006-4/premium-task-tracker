import { CheckCircle2 } from "lucide-react";

function ProgressCard() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 h-[360px] flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold">
          Today's Progress
        </h2>

        <p className="text-slate-400 mt-2">
          You completed
        </p>

        <h1 className="text-7xl font-bold text-cyan-400 mt-4">
          75%
        </h1>
      </div>

      <div className="space-y-4">
        <div className="w-full bg-slate-700 rounded-full h-4">
          <div className="bg-cyan-400 h-4 rounded-full w-3/4"></div>
        </div>

        <div className="flex items-center gap-2 text-green-400">
          <CheckCircle2 />
          Excellent Progress!
        </div>
      </div>
    </div>
  );
}

export default ProgressCard;