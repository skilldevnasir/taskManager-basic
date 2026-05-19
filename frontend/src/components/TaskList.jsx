

const TaskList = ({ tasks, deleteTask, completeTask }) => {
      return (
            <ul>
                  {tasks.map((task) => (
                        <li key={task._id} className="bg-white p-4 mb-2 rounded shadow flex justify-between items-center">
                              <span className={task.status === 'completed' ? 'line-through text-gray-500' : ''}>
                                    {task.title}
                              </span>
                              <div className="flex space-x-2">
                                    {task.status !== 'completed' && (
                                          <button onClick={() => completeTask(task._id)} className="text-green-500 hover:underline">Complete</button>
                                    )}
                                    <button onClick={() => deleteTask(task._id)} className="text-red-500 hover:underline">Delete</button>
                              </div>
                        </li>
                  ))}
            </ul>
      );
};

export default TaskList;
