import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { TaskContext } from '../context/TaskContext';
import './Profile.css';

const Profile = () => {
  const { auth } = useContext(AuthContext);
  const { tasks } = useContext(TaskContext);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const tasksByPriority = {
    high: tasks.filter(t => t.priority === 'High').length,
    medium: tasks.filter(t => t.priority === 'Medium').length,
    low: tasks.filter(t => t.priority === 'Low').length,
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Account</h1>
      </div>

      <div className="profile-content">
        <div className="user-card">
          <div className="user-avatar">👤</div>
          <div className="user-info">
            <h2>{auth.user?.name || 'User'}</h2>
            <p>{auth.user?.email || 'email@example.com'}</p>
            <button className="logout-btn-profile">Logout (Y)</button>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-label">Total Tasks</div>
              <div className="stat-value">{totalTasks}</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">Completed</div>
              <div className="stat-value">{completedTasks}</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">Pending</div>
              <div className="stat-value">{pendingTasks}</div>
            </div>
          </div>

          <div className="stat-box full-width">
            <div className="stat-label">Completion %</div>
            <div className="stat-value">
              {totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100)}%
            </div>
          </div>
        </div>

        <div className="priority-section">
          <h3>Tasks by Priority</h3>
          <div className="priority-bars">
            <div className="priority-item">
              <label>High</label>
              <div className="priority-bar">
                <div className="bar-fill high" style={{ width: `${(tasksByPriority.high / Math.max(totalTasks, 1)) * 100}%` }}></div>
              </div>
              <span>{tasksByPriority.high}</span>
            </div>
            <div className="priority-item">
              <label>Medium</label>
              <div className="priority-bar">
                <div className="bar-fill medium" style={{ width: `${(tasksByPriority.medium / Math.max(totalTasks, 1)) * 100}%` }}></div>
              </div>
              <span>{tasksByPriority.medium}</span>
            </div>
            <div className="priority-item">
              <label>Low</label>
              <div className="priority-bar">
                <div className="bar-fill low" style={{ width: `${(tasksByPriority.low / Math.max(totalTasks, 1)) * 100}%` }}></div>
              </div>
              <span>{tasksByPriority.low}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
