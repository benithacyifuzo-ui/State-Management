
import { useState } from 'react';

export default function State() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const [profile, setProfile] = useState({
    name: 'Aline',
    city: 'Kigali',
    available: true
  });

  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  const addTask = () => {
    if (taskTitle.trim() === '') return;

    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        done: false
      }
    ]);

    setTaskTitle('');
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  return (
    <div className="state-container">
      <h1>React State Management</h1>

      <section className="card">
        <h2>Counter</h2>
        <h3>{count}</h3>

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </section>

      <section className="card">
        <h2>Name Input</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <p>Hello, {name || 'Guest'}!</p>

        <button onClick={() => setName('')}>
          Clear
        </button>
      </section>

      <section className="card">
        <h2>My Profile</h2>

        <p>Name: {profile.name}</p>
        <p>City: {profile.city}</p>
        <p>Status: {profile.available ? 'Available' : 'Unavailable'}</p>

        <button
          onClick={() =>
            setProfile({
              ...profile,
              available: !profile.available
            })
          }
        >
          Change Availability
        </button>
      </section>

      <section className="card">
        <h2>My Tasks</h2>

        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter a task"
        />

        <button onClick={addTask}>Add Task</button>

        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.done ? 'completed' : ''}>
                {task.title}
              </span>
            </label>
          </div>
        ))}
      </section>
    </div>
  );
}
