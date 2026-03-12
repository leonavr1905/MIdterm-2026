# Productivity Tracker App - Project Instructions

## Project Overview

This is a React-based Productivity Tracker application built with Vite. The application features a login system, task management interface, dashboard with statistics, and user profile page. All pages use protected routes with global state management via React Context API.

## Requirements Implemented

### Core Features
- ✅ Multi-page React application with React Router
- ✅ Login page with email and password inputs
- ✅ Dashboard showing task statistics and completion rate
- ✅ Task management page with add/update/delete functionality
- ✅ User profile page with statistics
- ✅ Navigation bar with links and logout
- ✅ Protected routes - only accessible if logged in
- ✅ Global authentication state with useContext + useReducer
- ✅ Task state management with useReducer

### Required Pages
- ✅ `/login` - Login page
- ✅ `/dashboard` - Dashboard page (protected)
- ✅ `/tasks` - Task management page (protected)
- ✅ `/profile` - User profile page (protected)

### State Management
- ✅ AuthContext with INIT_STATE: { user: null, isAuthenticated: false }
- ✅ Reducer actions: LOGIN, LOGOUT
- ✅ TaskContext with task management
- ✅ Reducer actions: ADD_TASK, DELETE_TASK, TOGGLE_TASK

### Form Requirements
- ✅ Controlled inputs on login and task creation
- ✅ Email validation on login
- ✅ Error messages display below empty fields
- ✅ Task title validation

## Directory Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── ProtectedRoute.jsx
├── pages/
│   ├── Login.jsx
│   ├── Login.css
│   ├── Dashboard.jsx
│   ├── Dashboard.css
│   ├── Tasks.jsx
│   ├── Tasks.css
│   ├── Profile.jsx
│   ├── Profile.css
├── context/
│   ├── AuthContext.jsx
│   └── TaskContext.jsx
├── reducers/
│   ├── authReducer.js
│   └── taskReducer.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Running the Application

### Development Mode
```bash
npm run dev
```
Starts the Vite development server on http://localhost:5173

### Production Build
```bash
npm run build
```
Creates an optimized build in the `dist` directory

### Preview Build
```bash
npm run preview
```
Serves the production build locally

## Styling

- Dark theme with modern UI design
- Color scheme:
  - Primary: #6366f1 (Indigo/Purple)
  - Accent: #00d4ff (Cyan)
  - Error: #ff6b6b (Red)
  - Success: #4caf50 (Green)
  - Dark backgrounds: #0f0f1e, #16213e

- Responsive design with mobile support
- Cards, grids, and flexbox layouts
- Hover effects and smooth transitions

## Testing Credentials

The login page accepts any valid email and password combination:
- Example: user@example.com / password123

## Browser Compatibility

Works with all modern browsers that support:
- ES6+ JavaScript
- CSS3 Grid and Flexbox
- React 18+

## Notes

- The application uses local component state for form inputs
- Task and auth data persist in context only during the session
- No backend API is connected; all data is managed locally
- This is a standalone frontend application
