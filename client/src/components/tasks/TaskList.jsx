import {
  Pencil,
  Trash2,
  CalendarDays,
} from "lucide-react";

function badgeColor(priority) {
  switch (priority) {
    case "High":
      return "bg-red-500";

    case "Medium":
      return "bg-orange-500";

    default:
      return "bg-green-500";
  }
}

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 mt-8 overflow-hidden">

      <div className="grid grid-cols-5 p-5 font-semibold text-slate-400 border-b border-slate-800">
        <span>Task</span>
        <span>Priority</span>
        <span>Status</span>
        <span>Due Date</span>
        <span className="text-center">Action</span>
      </div>

      {tasks.length === 0 ? (
        <div className="p-8 text-center text-slate-400">
          No tasks found.
        </div>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            className="grid grid-cols-5 p-5 items-center border-b border-slate-800 hover:bg-slate-800 transition"
          >
            <span className="font-medium">
              {task.title}
            </span>

            <span>
              <span
                className={`${badgeColor(task.priority)} px-3 py-1 rounded-full text-sm`}
              >
                {task.priority}
              </span>
            </span>

            <span>{task.status}</span>

            <span className="flex items-center gap-2">
              <CalendarDays size={16} />

              {task.dueDate
                ? new Date(task.dueDate).toLocaleDateString()
                : "No Date"}
            </span>

            <div className="flex justify-center gap-3">

              {/* Edit */}

              <button
                onClick={() => onEdit(task)}
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                <Pencil size={18} />
              </button>

              {/* Delete */}

              <button
                onClick={() => {
                  const confirmDelete = window.confirm(
                    "Delete this task?"
                  );

                  if (confirmDelete) {
                    onDelete(task._id);
                  }
                }}
                className="text-red-500 hover:text-red-400 transition"
              >
                <Trash2 size={18} />
              </button>

            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;