import { useState } from 'react';
import './App.css';

type Task = {
  id: number;
  text: string;
  done: boolean;
};
function App() {
  const [taskList, setTaskList] = useState<Task[]>([
    { id: 1, text: 'Lär dig React', done: false },
    { id: 2, text: 'Bygg en todo-app', done: false },
    { id: 3, text: 'Slappna av!', done: false },
  ]);
  const [taskText, setTaskText] = useState<string>('');

  const addTask = () => {
    console.log(taskList);

    const newTask: Task = {
      id: taskList.length + 1,
      text: taskText,
      done: false,
    };
    setTaskList([...taskList, newTask]);
    setTaskText('');
  };

  const deleteTask = (id: number) => {
    const NewTasks = taskList.filter((task) => task.id !== id);
    setTaskList(NewTasks);
  };

  return (
    <>
      <h1>Todo</h1>
      <div className="card">
        <input
          type="text"
          className="input"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Skriv en uppgift"
        />

        <button onClick={addTask}>Lägg till</button>
      </div>
      <div>
        <ul>
          {taskList.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => deleteTask(task.id)}>Ta bort</button>
              <button onClick={() => upDateTask(task.id)}>Ändra</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
