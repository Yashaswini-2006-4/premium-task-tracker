import { CheckCircle, Clock, AlertTriangle } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Complete React Dashboard",
    priority: "High",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Connect MongoDB",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: 3,
    title: "Deploy Backend",
    priority: "Low",
    status: "Completed",
  },
];

function statusIcon(status) {
  switch (status) {
    case "Completed":
      return <CheckCircle className="text-green-500" size={18} />;
    case "Pending":
      return <Clock className="text-orange-500" size={18} />;
    default:
      return <AlertTriangle className="text-cyan-400" size={18} />;
  }
}

function TaskTable() {
  return (
    <div className="mt-10 bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-2xl font-bold mb-6">Recent Tasks</h2>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
          >
            <div>
              <h3 className="font-semibold">{task.title}</h3>

              <p className="text-gray-400 text-sm">
                Priority: {task.priority}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {statusIcon(task.status)}
              <span>{task.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskTable;