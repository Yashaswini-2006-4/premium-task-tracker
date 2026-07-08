import { useEffect, useState } from "react";
import {
  ClipboardList,
  CheckCircle2,
  Clock3,
  AlertTriangle,
} from "lucide-react";

import StatsCard from "../components/dashboard/StatsCard";
import { getTasks } from "../services/taskService";

function Analytics() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error(err);
    }
  };

  const totalTasks = tasks.length;
  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;
  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;
  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round((completed / totalTasks) * 100);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Analytics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatsCard
          title="Total Tasks"
          value={totalTasks}
          trend=""
          icon={<ClipboardList />}
          color="bg-cyan-500"
        />

        <StatsCard
          title="Completed"
          value={completed}
          trend=""
          icon={<CheckCircle2 />}
          color="bg-green-500"
        />

        <StatsCard
          title="Pending"
          value={pending}
          trend=""
          icon={<Clock3 />}
          color="bg-orange-500"
        />

        <StatsCard
          title="High Priority"
          value={highPriority}
          trend=""
          icon={<AlertTriangle />}
          color="bg-red-500"
        />

      </div>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 mt-8">

        <h2 className="text-2xl font-bold mb-6">
          Productivity Summary
        </h2>

        <div className="space-y-5 text-lg">

          <p>
            📋 Total Tasks:
            <span className="font-bold text-cyan-400">
              {" "} {totalTasks}
            </span>
          </p>

          <p>
            ✅ Completed:
            <span className="font-bold text-green-400">
              {" "} {completed}
            </span>
          </p>

          <p>
            ⏳ Pending:
            <span className="font-bold text-orange-400">
              {" "} {pending}
            </span>
          </p>

          <p>
            🚀 In Progress:
            <span className="font-bold text-blue-400">
              {" "} {inProgress}
            </span>
          </p>

          <p>
            🔥 Completion Rate:
            <span className="font-bold text-cyan-400">
              {" "} {completionRate}%
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Analytics;