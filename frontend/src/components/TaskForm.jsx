import { useState } from 'react';

const TaskForm = ({ addTask }) => {
      const [title, setTitle] = useState('');

      const handleSubmit = (e) => {
            e.preventDefault();
            if (!title) return;
            addTask(title);
            setTitle('');
      };

      return (
            <form onSubmit={handleSubmit} className="flex mb-4">
                  <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter a task"
                        className="grow px-4 py-2 border rounded-l-md"
                  />
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                        Add
                  </button>
            </form>
      );
};

export default TaskForm;
