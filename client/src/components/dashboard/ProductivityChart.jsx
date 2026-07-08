import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", tasks: 4 },
  { day: "Tue", tasks: 7 },
  { day: "Wed", tasks: 6 },
  { day: "Thu", tasks: 10 },
  { day: "Fri", tasks: 8 },
  { day: "Sat", tasks: 5 },
  { day: "Sun", tasks: 9 },
];

function ProductivityChart() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 h-[360px]">
      <h2 className="text-2xl font-bold mb-6">
        Weekly Productivity
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="colorTasks"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#1e293b" />

          <XAxis dataKey="day" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="tasks"
            stroke="#06b6d4"
            fillOpacity={1}
            fill="url(#colorTasks)"
            strokeWidth={4}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProductivityChart;