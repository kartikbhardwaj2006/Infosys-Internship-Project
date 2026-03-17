# FlowBoard – Kanban Task Manager

FlowBoard is a modern web-based **Kanban task management application** built using **Angular and Tailwind CSS**. It allows users to manage tasks visually across workflow stages such as **To-Do, In Progress, and Done** with smooth drag-and-drop functionality.

The application includes authentication, personalized task storage per user, dashboard analytics, and task filtering features. All data is stored using **LocalStorage**, making it lightweight and easy to run without a backend server.

---

## 🚀 Features

### 🔐 Authentication

* User **Signup and Login**
* Email validation (only `@gmail.com` allowed)
* Password strength indicator (Weak / Medium / Strong)
* Session management using LocalStorage
* Each user has their own task board

---

### 📋 Kanban Task Management

* Create, edit, and delete tasks
* Drag and drop tasks between columns
* Reorder tasks within columns
* Dynamic column management
* Task priorities (High, Medium, Low)

---

### 📅 Task Date Management

* Assign due dates to tasks
* Automatic **Overdue task detection**
* Filters for:

  * All Tasks
  * Due Today
  * Overdue
  * Upcoming tasks

---

### 📊 Dashboard Analytics

A dedicated dashboard page displays task statistics:

* Total tasks count
* To-Do tasks
* In Progress tasks
* Completed tasks
* Column progress percentage

---

### 👤 User Profile Management

Users can edit and update their personal details:

* Name
* Email
* Bio

Profile updates are saved in LocalStorage and persist after logout and login.

---

### 📤 Task Export

Users can download their tasks in **TXT format**, allowing them to keep an offline copy of their task data.

---

### 🎨 Modern UI

* Built with **Tailwind CSS**
* Clean and responsive layout
* Professional Kanban board design
* Smooth micro-interactions
* Mobile-friendly responsive design

---

## 🛠 Technology Stack

| Technology   | Purpose                     |
| ------------ | --------------------------- |
| Angular      | Frontend framework          |
| TypeScript   | Application logic           |
| Tailwind CSS | Styling and UI design       |
| Angular CDK  | Drag and drop functionality |
| LocalStorage | Data persistence            |

---

## 📂 Project Structure

```
src/
 ├── app/
 │   ├── components/
 │   │   ├── kanban-board/
 │   │   ├── kanban-column/
 │   │   ├── dashboard/
 │   │   └── profile/
 │   ├── models/
 │   │   └── user.model.ts
 │   ├── services/
 │   │   ├── auth.service.ts
 │   │   └── kanban-board.service.ts
 │   └── app.routes.ts
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/kartikbhardwaj2006/Infosys-Internship-Project.git
cd Infosys-Internship-Project
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Run the Angular application

```bash
ng serve
```

Open the browser and navigate to:

```
http://localhost:4200
```

---

## 📦 LocalStorage Structure

User data and tasks are stored in LocalStorage.

Example keys:

```
flowboard_users
flowboard_current_user
flowboard_tasks_<userId>
flowboard_columns_<userId>
```

Each user has separate tasks and board configuration.

---

## 🔮 Future Improvements

Possible future enhancements include:

* Backend integration with a database
* Real authentication with OAuth (Google login)
* Real-time collaboration
* Notifications and reminders
* Advanced analytics dashboard

---

## 👨‍💻 Developed By

**Kartik Bhardwaj**

Computer Science Engineering Student
Frontend Developer | Angular Enthusiast

---

⭐ If you like this project, consider giving it a star on GitHub!
