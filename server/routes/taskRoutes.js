import express from "express";

import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

// Get all tasks
router.get("/", getTasks);

// Get single task
router.get("/:id", getTask);

// Create task
router.post("/", createTask);

// Update task
router.put("/:id", updateTask);

// Delete task
router.delete("/:id", deleteTask);

export default router;