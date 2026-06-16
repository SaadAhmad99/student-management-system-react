# Student Management System

A React-based Student Management System built while learning modern React development.

## Features

- Add Students
- Edit Students
- Delete Students
- Search Students
- Sort Students
- Unique Roll Number Validation
- Dashboard Statistics
- Local Storage Persistence
- Component-Based Architecture

## Dashboard

The dashboard displays:

- Total Students
- Average Marks
- Highest Marks
- Lowest Marks
- Passed Students
- Failed Students

## Technologies Used

- React
- JavaScript (ES6+)
- Vite
- HTML5
- CSS3
- Local Storage API

## Project Structure

```text
src
│
├── Components
│   ├── AddStudent.jsx
│   ├── Dashboard.jsx
│   ├── EditStudent.jsx
│   ├── SearchStudent.jsx
│   ├── SortStudents.jsx
│   ├── StudentList.jsx
│   └── StudentCard.jsx
│
└── App.jsx
```

## Current Functionality

### Student Management

- Create a new student
- Update existing student information
- Delete students
- Store unique roll numbers

### Search

Search students by:

- Name
- Roll Number

### Sorting

Sort students by:

- Roll Number 
- Name
- Marks

### Data Persistence

Student records are automatically saved in browser Local Storage and remain available after refreshing the page.

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/student-management-system-react.git
```

Navigate into the project:

```bash
cd student-management-system-react
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Learning Objectives

This project was created to practice:

- React Components
- Props
- State Management
- useState Hook
- useEffect Hook
- Local Storage
- Array Methods

  - map()
  - filter()
  - reduce()
  - sort()

- CRUD Operations
- Component Reusability



## Author

Saad Ahmad

Learning Full Stack Development with React.# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
