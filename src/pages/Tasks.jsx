import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import './Tasks.css';

const Tasks = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Work');
  const [priority, setPriority] = useState('Low');
  const [errors, setErrors] = useState('');
  const [filter, setFilter] = useState('all');

  const validateForm = () => {
    if (!title.trim()) {
      setErrors('Task title is required');
      return false;
    }
    setErrors('');
    return true;
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          title: title.trim(),
          category,
          priority,
          completed: false
        }
      });
      setTitle('');
      setCategory('Work');
      setPriority('Low');
    }
  };

  const handleToggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(t => t.completed);
      case 'pending':
        return tasks.filter(t => !t.completed);
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <h1>Task Manager</h1>
        <p>My Tasks</p>
      </div>

      <div className="tasks-content">
        <div className="add-task-section">
          <h2>Add New Task</h2>
          <form onSubmit={handleAddTask} className="add-task-form">
            <div className="form-group">
              <label>What needs to be done?</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What needs to be done?"
                className="task-input"
              />
              {errors && <p className="error-message">{errors}</p>}
            </div>

            <div className="task-meta">
              <div className="form-group">
                <label>Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="task-select"
                >
                  <option>Work</option>
                  <option>Personal</option>
                  <option>Shopping</option>
                  <option>Health</option>
                </select>
              </div>

              <div className="form-group">
                <label>Priority</label>
                <div className="priority-buttons">
                  <button
                    type="button"
                    className={`priority-btn ${priority === 'Low' ? 'active' : ''}`}
                    onClick={() => setPriority('Low')}
                  >
                    Low
                  </button>
                  <button
                    type="button"
                    className={`priority-btn ${priority === 'Medium' ? 'active' : ''}`}
                    onClick={() => setPriority('Medium')}
                  >
                    Medium
                  </button>
                  <button
                    type="button"
                    className={`priority-btn ${priority === 'High' ? 'active' : ''}`}
                    onClick={() => setPriority('High')}
                  >
                    High
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" className="add-task-btn">+ Add Task</button>
          </form>
        </div>

        <div className="tasks-list-section">
          <div className="filter-tabs">
            <button
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({tasks.length})
            </button>
            <button
              className={`filter-tab ${filter === 'pending' ? 'active' : ''}`}
              onClick={() => setFilter('pending')}
            >
              Pending ({tasks.filter(t => !t.completed).length})
            </button>
            <button
              className={`filter-tab ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed ({tasks.filter(t => t.completed).length})
            </button>
          </div>

          {filteredTasks.length === 0 ? (
            <p className="no-tasks">No tasks to display</p>
          ) : (
            <div className="tasks-list">
              {filteredTasks.map(task => (
                <div key={task.id} className="task-card">
                  <div className="task-checkbox">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleTask(task.id)}
                    />
                  </div>
                  <div className="task-details">
                    <h3 className={task.completed ? 'completed' : ''}>{task.title}</h3>
                    <div className="task-badges">
                      <span className="category-badge">{task.category}</span>
                      <span className={`priority-badge ${task.priority?.toLowerCase()}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                  <div className="task-actions">
                    <button
                      onClick={() => handleToggleTask(task.id)}
                      className={`action-btn ${task.completed ? 'done' : 'update'}`}
                    >
                      {task.completed ? 'Done' : 'Update'}
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="action-btn delete"
                    >
                      Del
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
