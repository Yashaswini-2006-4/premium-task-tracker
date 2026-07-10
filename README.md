# 🚀 Premium Task Tracker

A modern Full Stack Task Management application built using the MERN Stack. It helps users organize, manage, and track daily tasks with an elegant and responsive user interface.

## 🌐 Live Demo

Frontend: https://premium-task-tracker.vercel.app

Backend API: https://premium-task-tracker.onrender.com

---

# 📖 Overview

Premium Task Tracker is a responsive task management application designed to improve productivity. Users can create, update, delete, and manage tasks based on priority, status, and due dates. The application features a clean dashboard with analytics and real-time task statistics.

---

# ✨ Features

- 📋 Create, Edit and Delete Tasks
- 📊 Dashboard with Task Statistics
- 📈 Analytics Page
- ⚙️ Settings Page
- 🔍 Search Tasks
- 🟢 Task Status Management
- 🔴 Priority Levels (High, Medium, Low)
- 📅 Due Date Management
- 📱 Fully Responsive Design
- 🌙 Modern Dark UI
- ☁️ MongoDB Atlas Database
- 🚀 REST API Integration

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Lucide React

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Dotenv
- CORS

---

# 📂 Project Structure

```
premium-task-tracker
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── context
│   │   ├── assets
│   │   └── App.jsx
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Yashaswini-2006-4/premium-task-tracker.git

cd premium-task-tracker
```

---

## Backend Setup

```bash
cd server

npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=Your_MongoDB_Atlas_URI
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install
```

Create a `.env` file

```env
VITE_API_URL=http://localhost:5000/api/tasks
```

Run Frontend

```bash
npm run dev
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|----------|-----------------|----------------------|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get task by ID |
| POST | /api/tasks | Create new task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

---

# 📊 Dashboard

The dashboard provides:

- Total Tasks
- Completed Tasks
- Pending Tasks
- High Priority Tasks
- Recent Tasks
- Productivity Analytics

---

# 🚀 Deployment

Frontend

- Vercel

Backend

- Render

Database

- MongoDB Atlas

---

# 🎯 Future Improvements

- User Authentication (JWT)
- User Profiles
- Task Categories
- Email Notifications
- Dark / Light Theme
- Drag & Drop Task Management
- Calendar View
- File Attachments
- Team Collaboration
- Real-Time Updates using Socket.io

---

# 👩‍💻 Developer

**Yashaswini**

Computer Science Engineering Student

Full Stack Developer

GitHub:
https://github.com/Yashaswini-2006-4

LinkedIn:
(Add your LinkedIn profile here)

---

# 📄 License

This project is developed for educational and portfolio purposes.

---

⭐ If you like this project, consider giving it a Star on GitHub!
