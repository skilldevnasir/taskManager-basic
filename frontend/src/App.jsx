import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch('https://basic-task-manager-dfxk.onrender.com/tasks');
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks;
  }, []);

  const addTask = async (title) => {
    const res = await fetch('https://basic-task-manager-dfxk.onrender.com/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    const newTask = await res.json();
    setTasks(prev => [...prev, newTask]);
  };

  const deleteTask = async (id) => {
    await fetch(`https://basic-task-manager-dfxk.onrender.com/tasks/${id}`, { method: 'DELETE' });
    setTasks(prev => prev.filter(task => task._id !== id));
  };

  const completeTask = async (id) => {
    const res = await fetch(`https://basic-task-manager-dfxk.onrender.com/tasks/${id}`, {
      method: 'PATCH',
    });
    const updated = await res.json();
    setTasks(prev => prev.map(task => task._id === id ? updated : task));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">TaskFlow Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
    </div>
  );
};

export default App;
