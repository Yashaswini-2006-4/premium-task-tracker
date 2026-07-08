import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import {
  createTask,
  updateTask,
} from "../../services/taskService";

function TaskForm({
  onTaskAdded,
  onClose,
  editTask,
}) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  // Fill form when editing
  useEffect(() => {
    if (editTask) {
      reset({
        title: editTask.title,
        description: editTask.description,
        priority: editTask.priority,
        status: editTask.status,
        dueDate: editTask.dueDate
          ? editTask.dueDate.substring(0, 10)
          : "",
      });
    } else {
      reset({
        title: "",
        description: "",
        priority: "Low",
        status: "Pending",
        dueDate: "",
      });
    }
  }, [editTask, reset]);

  const onSubmit = async (data) => {
    try {
      if (editTask) {
        await updateTask(editTask._id, data);
        toast.success("Task updated successfully ✨");
      } else {
        await createTask(data);
        toast.success("Task created successfully 🎉");
      }

      reset();

      if (onTaskAdded) {
        await onTaskAdded();
      }

      if (onClose) {
        onClose();
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <input
        {...register("title", { required: true })}
        placeholder="Task Title"
        className="w-full p-4 rounded-xl bg-slate-800 outline-none"
      />

      <textarea
        {...register("description")}
        placeholder="Description"
        rows="4"
        className="w-full p-4 rounded-xl bg-slate-800 outline-none"
      />

      <select
        {...register("priority")}
        className="w-full p-4 rounded-xl bg-slate-800"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <select
        {...register("status")}
        className="w-full p-4 rounded-xl bg-slate-800"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <input
        type="date"
        {...register("dueDate")}
        className="w-full p-4 rounded-xl bg-slate-800 outline-none"
      />

      <button
        type="submit"
        className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-black font-bold py-4 rounded-xl"
      >
        {editTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;