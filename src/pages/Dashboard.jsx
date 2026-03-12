import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { TaskContext } from '../context/TaskContext';
import './Dashboard.css';

const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  const { tasks } = useContext(TaskContext);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionRate = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const recentTasks = tasks.slice(-5).reverse();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back, <strong>{auth.user?.name}</strong></p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <h3>{totalTasks}</h3>
            <p>Total Tasks</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{completedTasks}</h3>
            <p>Completed</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-content">
            <h3>{pendingTasks}</h3>
            <p>Pending</p>
          </div>
        </div>
      </div>

      <div className="completion-section">
        <h2>Completion Rate</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${completionRate}%` }}></div>
        </div>
        <p className="completion-text">{completionRate}%</p>
      </div>

      <div className="recent-tasks-section">
        <div className="section-header">
          <h2>Recent Tasks</h2>
          <a href="/tasks" className="view-all">View all →</a>
        </div>

        {recentTasks.length === 0 ? (
          <p className="no-tasks">No tasks yet. Create your first task!</p>
        ) : (
          <div className="tasks-list">
            {recentTasks.map(task => (
              <div key={task.id} className="task-item">
                <div className="task-checkbox">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    disabled
                    readOnly
                  />
                </div>
                <div className="task-info">
                  <h4 className={task.completed ? 'completed' : ''}>{task.title}</h4>
                  <span className={`priority-badge ${task.priority?.toLowerCase()}`}>
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
