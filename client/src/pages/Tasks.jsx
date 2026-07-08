import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import Modal from "../components/common/Modal";

import {
  getTasks,
  deleteTask,
} from "../services/taskService";

function Tasks() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  // Search & Filters
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load tasks!");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      toast.success("Task deleted successfully 🗑️");
      loadTasks();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete task!");
    }
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditTask(null);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPriority =
      priorityFilter === "All" ||
      task.priority === priorityFilter;

    const matchesStatus =
      statusFilter === "All" ||
      task.status === statusFilter;

    return (
      matchesSearch &&
      matchesPriority &&
      matchesStatus
    );
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Tasks
        </h1>

        <button
          onClick={() => {
            setEditTask(null);
            setOpen(true);
          }}
          className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold transition"
        >
          + New Task
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-3 rounded-xl bg-slate-800 outline-none"
        />

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="p-3 rounded-xl bg-slate-800"
        >
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-3 rounded-xl bg-slate-800"
        >
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      <TaskList
        tasks={filteredTasks}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      <Modal
        isOpen={open}
        onClose={handleClose}
        title={editTask ? "Edit Task" : "Create New Task"}
      >
        <TaskForm
          editTask={editTask}
          onTaskAdded={loadTasks}
          onClose={handleClose}
        />
      </Modal>
    </div>
  );
}

export default Tasks;