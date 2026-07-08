import { useEffect, useState } from "react";

import StatsCard from "../components/dashboard/StatsCard";
import TaskList from "../components/tasks/TaskList";

import {
  CheckCircle2,
  ClipboardList,
  Clock3,
  AlertTriangle,
} from "lucide-react";

import { getTasks } from "../services/taskService";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error(err);
    }
  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">
        Dashboard Overview
      </h2>

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
          value={completedTasks}
          trend=""
          icon={<CheckCircle2 />}
          color="bg-green-500"
        />

        <StatsCard
          title="Pending"
          value={pendingTasks}
          trend=""
          icon={<Clock3 />}
          color="bg-orange-500"
        />

        <StatsCard
          title="High Priority"
          value={highPriorityTasks}
          trend=""
          icon={<AlertTriangle />}
          color="bg-red-500"
        />

      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-6">
          Recent Tasks
        </h2>

        <TaskList
          tasks={tasks.slice(0, 5)}
          onDelete={() => {}}
          onEdit={() => {}}
        />
      </div>
    </div>
  );
}

export default Dashboard;